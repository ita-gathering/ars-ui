<template>
  <div>
    <el-card shadow="hover" style="margin: 10px; width: 250px;" @click.native="showDetailInfo">
      <p>{{ activityInfo.title }}</p>
      <img :src="activityInfo.imgUrl" style="width: 100%" class="image">
      <div v-if="isMyActivity(activityInfo.author)" style="padding: 10px;">
        <div class="bottom clearfix">
          {{ activityInfo.amount }} 数据
        </div>
        <div style="float: right;margin-bottom: 20px">
          <el-button type="primary" icon="el-icon-edit" circle/>
          <el-button type="danger" icon="el-icon-delete" circle/>
        </div>
      </div>
    </el-card>
    <activity-detail-info
      :visible.sync="activityDetailInfoVisible"
      :activity="activityInfo"/>
  </div>
</template>

<script>
import activityDetailInfo from '@/components/ActivityDetailInfo'
export default {
  name: 'Index',
  components: {
    activityDetailInfo
  },
  props: {
    activityInfo: {
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
