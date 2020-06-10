import Head from "next/head";
import Nav from "../components/Nav";

export default function SomePage() {
  return (
    <div className="container">
      <Head>
        <title>Some page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </div>
  );
}
