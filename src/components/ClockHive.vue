<template>
  <!--{{currentDate.toTimeString().slice(0, 8)}}-->
  <div class="clock-hive">
    <div class="grid-digits">
      <div class="grid-clock" v-for="(digits) in clockDigitMatrix">
        <template v-for="digit in digits">
          <template v-for="clock in digit">
            <Clock v-bind="clock"/>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from "vue";
import {type ClockProp, digitClockHandMap, type DigitKey} from "../util/digits/DigitUtil.ts";
import Clock from "./Clock.vue";

const {
  matrixSize = [3, 2],
} = defineProps<{
  matrixSize?: [number, number];
}>();

const currentDate = ref(new Date());

const digitCount = ref<number>(4);
const digitArray = ref<DigitKey[]>(Array(digitCount.value).fill(0));
const digitMatrix = ref<[number, number]>(matrixSize);
const clockDigitMatrix = computed<ClockProp[][][]>(() => {
  return digitArray.value.map((dk) => {
    return digitClockHandMap[digitMatrix.value[0]][digitMatrix.value[1]][dk];
  });
});

// Update the date every second
let intervalId: number;
onMounted(() => {
  intervalId = setInterval(() => {
    currentDate.value = new Date(); // Update the current date

    const seconds = currentDate.value.getSeconds();

    if (seconds > 10 && seconds <= 20) {
      setDigits(Array(digitCount.value).fill("neutral1"))
      return;
    }
    if (seconds > 20 && seconds <= 30) {
      setDigits(Array(digitCount.value).fill("neutral2"))
      return;
    }
    if (seconds > 30 && seconds <= 40) {
      setDigits(Array(digitCount.value).fill("neutral3"))
      return;
    }
    if (seconds > 40 && seconds <= 50) {
      setDigits(Array(digitCount.value).fill("neutral4"))
      return;
    }
    if (seconds > 50 && seconds <= 60) {
      setDigits(Array(digitCount.value).fill("neutral1"))
      return;
    }

    const time = currentDate.value.toTimeString().slice(0, 8);
    setDigits([
      Number(time.charAt(0)) as DigitKey,
      Number(time.charAt(1)) as DigitKey,
      Number(time.charAt(3)) as DigitKey,
      Number(time.charAt(4)) as DigitKey,
    ]);
    return;
  }, 1000); // Check every second
});

// Cleanup interval when component is unmounted
onUnmounted(() => {
  clearInterval(intervalId);
});

function setDigits(digitKeys: DigitKey[]): void {
  digitArray.value = digitKeys;
}

</script>

<style scoped>
.clock-hive {
  --clock-color: #232323;
  border: 1px solid var(--clock-color);
  border-radius: 4px;
  display: grid;
  grid-auto-flow: column;
  overflow: hidden;
  padding: 1cqi;
  margin: 1cqi;
  background-color: var(--clock-color);
  box-shadow: 10px 10px 20px 0 rgba(35,35,35,1);
}

.grid-digits {
  display: grid;
  grid-auto-flow: column;
}

.grid-clock {
  --_digit-row: v-bind(digitMatrix[0]);
  --_digit-column: v-bind(digitMatrix[1]);
  display: grid;
  grid-template-columns: repeat(var(--_digit-column), minmax(0, 1fr));
  grid-template-rows: repeat(var(--_digit-row), minmax(0, max-content));
}
</style>