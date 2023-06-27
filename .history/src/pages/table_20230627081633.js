
// import Image from 'next/image'
import Head from "next/head"
import { useRouter } from 'next/router'
// import Link from "next/link"
import { Inter } from 'next/font/google'

import { useUserSocketContext } from '@/context/UserSocketContext'

import { AddItemInput } from '@/components/AddItemInput'
import { ProgressBar } from '@/components/ProgressBar'
import { UserBill } from '@/components/UserBill'
import { MembersBill } from '@/components/MembersBill'

const inter = Inter({ subsets: ['latin'] })

export default function Table() {

  const { socket, user, tableMembers } = useUserSocketContext();

  const router = useRouter()

  if (user.tableID !== 0) {
    socket.emit('joinTable', user)
  }

  const handleUserDelete = (user, payload) => {
    socket.emit('userDeleteItem', {user, payload})
  };
  
  const handleUserUpdate = (user, payload) => {
    socket.emit('userUpdate', {user, payload})
  };

  const userUpdateStatus = (user) => {
    if (user.status === 'PROCESSING') {
      socket.emit('userUpdateStatus', { ...user, status: 'READY' })
    } else {
      socket.emit('userUpdateStatus', { ...user, status: 'PROCESSING' })
    }
  }

  return (
    <>
      <Head>
        <title>BitePay - Table</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>

      <main className={`flex min-h-screen flex-col items-center p-6 ${inter.className} bg-green-300`} >

        <ProgressBar user={user} tableMembers={tableMembers} userUpdateStatus={userUpdateStatus} />
        <UserBill user={user} handleUserDelete={handleUserDelete} />
        <AddItemInput user={user} handleUserUpdate={handleUserUpdate} />
        <MembersBill tableMembers={tableMembers} userId={user.id}/>

      </main>
    </>
  )
}
