import "@/styles/globals.css";
import { PlayersProvider } from "@/context/playersContext";
import { Toaster } from "react-hot-toast";


export default function App({ Component, pageProps }) {
  return (
    <PlayersProvider>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </PlayersProvider>
  );
}
