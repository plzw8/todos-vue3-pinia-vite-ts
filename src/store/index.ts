import useTodoStore from './modules/todo';

export default function useStore() {
  return {
    todo: useTodoStore(),
  };
}
