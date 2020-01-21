<template>
  <div>
    <mainNav></mainNav>
    <mainBar></mainBar>
  </div>
</template>

<script>
  import mainNav from './mainCom/mainNav.vue'
  import mainBar from './mainCom/mainBar.vue'

export default {
  name: 'mainView',
  components: {
    mainNav,
    mainBar
  }
};
</script>

<style></style>
