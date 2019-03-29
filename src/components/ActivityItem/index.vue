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
      <el-button v-if="couldEdit" type="primary" @click="signUp">立即报名</el-button>
      <el-button v-else type="primary" @click="createActivity">确认</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { createActivity, signUpActivity } from '@/api/activity'
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
    signUp() {
      const user = { 'userName': 'admin' }
      signUpActivity(user, this.activity.id).then(res => {
        let message = res.data.message
        if (res.data.status === 'successful') {
          this.$message({
            message: '您已成功报名',
            type: 'success'
          })
        } else {
          if (res.data.message === 'has already participate') { message = '你已报名成功，请不要重复报名' } else if (res.data.message === 'network issue') { message = '网络错误，请稍后再重试' }
          this.$message({
            message: message,
            type: 'warning'
          })
        }
      })
      this.handleClose()
    },
    createActivity() {
      this.activity.author = 'admin'
      createActivity(this.activity).then(res => {
        this.$store.dispatch('fetchActivitiesByCriteria')
        this.$message({
          message: this.isCreate() ? '创建活动成功' : '更新活动成功',
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
