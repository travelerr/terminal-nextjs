import "../styles/globals.css";
import "../styles/light.css";
import type { AppProps } from "next/app";
import SSRProvider from "react-bootstrap/SSRProvider";
import { SidebarProvider } from "../components/contexts/SidebarContext"; // import based on where you put it

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </SSRProvider>
  );
}
