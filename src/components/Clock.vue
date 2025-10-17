<template>
  <div class="clock">
    <div class="clock-face">
      <span class="arm hours"></span>
      <span class="arm minutes"></span>
      <span class="circle"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import type {ClockProp} from "../util/digits/DigitUtil.ts";

const props = withDefaults(defineProps<ClockProp>(), {
  hour: 0,
  minute: 0,
  delay: 0,
  duration: 2,
  shouldMod: true,
});

const hourAngle = computed(() => {
  const h = props.shouldMod ? (props.hour % 12) : props.hour;
  const angle = h * (360 / 12);
  return `${angle}deg`;
});

const minuteAngle = computed(() => {
  const m = props.shouldMod ? (props.minute % 60) : props.minute;
  const angle = m * (360 / 60);
  return `${angle}deg`;
});

const durationInSeconds = computed(() => {
  return `${props.duration}s`;
});

const delayInSeconds = computed(() => {
  return `${props.delay}s`;
});
</script>

<style scoped>
.clock {
  --_ow: clamp(1cqi, 4cqi, 4cqi);
  --_w: 95cqi;
  --_sz: 4cqi;
  --_r: calc((var(--_w) - var(--_sz)) / 2);

  background: transparent;
  block-size: var(--_ow);
  container-type: inline-size;
  font-family: ui-sans-serif, system-ui, sans-serif;
  inline-size: var(--_ow);
  margin-inline: auto;
  display: grid;
  place-content: center;
}

.clock-face {
  display: grid;
  aspect-ratio: 1;
  background: #2F2F2F;
  border-radius: 50%;
  block-size: var(--_w);
  list-style-type: none;
  inline-size: var(--_w);
  padding: unset;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .25);
  position: relative;
}

.arm {
  --_tdur: v-bind(durationInSeconds);
  --_tdel: v-bind(delayInSeconds);
  background-color: var(--_abg);
  border-radius: calc(var(--_aw) * 2);
  display: block;
  height: var(--_ah);
  left: calc((var(--_w) - var(--_aw)) / 2);
  position: absolute;
  top: calc((var(--_w) / 2) - var(--_ah));
  transform: rotate(0deg);
  transform-origin: 50% calc((var(--_ah)) - (var(--_aw) / 2));
  width: var(--_aw);
  transition: transform var(--_tdur) cubic-bezier(.09,-0.01,.61,.99);
  transition-delay: var(--_tdel);
  border: 1px solid #2F2F2F;
  margin-top: calc(var(--_aw) / 2);
}

.minutes {
  --_abg: #EEE;
  --_ah: 45cqi;
  --_aw: 6cqi;
  --minute-angle: v-bind(minuteAngle);
  transform: rotate(var(--minute-angle));
}

.hours {
  --_abg: #EEE;
  --_ah: 40cqi;
  --_aw: 6cqi;
  --hour-angle: v-bind(hourAngle);
  transform: rotate(var(--hour-angle));
  position: relative;
}

</style>