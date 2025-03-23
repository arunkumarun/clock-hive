<template>
  <div class="clock">
    <div class="clock-face">
      <span class="arm hours" :style="{transform: `rotate(${hourAngle}deg)`}"></span>
      <span class="arm minutes" :style="{transform: `rotate(${minuteAngle}deg)`}"></span>
      <span class="circle"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  hour?: number;
  minute?: number;
}>(), {
  hour: 0,
  minute: 0,
});

const hourAngle = computed(() => {
  return props.hour * (360 / 12);
});

const minuteAngle = computed(() => {
  return props.minute * (360 / 60);
});
</script>

<style scoped>
.clock {
  --_ow: clamp(5rem, 50px, 50px);
  --_w: 95cqi;
  --_sz: 12cqi;
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
  background-color: var(--_abg);
  border-radius: calc(var(--_aw) * 2);
  display: block;
  height: var(--_ah);
  left: calc((var(--_w) - var(--_aw)) / 2);
  position: absolute;
  top: calc((var(--_w) / 2) - var(--_ah));
  transform: rotate(0deg);
  transform-origin: bottom;
  width: var(--_aw);
  transition: transform 0.5s ease-in-out;
}

.minutes {
  --_abg: #eeeeee;
  --_ah: 45cqi;
  --_aw: 6cqi;
  /*animation: turn 60s steps(60, end) infinite;
  animation-delay: 0ms;*/
}

.hours {
  --_abg: #eeeeee;
  --_ah: 45cqi;
  --_aw: 6cqi;
  /*animation: turn 10s linear infinite;
  animation-delay: 0ms;*/
  position: relative;
}

.circle {
  --_csize: 5cqi;
  position: absolute;
  top: calc(50%);
  left: calc(50%);
  transform: translate(-50%, -50%);
  height: var(--_csize);
  width: var(--_csize);
  border-radius: 50%;
  border: 1cqi solid #eeeeee;
  background-color: #eeeeee;
}

@keyframes turn {
  to {
    transform: rotate(1turn);
  }
}
</style>