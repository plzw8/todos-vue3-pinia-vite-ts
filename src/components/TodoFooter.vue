<script setup lang="ts">
import { computed } from 'vue';
import useStore from '../store';

const { todo } = useStore();
// 计算剩余长度
const resVal = computed(() => {
  return todo.list.filter((item) => !item.isDone).length;
});
</script>

<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ resVal }}</strong> item left</span
    >
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
