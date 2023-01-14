<script setup lang="ts">
import { defineEmits } from "@vue/runtime-core";
const emit = defineEmits(["on-click"]);
const changeActive = () => {
  emit("on-click");
};
</script>

<template>
  <div class="circle" @click="changeActive">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  background-color: #fff;
  color: rgb(114, 118, 122);
  border: 0.25rem solid rgb(114, 118, 122);
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-sizing: border-box;
  &.active {
    border-color: rgb(24, 89, 163);
    color: rgb(24, 89, 163);
  }
}
</style>
