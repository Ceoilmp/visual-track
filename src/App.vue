<template>
  <div id="app">
    <mainFrame>

      <Header slot="header">
        <img src="./assets/img/head/head-texture.png" slot="texture">
        <headMenu slot="menu"></headMenu>
      </Header>

       <sideLeft slot="sideLeft" :fullHeight="fullHeight"></sideLeft>

      <sideRight slot="sideRight" :fullHeight="fullHeight"></sideRight>

      <mainView slot="main"></mainView>
    </mainFrame>
    <frame>
  </div>
</template>

<script>
import mainFrame from './components/content/mainFrame';
import Header from './components/common/Head/Header';
import headMenu from 'components/common/Head/headMenu.vue'

import sideLeft from 'components/common/Side/sideLeft.vue'
import sideRight from 'components/common/Side/sideRight.vue'

import mainView from 'components/common/Main/mainView.vue'

import frame from './components/content/frame.vue'


export default {
  name: 'App',
  components: {
    mainFrame,
    Header,
    headMenu,
    sideLeft,
    sideRight,
    mainView,
    frame
  },
  data(){
    return {
      fullHeight:Number
    }
  },
  created(){
    this.fullHeight = document.documentElement.clientHeight;
  },
  mounted() {
    this.get_bodyHeight();
  },
  methods: {
    get_bodyHeight() {
      //动态获取浏览器高度
      const that = this;
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight;
          that.fullHeight = window.fullHeight;
        })();
      };
    }
  }
};
</script>

<style>
@import 'assets/css/base.css';

#app{
  display: block;
  height: 100%;
}
</style>
