<script setup lang="ts">
import { link } from "../assets/js/home/link";
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>vue3-50Projects50Days</h1>
    </div>
    <div class="content">
      <div class="cardbox">
        <div class="card" v-for="item in link" :key="item.name">
          <router-link :to="item.to">{{ item.name }}</router-link>
        </div>
      </div>
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
.header {
  text-align: center;
  color: rgb(10, 116, 221);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 2.25rem 0;
}
.cardbox {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0.5rem;
  margin: 0 auto;
}
.card {
  width: 8rem;
  height: 5rem;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  border-radius: 0.5rem;
  font-size:.875rem;
  padding:.25rem
}
a {
  text-decoration: none;
  color: rgb(39, 107, 172);
}
.router-link-active {
  text-decoration: none;
  color: rgb(39, 107, 172);
}

.card:hover{
  background-color:rgb(157, 181, 206) ;
}
</style>
