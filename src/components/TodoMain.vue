<script setup lang="ts">
import useStore from '../store';
const { todo } = useStore();
</script>

<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="todo.isAll"
      @change="todo.isSelectAllAction(!todo.isAll)"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        :class="{ completed: item.isDone }"
        v-for="item in todo.showList"
        :key="item.id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.isDone" />
          <label>{{ item.content }}</label>
          <button class="destroy" @click="todo.delItem(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
