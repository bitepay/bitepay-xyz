
import { useUserSocketContext } from '@/context/UserSocketContext'
// import Image from 'next/image'
import Head from "next/head";
// import Link from "next/link";
import { Inter } from 'next/font/google'
import { TableBill } from '@/components/TableBill';
import { AddItemInput } from '@/components/AddItemInput';

const inter = Inter({ subsets: ['latin'] })

export default function Table() {

  const { socket, user, tableMembers } = useUserSocketContext();

  socket.emit('joinTable', user);

  return (
    <>
      <Head>
        <title>BitePay - Final Bill</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main className={`flex min-h-screen flex-col items-center p-6 ${inter.className} bg-green-300`} >
        <TableBill user={user} tableMembers={tableMembers} handleUserDelete={handleUserDelete} />
        
        <AddItemInput handleUserAdd={handleUserAdd} user={user} />
      </main>
    </>
  )
}
