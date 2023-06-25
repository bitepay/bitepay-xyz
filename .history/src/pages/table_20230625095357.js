
import { useUserSocketContext } from '@/context/UserSocketContext'
import { useEffect } from 'react';
// import Image from 'next/image'
import Head from "next/head";
// import Link from "next/link";
import { Inter } from 'next/font/google'
import { TableBill } from '@/components/TableBill';
import { AddItemInput } from '@/components/AddItemInput';

const inter = Inter({ subsets: ['latin'] })

export default function Table() {


  socket.emit('joinTable', user);

  const handleUserDelete = (user, payload) => {
    socket.emit('userDeleteItem', {user, payload})
  };
  
  const handleUserAdd = (user, payload) => {
    socket.emit('userUpdate', {user, payload})
  };

  const { socket, user, tableMembers } = useUserSocketContext();

  useEffect(() => {
    console.log('Current table members', JSON.stringify(tableMembers));

    let currentUser = user;
    let currentTableMembers = tableMembers;
    
  }, [user, tableMembers])

  return (
    <>
      <Head>
        <title>BitePay - Table</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main className={`flex min-h-screen flex-col items-center p-12 ${inter.className} bg-green-300`} >
        <TableBill user={currentUser} tableMembers={currentTableMembers} handleUserDelete={handleUserDelete} />
        
        <AddItemInput handleUserAdd={handleUserAdd} user={user} />
      </main>
    </>
  )
}
