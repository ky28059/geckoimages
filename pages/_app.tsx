import {AppProps} from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.scss';


export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Navbar/>
        <Component {...pageProps} />
      </>
  )
}
