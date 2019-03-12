<template>
  <div>
    <el-card shadow="hover" style="margin: 10px; width: 250px;" @click.native="showDetailInfo">
      <p>{{ activity.title }}</p>
      <img :src="activity.imgUrl" style="width: 100%" class="image">
      <div v-if="isMyActivity(activity.author)" style="padding: 10px;">
        <div class="bottom clearfix">
          {{ activity.amount }} 数据
        </div>
        <div style="float: right;margin-bottom: 20px">
          <el-button type="primary" icon="el-icon-edit" circle/>
          <el-button type="danger" icon="el-icon-delete" circle/>
        </div>
      </div>
    </el-card>
    <activity-item
      :visible.sync="activityDetailInfoVisible"
      :activity="activity"/>
  </div>
</template>

<script>
import activityItem from '@/components/ActivityItem'
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
      // todo if username === login username that show button
      return false
    },
    showDetailInfo() {
      this.activityDetailInfoVisible = true
    }
  }
}
</script>

<style scoped>

</style>
