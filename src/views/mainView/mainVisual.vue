<template>
  <div>
    <h4>{{content}}</h4>
    <button @click="getData" class="btn">获取数据</button>
  </div>
</template>

<script>
  import {request} from '@/network/request.js'

  export default{
    name:'mainVisual',
      data(){
        return{
            content:'MainVisual'
        }
      },
      methods:{
        getData(){
            request({
                url:'/test.php',
                data: {
                    info: "西安天气"
                },
                method:"post",
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }).then(res => {
                console.log(res);
                this.content=res;
            }).catch(err => {
                console.log(err);
            })
        }
      }
  }
</script>

<style>
  .btn{
    font-size: 14px;
  }
</style>
