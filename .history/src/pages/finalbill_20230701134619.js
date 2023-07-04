
// import Image from 'next/image'
import Head from "next/head"
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

  console.log(`tableMembers: ${JSON.stringify(tableMembers)}`)

  if (user.tableID !== 0) {
    socket.emit('joinTable', user)
  } else if (user.tableID === 0) {
    if (typeof window !== 'undefined') {
      window.location.replace('/disconnected')
    }
  }

  return (
    <>
      <Head>
        <title>BitePay - Final Bill</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>

      <main className={`flex min-h-screen min-w-full flex-col items-center p-2 ${inter.className} bg-green-300`} >

        <ProgressBar user={user} tableMembers={tableMembers} userUpdateStatus={userUpdateStatus} />
        <UserBill user={user} handleUserDelete={handleUserDelete} />
        <AddItemInput user={user} tableMembers={tableMembers} handleUserUpdate={handleUserUpdate} userUpdateTip={userUpdateTip} />
        <MembersBill tableMembers={tableMembers} userId={user.id}/>

      </main>
    </>
  )
}