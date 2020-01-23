<template>
  <div class="roll">
    <sideBan></sideBan>
    <div class="rollSide" :style="{ height: rollHeightLeft + 'px' }"><sideCard></sideCard></div>
  </div>
</template>

<script>
import sideBan from './sideCom/sideBan.vue';
import sideCard from './sideCom/sideCard.vue';

export default {
  name: 'sideLeft',
  components: {
    sideBan,
    sideCard
  },
  props:{
    fullHeight:0
  },
  computed:{
    rollHeightLeft(){
      return this.fullHeight-243
    }
  }
};
</script>

<style scoped>
.rollSide {
  /* height: 510px; */
  overflow-x: hidden;
  overflow-y: scroll;
  text-align: left;
}
.rollSide::-webkit-scrollbar {
  display: none;
}
</style>
