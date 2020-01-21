<template>
  <div id="app">
    <mainFrame>

      <Header slot="header">
        <img src="./assets/img/head/head-texture.png" slot="texture">
        <headMenu slot="menu"></headMenu>
      </Header>

      <sideLeft slot="sideLeft"></sideLeft>

      <sideRight slot="sideRight"></sideRight>

      <mainView slot="main"></mainView>
    </mainFrame>
  </div>
</template>

<script>
import mainFrame from './components/content/mainFrame';
import Header from './components/common/Head/Header';
import headMenu from 'components/common/Head/headMenu.vue'

import sideLeft from 'components/common/Side/sideLeft.vue'
import sideRight from 'components/common/Side/sideRight.vue'

import mainView from 'components/common/Main/mainView.vue'


export default {
  name: 'App',
  components: {
    mainFrame,
    Header,
    headMenu,
    sideLeft,
    sideRight,
    mainView
  }
};
</script>

<style>
@import 'assets/css/base.css';
</style>
