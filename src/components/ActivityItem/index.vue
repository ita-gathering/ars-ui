<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :before-close="handleClose"
    :title="activity.title"
    top="30px"
    width="600px">
    <el-form label-position="top">
      <el-form-item v-if="isCreate" label="活动名称">
        <el-input
          v-model="activity.title"
          :rows="10"
          :disabled="couldEdit"/>
      </el-form-item>
      <el-form-item label="活动介绍">
        <el-input
          v-model="activity.content"
          :rows="8"
          :disabled="couldEdit"
          type="textarea"/>
      </el-form-item>
      <el-form-item label="活动日期">
        <el-date-picker v-model="activity.startDate" :disabled="couldEdit"/>
      </el-form-item>
      <el-form-item label="截止报名日期" >
        <el-date-picker v-model="activity.closingDate" :disabled="couldEdit"/>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button v-if="couldEdit" type="primary" @click="submitForm">立即报名</el-button>
      <el-button v-else type="primary" @click="createActivity">确认</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { createActivity } from '@/api/activity'
export default {
  name: 'Index',
  props: {
    activity: {
      type: Object,
      default: () => {}
    },
    visible: {
      type: Boolean,
      default: false
    },
    operationType: {
      type: String,
      default: 'edit'
    }
  },
  data() {
    return {
      couldEdit: false
    }
  },
  computed: {
    dialogVisible: {
      get() {
        this.checkCouldEdit()
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  },
  methods: {
    submitForm() {
      this.$message({
        message: '报名成功',
        type: 'success'
      })
      this.handleClose()
    },
    createActivity() {
      this.activity.author = 'admin'
      createActivity(this.activity).then(res => {
        this.$store.dispatch('fetchAllActivities')
        this.$message({
          message: this.isCreate() ? '创建活动成功' : '更新活动成果',
          type: 'success'
        })
        this.handleClose()
      }).catch(error => {
        this.$message({
          message: (this.isCreate() ? '创建活动失败' : '更新活动失败') + error,
          type: 'error'
        })
      })
    },
    handleClose() {
      this.dialogVisible = false
    },
    isCreate() {
      return this.operationType === 'create'
    },
    isEdit() {
      return this.operationType === 'edit'
    },
    checkCouldEdit() {
      if (this.isEdit()) {
        this.couldEdit = !(this.activity.author === 'admin')
      } else {
        this.couldEdit = !(this.isCreate())
      }
    }
  }
}
</script>

<style scoped>

</style>
