import create from "zustand";

export const useToastStore = create((set, get) => ({
  toasts: [],

  addToast: (name) => {
    const id = Math.ceil(Math.random() * 1000);

    set((state) => ({
      toasts: [, ...state.toasts.slice(-2), { name, id }],
    }));

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 2000);
  },

  logToasts: () => {
    console.log(get().toasts);
  },
}));
