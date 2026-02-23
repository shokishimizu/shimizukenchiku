import "@/globals.css";
import "@/styles/home.css";
import "@/styles/chat.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
