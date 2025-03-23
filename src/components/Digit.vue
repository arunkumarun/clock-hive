<template>
  <div class="digit">
    <template v-for="(row, rowIndex) in digitClockHandMatrix">
      <div v-for="(clockHand, index) in row" :key="`${rowIndex}-${index}`">
        <Clock :hour="clockHand.hour" :minute="clockHand.minute" :should-mod="clockHand.shouldMod" :duration="duration"/>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Clock from "./Clock.vue";
import {type DigitKey, digitClockHandMap} from "../util/digits/DigitUtil.ts";
import {computed} from "vue";

const props = defineProps<{
  digitMatrix: [number, number];
  digit: DigitKey;
  duration: number;
}>();

const digitClockHandMatrix = computed(() => {
  return digitClockHandMap[props.digitMatrix[0]][props.digitMatrix[1]][props.digit];
});
</script>

<style scoped>

.digit {
  --_digit-row: v-bind(digitMatrix[0], 3);
  --_digit-col: v-bind(digitMatrix[1], 2);
  display: grid;
  grid-template-columns: repeat(var(--_digit-col), minmax(0, 1fr));
  grid-template-rows: repeat(var(--_digit-row), minmax(0, 1fr));
}
</style>