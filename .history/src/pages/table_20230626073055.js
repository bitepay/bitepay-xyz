
import { useUserSocketContext } from '@/context/UserSocketContext'
// import Image from 'next/image'
import Head from "next/head"
// import Link from "next/link"
import { Inter } from 'next/font/google'
import { TableBill } from '@/components/TableBill'
import { AddItemInput } from '@/components/AddItemInput'
import { ProgressBar } from '@/components/ProgressBar'

const inter = Inter({ subsets: ['latin'] })

export default function Table() {

  const { socket, user, tableMembers } = useUserSocketContext();

  socket.emit('joinTable', user);

  const handleUserDelete = (user, payload) => {
    socket.emit('userDeleteItem', {user, payload})
  };
  
  const handleUserUpdate = (user, payload) => {
    socket.emit('userUpdate', {user, payload})
  };

  return (
    <>
      <Head>
        <title>BitePay - Table</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main className={`flex min-h-screen flex-col items-center p-6 ${inter.className} bg-green-300`} >
        <ProgressBar user={user} tableMembers={tableMembers} />

        <TableBill user={user} tableMembers={tableMembers} handleUserDelete={handleUserDelete} />
        
        <AddItemInput handleUserUpdate={handleUserUpdate} user={user} />
      </main>
    </>
  )
}
