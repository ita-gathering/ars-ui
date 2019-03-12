<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :before-close="handleClose"
    :title="activity.title"
    top="50px"
    width="600px">
    <el-form label-position="top">
      <el-form-item label="活动介绍">
        <el-input
          v-model="activity.content"
          :rows="10"
          :disabled="activityDetailInfoDisable"
          type="textarea"/>
      </el-form-item>
      <el-form-item label="活动日期">
        <el-date-picker v-model="activity.startDate" :disabled="activityDetailInfoDisable"/>
      </el-form-item>
      <el-form-item label="截止报名日期" >
        <el-date-picker v-model="activity.closingDate" :disabled="activityDetailInfoDisable"/>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button v-if="activityDetailInfoDisable" type="primary" @click="submitForm">立即报名</el-button>
      <el-button v-else type="primary" @click="createActivity">提交</el-button>
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
    isdisabled: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    },
    activityDetailInfoDisable: {
      get() {
        return this.isdisabled
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
    async createActivity() {
      await createActivity(this.activity).then(res => {
        console.log(res)
      })
      this.$message({
        message: '创建活动成功',
        type: 'success'
      })
      this.handleClose()
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
