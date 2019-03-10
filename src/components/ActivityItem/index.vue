<template>
  <el-card shadow="hover" style="margin: 10px; width: 250px;">
    <p>{{ activityInfo.title }}</p>
    <img :src="activityInfo.imgUrl" style="width: 100%" class="image">
    <div style="padding: 10px;">
      <div class="bottom clearfix">
        {{ activityInfo.count }} 数据
      </div>
    </div>
    <div v-if="isMyActivity(activityInfo.author)" style="float: right;margin-bottom: 20px">
      <el-button type="primary" icon="el-icon-edit" circle/>
      <el-button type="danger" icon="el-icon-delete" circle/>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Index',
  props: {
    activityInfo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    isMyActivity(username) {
      console.log('usernamr :', username)
      // todo if username === login username that show button
      return false
    }
  }
}
</script>

<style scoped>

</style>
