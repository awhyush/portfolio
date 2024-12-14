import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import React from "react";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="relative h-full w-full bg-white font-mono dark:bg-neutral-800 dark:text-neutral-50">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <Header />

        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
