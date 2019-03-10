<template>
  <el-row :gutter="15">
    <el-col v-for="activity in activities" :key="activity.id" :span="dynSpan">
      <activity-item :activity-info="activity"/>
    </el-col>
  </el-row>

</template>

<script>
import activityItem from '@/components/ActivityItem'
import { fetchAllActivities } from '@/api/activity'
export default {
  name: 'AllAvtivity',
  components: {
    activityItem
  },
  data() {
    return {
      dynSpan: 3,
      activities: []
    }
  },
  async created() {
    await fetchAllActivities().then(res => {
      console.log(res)
      this.activities = res.data
    })
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        this.dynSpan = (document.body.clientWidth / 300)
      })()
    }
  }
}
</script>

<style scoped>

</style>
