<script setup lang="ts">
import { ref } from "@vue/reactivity";
import {require} from '@/utils/require'
const imgBaseUrl: string = "../assets/image/home/";
const imgUrl: string[] = ["a.png", "b.png", "c.png", "d.png", "e.png"];
const currentIndex = ref(0);
</script>

<template>
  <div class="container">
    <Back />
    <div class="imgbox">
      <div
        class="img"
        v-for="(item, index) in imgUrl"
        :key="index + item"
        :class="index === currentIndex ? 'active' : ''"
        :style="{ backgroundImage: `url(${require(imgBaseUrl + item)})` }"
        @click="currentIndex = index"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(
    137deg,
    rgba(164, 212, 245, 0.9) 10%,
    rgba(153, 245, 188, 0.9) 90%
  );
  overflow-y: auto;
  height: 100vh;
}
.imgbox {
  width: 100vw;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  margin: 1rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  border-radius: 1.5rem;
  position: relative;
  height: 80vh;
  flex: 0.5 1;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.active {
  flex: 5 1;
}
</style>
