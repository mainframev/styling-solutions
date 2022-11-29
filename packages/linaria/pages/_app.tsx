import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { css } from "@linaria/core";
import "normalize.css/normalize.css";
import { ThemeProvider } from "../styles/theme";

export const globals = css`
  :global() {
  html {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    // @ts-expect-error TODO
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
