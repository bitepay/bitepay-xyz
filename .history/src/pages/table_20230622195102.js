
import { useUserSocketContext } from '@/context/UserSocketContext'
// import Image from 'next/image'
import Head from "next/head";
// import Link from "next/link";
import { Inter } from 'next/font/google'
import { JoinTableComponent } from '@/components/JoinTableComponent';
import { TableBill } from '@/components/TableBill';

const inter = Inter({ subsets: ['latin'] })

export default function Table() {

  const { socket, user, setUser, tableMembers, setTableMembers } = useUserSocketContext();

  socket.emit('joinTable', user);

  const handleUserDelete = (user, payload) => {
    socket.emit('userDeleteItem', {user, payload});
  };

  const handleUserAdd = (user, payload) => {
    socket.emit('userAddItem', {user, payload});
  }

  console.log(JSON.stringify(tableMembers));


  return (
    <>
      <Head>
        <title>BitePay - Table</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center p-12 ${inter.className} bg-green-300 justify-center`}
      >
        <TableBill user={user} tableMembers={tableMembers} handleUserDelete={handleUserDelete} />
        
      </main>
    </>
  )
}
