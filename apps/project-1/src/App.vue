<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { testClick } from "common-utils";
</script>

<template>
  <div>
    <ShadowBox>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam illum tenetur aspernatur dolorem eius dolores doloremque ratione enim laborum aut harum, numquam nisi quae quaerat facilis minus quibusdam nihil.</ShadowBox>
    <Button @click="testClick">123</Button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <Pagination :total="10" />
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
