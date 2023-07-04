
// import Image from 'next/image'
import Head from "next/head"
// import Link from "next/link"
import { Inter } from 'next/font/google'

import { useState } from 'react'

import { useUserSocketContext } from '@/context/UserSocketContext'

import { FinalBill } from '@/components/FinalBill'



const inter = Inter({ subsets: ['latin'] })

export default function Table() {

  const { tableMembers, user } = useUserSocketContext();

  console.log(`tableMembers: ${JSON.stringify(tableMembers)}`)

  if (user.tableID === 0) {
    if (typeof window !== 'undefined') {
      window.location.replace('/disconnected')
    }
  }

  const [tableView, setTableView] = useState(true)

  return (
    <>
      <Head>
        <title>BitePay - Final Bill</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>

      <main className={`flex min-h-screen min-w-full flex-col items-center p-2 ${inter.className} bg-green-300`} >

      <div class="tabs" onClick={() => setTableView(!tableView)}>
        <a class={`tab tab-bordered ${tableView ? 'tab-active' : ''}`}>Table View</a> 
        <a class={`tab tab-bordered ${tableView ? '' : 'tab-active'}`}>Individual View</a> 
      </div>

      </main>
    </>
  )
}