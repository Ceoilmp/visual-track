<template>
  <el-dropdown>
    <span class="el-dropdown-link"><img src="~assets/img/head/menu.png" alt="" /></span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>黄金糕</el-dropdown-item>
      <el-dropdown-item>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
      <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'headMenu'
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-dropdown-link img{
  height: 22px;
  /* margin-left: 16px; */
}

.el-icon-arrow-down {
  font-size: 10px;
}
</style>
