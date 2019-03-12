<template>
  <div>
    <el-form :inline="true" :model="searchForm" style="margin: 10px" class="demo-form-inline">
      <el-form-item label="活动名称">
        <el-input v-model="searchForm.title"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="15">
      <el-col v-for="activity in activities" :key="activity.id" :span="dynSpan">
        <activity-card :activity="activity"/>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import activityCard from '@/components/ActivityCard'
import { fetchAllActivities } from '@/api/activity'
export default {
  name: 'AllActivity',
  components: {
    activityCard
  },
  data() {
    return {
      dynSpan: 4,
      searchForm: {},
      activities: []
    }
  },
  async created() {
    this.dynSpan = (document.body.clientWidth / 300)
    await fetchAllActivities().then(res => {
      console.log(res)
      this.activities = res.data
    })
  },
  mounted() {
    this.dynSpan = (document.body.clientWidth / 300)
  },
  methods: {
    submitSearch() {
      console.log('searchForm :', this.searchForm)
    }
  }
}
</script>

<style scoped>

</style>
