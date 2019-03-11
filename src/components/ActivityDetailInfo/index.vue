<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :before-close="handleClose"
    width="600px">
    <el-form>
      <el-form-item label="活动名称">
        <el-input v-model="activity.title"/>
      </el-form-item>
      <el-form-item label="活动介绍">
        <el-input v-model="activity.content"/>
      </el-form-item>
      <el-form-item label="截止报名日期">
        <el-input v-model="activity.closingDate"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即报名</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
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
    }
  },
  methods: {
    submitForm() {
    },
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
