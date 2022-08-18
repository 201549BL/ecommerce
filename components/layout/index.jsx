import { useToastStore } from "../../stores/toast";
import Header from "./Header";
import Main from "./Main";
import Toasts from "./Toasts";

const Layout = ({ children }) => {
  const { toasts, logToasts } = useToastStore();

  return (
    <div className="relative z-0 flex h-screen flex-col">
      <div className="fixed -z-10 h-screen w-full bg-gradient-to-r from-blue-500 to-teal-400"></div>
      <Header></Header>
      <Toasts />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
