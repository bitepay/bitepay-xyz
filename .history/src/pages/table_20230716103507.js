import Head from "next/head"
import { Inter } from 'next/font/google'

import { useUserSocketContext } from '@/context/UserSocketContext'

import { useLeavePageConfirm } from '@/utils/hooks/useLeavePageConfirm'

import { AddItemInput } from '@/components/AddItemInput'
import { ProgressBar } from '@/components/ProgressBar'
import { UserBill } from '@/components/UserBill'
import { MembersBill } from '@/components/MembersBill'



const inter = Inter({ subsets: ['latin'] })

export default function Table() {
  useLeavePageConfirm()

  const { socket, user, tableMembers } = useUserSocketContext()


  if (user.tableID !== 0) {
    socket.emit('joinTable', user)
  } else if (user.tableID === 0) {
    if (typeof window !== 'undefined') {
      window.location.replace('/disconnected')
    }
  }

  const handleUserDelete = (user, payload) => {
    socket.emit('userDeleteItem', {user, payload})
  }

  const handleUserUpdate = (user, payload) => {
    socket.emit('userUpdate', {user, payload})
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

  const inviteMessage = {
    title: `BitePay invitation from ${user.name}`,
    message: 'Hey join here to split the bill and uphold peace by participating in the honor system!',
    url: `https://bitepay.xyz/join?tableID=${user.tableID}&inviter=${user.name}`,
  }

  const userInvite = async () => {
    if (navigator.canShare()) {

      try {
        await navigator.share(inviteMessage)
        resultPara.textContent = "Table invite shared successfully";
      } catch (err) {
        resultPara.textContent = `Error: ${err}`;
      } 
    } else {
      alert('Your current browser does not support Web Share API. Please tell your friends to join using the table ID from the home page.')
    }
  }

  return (
    <>
      <Head>
        <title>BitePay - Table</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>

      <main className={`flex min-h-screen flex-col items-center justify-start p-2 md:p-8 ${inter.className} bg-gradient-to-tl from-slate-200 to-green-500`} >

        <ProgressBar user={user} tableMembers={tableMembers} userUpdateStatus={userUpdateStatus} />
        <UserBill user={user} handleUserDelete={handleUserDelete} />
        <AddItemInput user={user} tableMembers={tableMembers} handleUserUpdate={handleUserUpdate} userUpdateTip={userUpdateTip} />
        <MembersBill tableMembers={tableMembers} userId={user.id}/>

      </main>
    </>
  )
}