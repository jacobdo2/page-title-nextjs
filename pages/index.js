import Head from "next/head";
import Nav from "../components/Nav";
import Tracking from "../components/Tracking";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </div>
  );
}
