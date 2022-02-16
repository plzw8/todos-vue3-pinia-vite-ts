<script setup lang="ts">
import { ref } from 'vue';
import useStore from '../store';
const { todo } = useStore();
const content = ref('');
// 键盘回车抬起事件
const handleKeyEnterUp = () => {
  // 安全保护
  if (!content.value.trim()) return alert('不接受空值');
  // 调用仓库actions
  todo.addItem(content.value);
  // 清空
  content.value = '';
};
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input
      v-model="content"
      @keyup.enter="handleKeyEnterUp"
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>

<style lang="less" scoped></style>
