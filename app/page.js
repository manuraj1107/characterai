'use client'
import Image from "next/image";
// pages/index.js (Home page)
import React from "react";
import Layout from "./pages/layout";
import Discover from "./pages";
import dynamic from "next/dynamic";
import './globals.css';



const Home = () => {
    
    return (
      <Layout>
        <Discover />
      </Layout>
    )
};

export default dynamic (() => Promise.resolve(Home), {ssr: false});


                    