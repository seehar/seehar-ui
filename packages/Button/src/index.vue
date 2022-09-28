<!--
 * @Descripttion: 组件本体
 * @version: 
 * @Author: seehar
 * @Date: 2022-09-28 09:59:28
 * @LastEditors: seehar
-->
<!-- <template>
  <button class="my-button" @click="$emit('click', $event)">
    <slot></slot>
    111
  </button>
</template>

<script lang="ts" setup>
defineEmits(["click"]);
</script> -->
<script setup lang="ts">
defineEmits(["click"]);
</script>

<template>
  <button class="my-button" @click="$emit('click', $event)">
    <slot></slot>
    111
  </button>
</template>

<style scoped>
.my-button {
  color: #ffffff;
  background-color: #ff0000;
}
</style>
