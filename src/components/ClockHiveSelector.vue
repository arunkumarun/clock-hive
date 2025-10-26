<template>
  <div class="clock-hive-selector">
    <div class="clock-actions">
      <SegmentedButtons v-model="matrixSize" :items="items"/>
      <button @click="toggleFullScreen">{{ isFullscreen ? 'Exit Full Screen' : 'Enter Full Screen' }}</button>
    </div>
    <div ref="clockHiveContainer" class="clock-hive-container">
      <ClockHive :key="matrixSize.toString()" :matrix-size="matrixSize"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, useTemplateRef} from "vue";
import ClockHive from "./ClockHive.vue";
import SegmentedButtons from "./input/SegmentedButtons.vue";
import {useFullscreen} from "@vueuse/core";

const clockHiveContainer = useTemplateRef<HTMLDivElement>("clockHiveContainer");
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen(clockHiveContainer);

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
  overflow: hidden;
  margin: auto;
}

.clock-actions {
  display: flex;
  gap: 1rem;
  margin: auto;
}
</style>