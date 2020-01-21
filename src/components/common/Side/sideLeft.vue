<template>
  <div>
    <sideBan></sideBan>
    <sideCard></sideCard>
  </div>
</template>

<script>
import sideBan from './sideCom/sideBan.vue';
import sideCard from './sideCom/sideCard.vue'

export default {
  name: 'sideLeft',
  components: {
    sideBan,
    sideCard
  }
};
</script>

<style scoped>

</style>
