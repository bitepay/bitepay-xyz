
import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";
import { Inter } from 'next/font/google'
import { JoinTableComponent } from '@/components/JoinTableComponent';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BitePay - Disconnected</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className} bg-green-300`}
      >
        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>

          <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div>
              <div role="contentinfo" className="flex items-center flex-col px-4 justify-center">
                <hh1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 p-4">Oooppps... Something happened to your connection.</hh1>
                <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">Make sure your device is connected to a reliable network before joining your table!</p>
              </div>
              <div className="flex justify-center pb-2">
                <JoinTableComponent />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
