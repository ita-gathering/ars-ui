<template>
  <el-card shadow="hover" style="margin: 10px; width: 250px;height: 350px">
    <img :src="activityInfo.imgUrl" style="width: 100%" class="image">
    <div style="padding: 10px;">
      <p>{{ activityInfo.title }}</p>
      <p>{{ activityInfo.contentShort }}</p>
      <div class="bottom clearfix">
        <time class="time">{{ activityInfo.timestamp }}</time>
      </div>
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
  }
}
</script>

<style scoped>

</style>
