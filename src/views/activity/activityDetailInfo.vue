<template>
  <div style="margin: 20px;">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          <span style="color: #409EFF">120</span>
          <span style="float: right">表单总数据<i class="el-icon-question"/></span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <span style="color: #409EFF">1</span>
          <span style="float: right">今日提交<i class="el-icon-question"/></span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <span style="color: #909399">300</span>
          <span style="float: right">表单被浏览<i class="el-icon-question"/></span>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12" style="margin-top: 20px">
      <el-col :span="12">
        <el-card shadow="always">
          <p>
            活动创建时间
            <span style="float: right">2019-3-10 19:00</span>
          </p>
          <p>
            填写者权限
            <span style="float: right">所有人可见</span>
          </p>
          <p>
            报名开启/停止
            <el-switch
              v-model="enable"
              style="float: right"
              active-color="#13ce66"
              inactive-color="#ff4949"/>
          </p>
          <p>
            结果分享
            <span style="float: right">私密：不向任何人公开</span>
          </p>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="always">
          <p>
            活动标签
            <el-tag style="float: right;margin-left: 3px">标签一</el-tag>
            <el-tag type="success" style="float: right">标签二</el-tag>
          </p>
          <p>
            邮件推送提醒
            <span style="float: right">未开启</span>
          </p>
          <p>
            自定义短信推送提醒
            <span style="float: right">未开启</span>
          </p>
          <p>
            团队协作

          </p>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="400px"
        border
        stripe>
        <el-table-column
          prop="date"
          label="日期"
          width="180"/>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"/>
        <el-table-column
          prop="address"
          label="地址"/>
      </el-table>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-button type="danger" @click="clearAllMembers">清空数据</el-button>
      <el-button type="primary" @click="addNewMember">新增数据</el-button>
    </el-row>
  </div>
</template>

<script>
import { fetchActivityRegisters } from '@/api/activity'
export default {
  name: 'ActivityDetailInfo',
  props: {
    activity: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      enable: true,
      tableData: []
    }
  },
  created() {
    fetchActivityRegisters().then(res => {
      this.tableData = res.data
    })
  },
  methods: {
    addNewMember() {},
    clearAllMembers() {
      this.$confirm('此操作将永久删除所有报名人员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
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
