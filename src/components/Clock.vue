<template>
  <div class="clock">
    <span class="arm hour"/>
    <span class="arm minute"/>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import type {ClockProp} from "../util/digits/DigitUtil.ts";

const TOTAL_DEG = 360 as const;
const TOTAL_HOUR = 12 as const;
const TOTAL_MINUTE = 60 as const;

const {
  hour = 0,
  minute = 0,
  delay = 0,
  duration = 2,
  shouldMod = true
} = defineProps<ClockProp>();

const hourAngle = computed(() => {
  const h = shouldMod ? (hour % TOTAL_HOUR) : hour;
  const angle = h * (TOTAL_DEG / TOTAL_HOUR);
  return `${angle}deg`;
});

const minuteAngle = computed(() => {
  const m = shouldMod ? (minute % TOTAL_MINUTE) : minute;
  const angle = m * (TOTAL_DEG / TOTAL_MINUTE);
  return `${angle}deg`;
});

const durationInSeconds = computed(() => {
  return `${duration}s`;
});

const delayInSeconds = computed(() => {
  return `${delay}s`;
});
</script>

<style scoped>
.clock {
  --_clock_size: 100%;

  position: relative;
  background: #2F2F2F;
  border-radius: 50%;
  container-type: inline-size;
  inline-size: var(--_clock_size);
  writing-mode: vertical-lr;
  aspect-ratio: 1 / 1;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .25);
}

.minute {
  --_arm_background: #EEE;
  --_arm_height: 48cqi;
  --_arm_width: 6cqi;
  --_minute_deg: v-bind(minuteAngle);

  transform: rotate(var(--_minute_deg));
}

.hour {
  --_arm_background: #EEE;
  --_arm_height: 45cqi;
  --_arm_width: 6cqi;
  --_hour_deg: v-bind(hourAngle);

  transform: rotate(var(--_hour_deg));
}

.arm {
  --_transition_duration: v-bind(durationInSeconds);
  --_transition_delay: v-bind(delayInSeconds);

  position: absolute;
  height: var(--_arm_height);
  width: var(--_arm_width);
  top: calc((var(--_clock_size) / 2) - var(--_arm_height));
  left: calc((var(--_clock_size) - var(--_arm_width)) / 2);
  margin-top: calc(var(--_arm_width) / 2);
  transform-origin: 50% calc((var(--_arm_height)) - (var(--_arm_width) / 2));
  border-radius: 10000px;
  background-color: var(--_arm_background);
  border: 1px solid #2F2F2F;
  transition: transform var(--_transition_duration) cubic-bezier(.09,-0.01,.61,.99);
  transition-delay: var(--_transition_delay);
}

</style>