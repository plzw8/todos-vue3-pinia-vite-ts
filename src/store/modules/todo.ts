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
  getters: {
    isAll(): boolean {
      return (
        this.list.length > 0 && this.list.every((item) => item.isDone === true)
      );
    },
  },
  actions: {
    // 全选控制小选
    isSelectAllAction(bl: boolean) {
      this.list.map((item) => (item.isDone = bl));
    },
  },
});
export default useTodoStore;
