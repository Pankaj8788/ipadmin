import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/src/styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
