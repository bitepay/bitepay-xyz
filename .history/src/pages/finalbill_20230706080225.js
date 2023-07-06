import Head from "next/head"

import { Inter } from 'next/font/google'

import { useUserSocketContext } from '@/context/UserSocketContext'

import { useLeavePageConfirm } from '@/utils/hooks/useLeavePageConfirm'

import { FinalBill } from '@/components/FinalBill'

const inter = Inter({ subsets: ['latin'] })

export default function Bill() {
  useLeavePageConfirm()

  const { tableMembers, user } = useUserSocketContext()

  if (user.tableID === 0) {
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

      {tableMembers.length && <FinalBill tableMembers={tableMembers} />}

      </main>
    </>
  )
}