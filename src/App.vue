<template>
  <div class="wrapper">
    <header class="header">
      <p>Inspired by <a target="_blank" href="https://www.humanssince1982.com/">ClockClock24</a></p>
      <h3 class="title">Clock Hive</h3>
      <a target="_blank" href="https://github.com/arunkumarun/clock-hive">
        Source Code
      </a>
    </header>
    <ClockHive/>
    <footer class="footer">
      <p>Made by <a target="_blank" href="https://github.com/arunkumarun">Arun Kumar R</a></p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import ClockHive from "./components/ClockHive.vue";
</script>

<style scoped>
.wrapper {
  display: grid;
  height: 100vh;
  width: 100vw;
  place-items: center;
  grid-template-rows: minmax(0, min-content) minmax(0, 1fr) minmax(0, min-content);
}

.header {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  place-content: space-between;
}

.title {
  padding: unset;
  margin: unset;
}

.footer {
  width: 100%;
  display: grid;
  place-items: center;
  place-content: center;
  text-align: center;
  margin-bottom: 4px;
}

p {
  padding: unset;
  margin: unset;
}
</style>
