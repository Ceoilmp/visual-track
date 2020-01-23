<template>
  <div class="rollSide" :style="{height:rollHeightRight+'px'}">
    <!-- <sideBan></sideBan> -->
    <sideCard></sideCard>
  </div>
</template>

<script>
// import sideBan from './sideCom/sideBan.vue';
import sideCard from './sideCom/sideCard.vue'

export default {
  name: 'sideRight',
  components: {
    // sideBan,
    sideCard
  },
  props:{
    fullHeight:0
  },
  computed:{
    rollHeightRight(){
      return this.fullHeight-83
    }
  }
};
</script>

<style scoped>
  .rollSide {
    /* height: 670px; */
    overflow-x: hidden;
    overflow-y: scroll;
    text-align: left;
  }
  .rollSide::-webkit-scrollbar {
    display: none;
  }
</style>
