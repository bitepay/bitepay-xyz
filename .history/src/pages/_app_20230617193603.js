import '@/styles/globals.css';
import { UserSocketProvider } from '@/context/UserSocketContext';

export default function App({ Component, pageProps }) {
  return (
    <UserSocketProvider>
      <Component {...pageProps} />
    </UserSocketProvider>
  )
}
