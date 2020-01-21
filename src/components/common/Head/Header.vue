<template>
    <div :style="{backgroundColor:bgColor}">
      <div class="texture"><slot name="texture"></slot></div>
      <div class="title"><slot name="title">武汉市出租车轨迹可视化分析</slot></div>
      <div class="head-bottom"><slot name="head-bottom">------------------------</slot></div>
      <div class="menu"><slot name="menu"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:{
            bgColor:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped>
  .texture img{
    position: absolute;
    display: block;
    height: 60px;
    width: 100%;
  }

  .title{
    font-family: "黑体";
    color: #fff;
    line-height: 40px;
    font-size: 24px;
  }

  .head-bottom{
    float: right;
  }

  .menu{
    position: fixed;
    left: 2px;
    top:10px
  }
</style>
