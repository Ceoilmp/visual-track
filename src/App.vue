<template>
  <div id="app">
    <button @click="getData">点击获取数据</button>
    {{testData}}
  </div>
</template>

<script>
  import {request} from "network/request";

  export default  {
      name: 'App',
      data(){
          return{
              testData:''
          }
      },
      components:{

      },
      methods:{
          getData(){
              request({
                  url:'/home/multidata'
              }).then(res => {
                  this.testData=res
              }).catch(err =>{
                  console.log(err);
              })
          }
      }
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
