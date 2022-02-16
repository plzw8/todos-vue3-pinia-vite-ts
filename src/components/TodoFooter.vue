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
      <li @click="todo.changeType('all')">
        <a :class="{ selected: todo.currentType === 'all' }" href="#/">All</a>
      </li>
      <li @click="todo.changeType('active')">
        <a :class="{ selected: todo.currentType === 'active' }" href="#/active"
          >Active</a
        >
      </li>
      <li @click="todo.changeType('completed')">
        <a
          :class="{ selected: todo.currentType === 'completed' }"
          href="#/completed"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="todo.clearCompleted">
      Clear completed
    </button>
  </footer>
</template>

<style lang="less" scoped></style>
