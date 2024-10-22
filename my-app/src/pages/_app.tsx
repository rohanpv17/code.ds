// src/pages/_app.tsx
import "./styles/globals.css"; // Global Tailwind styles
import "./styles/App.css"; // Import custom App.css for additional styles
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}