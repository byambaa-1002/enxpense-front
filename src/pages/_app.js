import { RecordsProvider } from "../provider/RecodsProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <RecordsProvider>
      <Component {...pageProps} />
    </RecordsProvider>
  );
}
