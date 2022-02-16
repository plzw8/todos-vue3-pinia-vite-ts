import { defineStore } from 'pinia';
interface ITodoItem {
  id: number;
  content: string;
  isDone: boolean;
}
type SelectType = 'all' | 'active' | 'completed';
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
      ] as ITodoItem[],
      currentType: 'all' as SelectType,
    };
  },
  getters: {
    // 父选框状态
    isAll(): boolean {
      return (
        this.list.length > 0 && this.list.every((item) => item.isDone === true)
      );
    },
    // 展示列表
    showList(): ITodoItem[] {
      if (this.currentType === 'active') {
        return this.list.filter((item) => !item.isDone);
      } else if (this.currentType === 'completed') {
        return this.list.filter((item) => item.isDone);
      } else {
        return this.list;
      }
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
    // 更改当前type
    changeType(type: SelectType) {
      this.currentType = type;
    },
  },
});
export default useTodoStore;
