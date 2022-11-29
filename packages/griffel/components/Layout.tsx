import React from "react";
import Navbar from "./Navbar";
import useMixins from "../styles/useMixins";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const mixins = useMixins();
  return (
    <>
      <Navbar />
      <main className={mixins.container}>{children}</main>
    </>
  );
};

export default Layout;
