<script setup lang="ts">
import { computed, reactive } from "@vue/reactivity";
import Step from "../components/step.vue";
import StepItem from "../components/stepItem.vue";
const state = reactive({
  stepList: [
    { value: "活动未开始" },
    { value: "活动已开始" },
    { value: "活动进行中" },
    { value: "活动已结束" },
  ],
  current: 0,
});
const pWidth = computed(() => Math.floor(100 / 3) * state.current);
const onClickHandler = (value: string) => {
  const consoleText = `你选择的是:${value}`;
  console.log(
    "%c " + consoleText,
    "background:#0ca6dc;padding:4px 10px;border-radius:3px;color:#fff"
  );
};
const onNextHandler = () => {
  if (state.current > state.stepList.length - 1) {
    return;
  }
  state.current++;
};
const onPreHandler = () => {
  if (state.current <= 0) {
    return;
  }
  state.current--;
};
</script>

<template>
  <div class="container">
    <Back />
    <div class="step">
      <Step>
        <StepItem
          v-for="(item, index) in state.stepList"
          :key="item.value + index"
          :class="{ active: state.current >= index }"
          @click="onClickHandler(item.value)"
          >{{ item.value }}</StepItem
        >
      </Step>
    </div>
    <div class="btn-box">
      <button class="btn" :disabled="state.current === 0" @click="onPreHandler">
        上一步
      </button>
      <button
        class="btn"
        :disabled="state.current === state.stepList.length - 1"
        @click="onNextHandler"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  background: linear-gradient(
    137deg,
    rgba(164, 212, 245, 0.9) 10%,
    rgba(153, 245, 188, 0.9) 90%
  );
  overflow-y: auto;
  height: 100vh;
  width: 100vw;
  .step {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
  .btn-box {
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      // display: inline-block;
      border: none;
      &::focus-visible {
        outline: none;
      }
      padding: 10px 12px;
      color: #fff;
      border-radius: 8px;
      letter-spacing: 2px;
      font-size: 14px;
      background-color: rgb(24, 89, 163);
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      margin: 0 1rem;
      &[disabled] {
        background-color: rgb(114, 118, 122);
        color: #000;
        cursor: not-allowed;
      }
      &:active {
        transform: scale(0.8);
      }
    }
  }
}
</style>
