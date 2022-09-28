<!--
 * @Descripttion: 交互式预览实例
 * @version: 
 * @Author: seehar
 * @Date: 2022-09-28 09:58:46
 * @LastEditors: seehar
-->
<template>
  <div>
    <h-button @click="onClick(1)">第一个</h-button>
    <h-button @click="onClick(2)">第二个</h-button>
    <h-button @click="onClick(3)">第三个</h-button>
  </div>
</template>

<script setup lang="ts">
const onClick = (num: number): void => {
  console.log(`我是第 ${num} 个自定义按钮`);
};
</script>
