import '@/styles/globals.css';
import { SocketProvider } from '@/context/SocketContext';
import { UserProvider } from '@/context/UserContext';

export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SocketProvider>
  )
}
