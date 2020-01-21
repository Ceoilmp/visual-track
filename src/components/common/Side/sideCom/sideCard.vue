<template>
  <div class="cards">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="图表1" name="1"><div><sideCardItem></sideCardItem></div></el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="图表1" name="2"><div><sideCardItem></sideCardItem></div></el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import sideCardItem from './sideCardItem.vue'

export default {
  name: 'sideCard',
  components:{
    sideCardItem
  },
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.el-collapse-item >>> .el-collapse-item__header {
  color: white;
  padding-left: 10px;
  background-color: rgba(255, 255, 255, 0.12);
}

.el-collapse-item >>> .el-collapse-item__wrap {
  /* padding-left: 10px; */
  background-color: rgba(255, 255, 255, 0.12);
}

.el-collapse-item >>> .el-collapse-item__content {
  color: #ffffff;
}
</style>
