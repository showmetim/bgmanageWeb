<template>
  <svg :style="{width,height}">
    <use :xlink:href=perfix+iname :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  color: String,
  iname: String,
  width: {
    type: String,
    default:'30px'
  },
  height: {
    type: String,
    default:'30px'
  }
})
const perfix:string = "#icon-"
</script>

