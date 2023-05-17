import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={inter} rel="stylesheet" />
        <title>Rick and Morty</title>
      </Head>
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
