import '@/styles/globals.css';
import { UserSocketProvider } from '@/context/UserSocketContext';
import { useReloadPageConfirm } from '@/utils/hooks/useReloadPageConfirm';

export default function App({ Component, pageProps }) {
  return (
    <UserSocketProvider>
      <Component {...pageProps} />
    </UserSocketProvider>
  )
}
