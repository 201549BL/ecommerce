import { SessionProvider } from "next-auth/react";
import Auth from "../components/authentication/Auth";
import Layout from "../components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  console.log(session);
  return (
    <SessionProvider session={session}>
      <Layout>
        {Component.auth ? (
          <Auth role={Component.auth.role} loader={Component.auth.loader}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
