<template>
  <div class="display">
    <div class="head"><slot name="header">Header</slot></div>
    <div class="body">
      <div class="left"><slot name="sideLeft">Aside-left</slot></div>
      <div class="main"><slot name="main">Main</slot></div>
      <div class="right"><slot name="sideRight">Aside-right</slot></div>
    </div>
    <div class="footer"><slot name="footer">Footer</slot></div>
  </div>
</template>

<script>
export default {
  name: 'mainFrame',
  props: {}
};
</script>

<style scoped>

.display{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.head {
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  height: 60px;
}

.footer {
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  /* height: 60px; */

  /* background-color: #33B5F3; */
}

.body {
  flex: 1;
  /* background-color: #475669; */
  display: flex;
}

.left,
.right {
  flex: 1;
  /* overflow: hidden; */
  /* background-color: #D3DCE6; */
  color: #fff;
  /* text-align: center; */
  /* line-height: 750px; */
}

.main {
  width: 60%;
  /* background-color: #E9EEF3; */
  color: #fff;
  text-align: center;
  /* line-height: 750px; */
}
</style>
