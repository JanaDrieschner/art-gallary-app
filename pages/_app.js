import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "../components/Layout/index.js";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const {
    data = [],
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log({ data, error, isLoading });
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} pieces={data} />
        <Layout />
      </SWRConfig>
    </>
  );
}
