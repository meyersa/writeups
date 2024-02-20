/*
 * NextJS default page wrapper
 * Attaches the global CSS to every page
 */

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}