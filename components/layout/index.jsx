import Header from "./Header";
import Main from "./Main";
import Toasts from "./Toasts";
import create from "zustand";
import { AnimatePresence, motion } from "framer-motion";

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

const Layout = ({ children }) => {
  const { toasts, logToasts } = useToastStore();

  return (
    <div className="flex flex-col">
      <div className="fixed -z-10 h-screen w-full bg-gradient-to-r from-cyan-500 to-red-500"></div>
      <Header></Header>

      <Toasts />

      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
