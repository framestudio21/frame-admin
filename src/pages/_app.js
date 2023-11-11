import "@/styles/globals.css";
import Head from "next/head";
import {AuthGuard} from '../component/context' 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FRAME ADMIN</title>
        <meta name="description" content="the frame studio main admin panel" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </>
  );
}
