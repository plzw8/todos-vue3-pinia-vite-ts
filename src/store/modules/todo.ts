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
    // 添加todo项
    addItem(content: string) {
      this.list.unshift({
        id: Date.now(),
        content,
        isDone: false,
      });
    },
    // 删除todo项
    delItem(id: number) {
      this.list = this.list.filter((item) => item.id !== id);
    },
  },
});
export default useTodoStore;
