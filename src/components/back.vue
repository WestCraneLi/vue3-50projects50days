<template>
  <div class="header">
    <router-link to="/" style="font-size: 1.5rem">回到主页 →</router-link>
  </div>
</template>

<style scoped>
.header {
  margin: 2rem;
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: none;
  color: rgb(39, 107, 172);
}
.router-link-active {
  text-decoration: none;
  color: rgb(39, 107, 172);
}
</style>
