import { AppProps } from 'next/app';
import '@theguild/components/style.css';
import '../components/animation-container.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
