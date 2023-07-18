/* eslint-disable jsx-a11y/role-has-required-aria-props */
"use client"

/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router'
import { useUserSocketContext } from '@/context/UserSocketContext'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import Head from "next/head";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()

  const { user, setUser } = useUserSocketContext()

    return (
      <>
      <Head>
        <title>BitePay - Join</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-2 md:p-8 ${inter.className} bg-gradient-to-tl from-slate-200 to-green-500`} >
        <div className="h-full w-full py-8 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                  <img className="animate-bounce mx-auto" src="table-icon.svg" alt="table-icon"/>
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800 text-center">
                        Join your friends!
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Dont have account?{" "}
                        <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            Sign up here
                        </span>
                    </p>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">ENTER YOUR NAME</label>
                        <input aria-label="enter email adress" role="input" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div className="mt-8">
                        <button role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                            Create my account
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </main>
      </>
    );
}
