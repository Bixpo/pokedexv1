import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeDex</title>
      </Head>
      <Navbar search="search" />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
