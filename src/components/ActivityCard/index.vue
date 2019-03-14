<template>
  <div>
    <el-card shadow="hover" style="margin: 10px; width: 250px; height: 315px">
      <p>{{ activity.title }}</p>
      <img src="http://element-cn.eleme.io/static/resource.a72b8f8.png" style="width: 100%" class="image" @click="toDetailPage">
      <div v-if="shouldShowAmountAndButton()">
        <div style="padding: 5px;">
          <div class="bottom clearfix">
            {{ activity.participants===null?0:activity.participants.length }} 数据
          </div>
          <div style="float: right;margin-top: 5px">
            <el-button type="success" icon="el-icon-plus" circle @click="showEditDialog"/>
            <el-button v-if="isMyActivity(activity.author)" type="primary" icon="el-icon-edit" circle @click="showEditDialog"/>
            <el-button v-if="isMyActivity(activity.author)" type="danger" icon="el-icon-delete" circle @click="deleteActivity(activity.id)"/>
          </div>
        </div>
        <!--<div v-if="!isMyActivity(activity.author)">-->
        <!--<div style="float: right;margin-bottom: 20px;margin-top: 28px;margin-right: 10px">-->
        <!--<el-button type="success" icon="el-icon-plus" circle @click="showEditDialog"/>-->
        <!--</div>-->
        <!--</div>-->
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
      this.$router.push('/activity/' + this.activity.id)
    },
    shouldShowAmountAndButton() {
      return this.$router.currentRoute.name !== 'CraticActivities'
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
