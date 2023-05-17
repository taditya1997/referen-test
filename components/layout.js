import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";

import Head from "next/head";



export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link  rel="stylesheet" />
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
