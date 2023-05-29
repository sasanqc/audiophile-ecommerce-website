import React from "react";
import Header from "./Header";
import Feature from "./home/Feature";
import Footer from "./Footer";

const AppShell = ({ children, className }) => {
  return (
    <main className={className}>
      <Header />
      {children}
      <Feature />
      <Footer />
    </main>
  );
};

export default AppShell;
