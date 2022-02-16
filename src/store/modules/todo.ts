import { defineStore } from 'pinia';
// 声明仓库
const useTodoStore = defineStore('todo', {
  state() {
    return {
      list: [
        {
          id: 1,
          content: 'vue',
          isDone: false,
        },
        {
          id: 2,
          content: 'react',
          isDone: false,
        },
        {
          id: 4,
          content: 'angular',
          isDone: true,
        },
      ],
    };
  },
  getters: {},
  actions: {},
});
export default useTodoStore;
