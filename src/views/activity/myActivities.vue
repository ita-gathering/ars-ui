<template>
  <div>
    <el-form ref="searchForm" :inline="true" :model="searchForm" style="margin: 10px" class="demo-form-inline">
      <el-form-item label="活动名称">
        <el-input v-model="searchForm.title" clearable/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSearch">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="primary" @click="addActivity">添加</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="15">
      <el-col v-for="activity in activities" :key="activity.id" :span="dynSpan">
        <activity-card :activity="activity"/>
      </el-col>
    </el-row>
    <activity-item
      :visible.sync="activityDetailInfoVisible"
      :activity="newActivity"
      operation-type="create"
    />
  </div>
</template>

<script>
import activityItem from '@/components/ActivityItem'
import activityCard from '@/components/ActivityCard'
import { mapState } from 'vuex'
export default {
  name: 'AllActivity',
  components: {
    activityCard,
    activityItem
  },
  data() {
    return {
      dynSpan: 4,
      searchForm: {},
      newActivity: {},
      isDisabled: false,
      activityDetailInfoVisible: false
    }
  },
  computed: mapState({
    activities: state => state.activity.activities
  }),
  async created() {
    console.log('create')
    this.dynSpan = (document.body.clientWidth / 300)
    await this.$store.dispatch('fetchActivitiesByCriteria', '?author=admin')
    // todo temporary bypass permission
    await this.$store.dispatch('GenerateRoutes')
  },
  mounted() {
    this.dynSpan = (document.body.clientWidth / 300)
  },
  methods: {
    submitSearch() {
      this.$store.dispatch('fetchActivitiesByCriteria', '?author=admin&title=' + this.searchForm.title)
    },
    addActivity() {
      this.activityDetailInfoVisible = true
    },
    resetForm() {
      this.searchForm.title = ''
      this.$store.dispatch('fetchActivitiesByCriteria', '?author=admin')
    }
  }
}
</script>

<style scoped>

</style>
