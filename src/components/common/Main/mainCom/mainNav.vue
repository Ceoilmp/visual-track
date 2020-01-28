<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#ffffff" background-color="#1c3c5d" active-text-color="#3989db" router>
      <el-menu-item index="1">主视图</el-menu-item>

      <el-menu-item index="2">其他视图</el-menu-item>

      <el-menu-item index="3">消息中心</el-menu-item>

      <el-menu-item index="4">订单管理</el-menu-item>

    </el-menu>
    <div class="routerView"><keep-alive><router-view></router-view></keep-alive></div>

  </div>
</template>

<script>
export default {
  name: 'mainNav',
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
  .routerView{
    background-color: rgba(255,255,255,0.1);
    height: 450px;
  }

  .el-menu--horizontal >>> .el-menu-item{
	  height: 32px;
	  line-height: 32px;
    font-size: small;
  }
</style>
