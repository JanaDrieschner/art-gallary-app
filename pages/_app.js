import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (url) => fetcher(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
