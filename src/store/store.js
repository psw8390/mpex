import create from 'zustand';

// set method로 상태 변경 가능
export const useStore = create(set => ({
  count: 0,
  increaseCount: () => set(state => ({ count: state.count + 1 })),
  decreaseCount: () => set(state => ({ count: state.count - 1 })),
  setZero: (input) => set({ count: input }),
}));