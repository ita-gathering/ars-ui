<template>
  <div>
    <el-card shadow="hover" style="margin: 10px; width: 250px; height: 310px">
      <p>{{ activity.title }}</p>
      <img src="http://element-cn.eleme.io/static/resource.a72b8f8.png" style="width: 100%" class="image" @click="toDetailPage">
      <div v-if="isMyActivity(activity.author)" style="padding: 10px;">
        <div class="bottom clearfix">
          {{ activity.amount }} 数据
        </div>
        <div style="float: right;margin-bottom: 20px">
          <el-button type="primary" icon="el-icon-edit" circle @click="showEditDialog"/>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteActivity(activity.id)"/>
        </div>
      </div>
    </el-card>
    <activity-item
      :visible.sync="activityDetailInfoVisible"
      :activity="activity"
      operation-type="edit"/>
  </div>
</template>

<script>
import activityItem from '@/components/ActivityItem'
import { deleteActivityById } from '@/api/activity'
export default {
  name: 'Index',
  components: {
    activityItem
  },
  props: {
    activity: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activityDetailInfoVisible: false
    }
  },
  methods: {
    isMyActivity(username) {
      return username === 'admin'
    },
    showEditDialog() {
      this.activityDetailInfoVisible = true
    },
    toDetailPage() {
      console.log('...')
      this.$router.push('/activity/:id/index')
    },
    deleteActivity(id) {
      this.$confirm('此操作将永久删除活动和所有报名人员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteActivityById(id).then(() => {
          this.$store.dispatch('fetchAllActivities')
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(error => {
          this.$message({
            type: 'warning',
            message: '删除失败!' + error
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
