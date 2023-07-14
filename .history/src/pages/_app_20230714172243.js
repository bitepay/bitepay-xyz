import '@/styles/globals.css';
import { UserSocketProvider } from '@/context/UserSocketContext';
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {


  return (
    <UserSocketProvider>
      <Component {...pageProps} />
      <Analytics />
    </UserSocketProvider>
  )
}
