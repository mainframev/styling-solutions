import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "normalize.css/normalize.css";
import defaultTheme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
    font-family: Inter, sans-serif;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
