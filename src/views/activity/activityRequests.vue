<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="activityName"
      label="活动名称"
      width="180"/>
    <el-table-column
      prop="status"
      label="状态"
      width="100"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="getStatusColorType(scope.row.status)"
          disable-transitions>{{ formatStatus(scope.row.status) }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="申请时间"/>
  </el-table>
</template>

<script>
import { getUserActivityRequests } from '../../api/activity'

export default {
  name: 'ActivityRequests',
  data() {
    return {
      tableData: [
        {
          activityName: 'a',
          status: 'pending',
          createTime: '2019-4-25'
        },
        {
          activityName: 'a',
          status: 'pending',
          createTime: '2019-4-25'
        },
        {
          activityName: 'a',
          status: 'accept',
          createTime: '2019-4-25'
        }, {
          activityName: 'a',
          status: 'reject',
          createTime: '2019-4-25'
        }
      ]
    }
  },
  async created() {
    const res = await getUserActivityRequests('admin')
    this.tableData = res.data.data
  },
  methods: {
    getStatusColorType(status) {
      if (status === 'accept') {
        return 'success'
      } else if (status === 'pending') {
        return 'warning'
      } else if (status === 'reject') {
        return 'danger'
      }
    },
    formatStatus(status) {
      const statusMap = {
        'accept': '报名成功',
        'pending': '报名中',
        'reject': '报名失败'
      }
      return statusMap[status]
    }
  }
}
</script>

<style>
  .el-table .pending-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .el-table .reject-row {
    background: #ffded8;
  }
</style>
