
// import Image from 'next/image'
import Head from "next/head"
// import Link from "next/link"
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import { useUserSocketContext } from '@/context/UserSocketContext'

import { AddItemInput } from '@/components/AddItemInput'
import { ProgressBar } from '@/components/ProgressBar'
import { UserBill } from '@/components/UserBill'
import { MembersBill } from '@/components/MembersBill'

const inter = Inter({ subsets: ['latin'] })

export default function Table() {

  const router = useRouter()

  const { socket, user, tableMembers, setUser } = useUserSocketContext();

  console.log(`tableMembers: ${JSON.stringify(tableMembers)}`)

  if (user.tableID !== 0) {
    socket.emit('joinTable', user)
  }

  const handleUserDelete = (user, payload) => {
    socket.emit('userDeleteItem', {user, payload})
  };
  
  const handleUserUpdate = (user, payload) => {
    socket.emit('userUpdate', {user, payload})
  };

  const handleTipUpdate = (e) => {
    e.preventDefault();

    socket.emit('userUpdateStatus', { ...user, tip: parseInt(e.target.value) })
  }

  const handleStatusUpdate = (e) => {
    e.preventDefault();
    if (user.status === 'PROCESSING') {
      socket.emit('userUpdateStatus', { ...user, status: 'READY' })
    } else {
      socket.emit('userUpdateStatus', { ...user, status: 'PROCESSING' })
    }
  }

  const userUpdateStatus = (user) => {
    if (user.status === 'PROCESSING') {
      socket.emit('userUpdateStatus', { ...user, status: 'READY' })
    } else {
      socket.emit('userUpdateStatus', { ...user, status: 'PROCESSING' })
    }
  }

  const userUpdateTip = (user, tip) => {
    socket.emit('userUpdateStatus', { ...user, tip: tip })
  }

  return (
    <>
      <Head>
        <title>BitePay - Table</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>

      <main className={`flex min-h-screen min-w-full flex-col items-center p-2 ${inter.className} bg-green-300`} >

        <ProgressBar user={user} tableMembers={tableMembers} handleStatusUpdate={handleStatusUpdate} userUpdateStatus={userUpdateStatus} />
        <UserBill user={user} handleUserDelete={handleUserDelete} />
        <AddItemInput user={user} handleTipUpdate={handleTipUpdate} handleUserUpdate={handleUserUpdate} userUpdateTip={userUpdateTip} setUser={setUser} tableMembers={tableMembers}/>
        <MembersBill tableMembers={tableMembers} userId={user.id}/>

      </main>
    </>
  )
}
