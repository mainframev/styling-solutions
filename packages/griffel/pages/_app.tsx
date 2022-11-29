import { createDOMRenderer, RendererProvider, makeStaticStyles } from "@griffel/react";
import Layout from "../components/Layout";
import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
const useStaticStyles = makeStaticStyles({
  html: {
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
  },
  body: {
    backgroundColor: "#fff",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  useStaticStyles();

  return (
    // 👇 accepts a renderer passed from the <Document /> component or creates a default one\
    <RendererProvider renderer={createDOMRenderer()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RendererProvider>
  );
}

export default MyApp;
