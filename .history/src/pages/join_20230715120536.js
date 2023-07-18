"use client"

/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router'
import { useUserSocketContext } from '@/context/UserSocketContext'
import { useSearchParams } from 'next/navigation'

import Head from "next/head";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>BitePay - Join</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-2 md:p-8 ${inter.className} bg-green-300`}
      >
        
      </main>
    </>
  )
}
