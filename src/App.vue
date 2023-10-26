<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Search">Search</el-button>
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
  <el-pagination
      v-model:current-page="currentPage1"
      :page-size="100"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next"
      :total="1000"
    />
    <h1 class="test">{{api}}</h1>
    <SvgIcon color="blue" iname="phone"  />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
  import {
  Check,
  Delete,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const currentPage1 = ref(5)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
let api = ref('')
api = import.meta.env.VITE_BASE_TITLE
</script>

<style lang="scss" scoped>
  .test {
    color: $color;
  }
</style>

