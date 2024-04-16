// layout.js
import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-zinc-900 h-max relative overflow-hidden">
      <Head>
        <title>Character.AI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen">
      <Sidebar />
      {children}
      </div>
    </div>
  );
};

export default Layout;
