<template>
  {{currentDate.toTimeString().slice(0, 8)}}
  <div class="clock-hive">
    <div v-for="digit in digits">
      <Digit :digit-matrix="digitMatrix" :digit="digit"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Digit from "./Digit.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import type {DigitKey} from "../util/digits/DigitUtil.ts";

const currentDate = ref(new Date());

const digitMatrix = ref<[number, number]>([3, 2]);

const digits = computed<DigitKey[]>(() => {
  const date = currentDate.value.toTimeString().slice(0, 8);
  return [
    Number(date.charAt(0)),
    Number(date.charAt(1)),
    Number(date.charAt(3)),
    Number(date.charAt(4)),
    /*Number(date.charAt(6)),
    Number(date.charAt(7)),*/
  ] as DigitKey[];
});

// Update the date every second
let intervalId: number;
onMounted(() => {
  intervalId = setInterval(() => {
    currentDate.value = new Date(); // Update the current date
  }, 1000); // Check every second
});

// Cleanup interval when component is unmounted
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.clock-hive {
  --clock-color: #232323;
  border: 1px solid var(--clock-color);
  border-radius: 4px;
  display: grid;
  grid-auto-flow: column;
  overflow: hidden;
  padding: 40px;
  background-color: var(--clock-color);
}
</style>