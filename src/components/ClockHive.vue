<template>
  {{currentDate.toTimeString().slice(0, 8)}}
  <div class="clock-hive">
    <div v-for="digit in digits">
      <Digit :digit-matrix="digitMatrix" :digit="digit.digit" :duration="digit.duration"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Digit from "./Digit.vue";
import {computed, onMounted, onUnmounted, ref} from "vue";
import type {DigitKey} from "../util/digits/DigitUtil.ts";

const currentDate = ref(new Date());

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

const digitMatrix = ref<[number, number]>([3, 2]);

const digits = computed<Array<{digit: DigitKey, duration: number}>>(() => {
  const date = currentDate.value.toTimeString().slice(0, 8);
  return [
    {digit: Number(date.charAt(0)) as DigitKey, duration: 2},
    {digit: Number(date.charAt(1)) as DigitKey, duration: 2},
    {digit: Number(date.charAt(3)) as DigitKey, duration: 2},
    {digit: Number(date.charAt(4)) as DigitKey, duration: 2},
    {digit: Number(date.charAt(6)) as DigitKey, duration: 2},
    {digit: Number(date.charAt(7)) as DigitKey, duration: 0.5},
  ];
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