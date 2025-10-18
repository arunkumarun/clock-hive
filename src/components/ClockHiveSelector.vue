<template>
  <div class="clock-hive-selector">
    <SegmentedButtons class="clock-hive-segmented-btn" v-model="matrixSize" :items="items"/>
    <div class="clock-hive-container">
      <ClockHive :key="matrixSize.toString()" :matrix-size="matrixSize"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import ClockHive from "./ClockHive.vue";
import SegmentedButtons from "./input/SegmentedButtons.vue";

const matrixSize = ref<[number, number]>([6, 5]);

const items = [
  {name: `Hive ${3*2*4}`, value: [3, 2]},
  {name: `Hive ${6*3*4}`, value: [6, 3]},
  {name: `Hive ${6*5*4}`, value: [6, 5]},
]
</script>

<style scoped>
.clock-hive-selector {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: max-content minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
}

.clock-hive-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-rows: minmax(0, 1fr);
  grid-auto-columns: minmax(0, 1fr);
  align-items: center;
}

.clock-hive-segmented-btn {
  margin: auto;
}
</style>