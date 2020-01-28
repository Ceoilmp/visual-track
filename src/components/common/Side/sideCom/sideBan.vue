<template>
  <el-carousel height="120px" indicator-position="inside">
    <el-carousel-item v-for="item in picItem" :key="item.id">
      <img :src="item.idView" class="image">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'sideBan',
  data() {
    return {
      picItem: [
        { id: 0, idView: require('assets/img/sideLeft/banner/1.jpg') },
        { id: 1, idView: require('assets/img/sideLeft/banner/2.jpg') }
      ]
    };
  }
};
</script>

<style scoped>
  .el-carousel{
    margin-bottom: 8px;
  }

.el-carousel__item h3 {
  color: #475669;
  font-size: 12px;
  opacity: 0.75;
  line-height: 120px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.image{
  position: absolute;
  display: block;
  /* height: 60px; */
  width: 100%;
}
</style>
