<script setup lang="ts">
import { computed } from "@vue/runtime-core";
const props = defineProps({
  width: {
    type: Number,
    default: 350,
  },
  progressWidth: {
    type: Number,
    default: 0,
  },
});
const styleWidth = computed(() => props.width + "px");
const styleProgressWidth = computed(() => props.progressWidth + "%");
</script>

<template>
  <div class="ps-step-container">
    <div class="ps-step-progress"></div>
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.ps-step-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  width: v-bind("styleWidth");
  box-sizing: border-box;
  &:before,
  .ps-step-progress {
    height: 5px;
    left: 0;
    z-index: -1;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    border-radius: 5px;
    box-sizing: border-box;
  }
  &:before {
    content: "";
    width: 100%;
    background-color: rgb(24, 89, 163);
  }
  .ps-step-progress {
    background-color: rgb(24, 89, 163);
    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 0.33);
    width: v-bind(styleProgressWidth);
  }
}
</style>
