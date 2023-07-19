/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import { Inter } from 'next/font/google'

import { JoinTable } from '@/components/JoinTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>BitePay - Home</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-2 md:p-8 ${inter.className} bg-gradient-to-tl from-slate-200 to-green-500`}
      >
        <div className="pb-12" style={{ fontFamily: '"Lato", sans-serif' }}>

          <section className="max-w-8xl mx-auto container glass rounded-md pt-16">
            <div>
              <div role="contentinfo" className="flex items-center flex-col px-4 justify-center">
                <h1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 p-4">BitePay.xy</h1>
                <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">Only pay for what you bit....</p>
              </div>
              <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4 items-center">
                <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-md md:text-lg font-bold leading-tight text-gray-800">Ensure no unecessary funds leave your wallet at bill time</h2>
                    <p tabIndex={0} className="focus:outline-none text-sm md:text-md text-gray-600 leading-normal pt-2">Constantly split the bill amongst your friends that like to order steak and cocktails like money grows on trees? Never again....</p>
                  </div>
                </div>
                <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-md md:text-lg font-semibold leading-tight text-gray-800">Split the dining bill in real-time</h2>
                    <p tabIndex={0} className="focus:outline-none text-sm md:text-md text-gray-600 leading-normal pt-2">See what everyone is ordering and discuss how much tip everyone is paying!</p>
                  </div>
                </div>
                <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-md md:text-lg font-semibold leading-tight text-gray-800">Create an account and have records of past dining bills</h2>
                    <p tabIndex={0} className="focus:outline-none text-sm md:text-md text-gray-600 leading-normal pt-2">We all have that one friend who forgets to send that Zelle payment. Create an account and chase after your money with proof.</p>
                  </div>
                </div>
                <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-10">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-md md:text-lg font-semibold leading-tight text-gray-800">Keep friendships lasting longer</h2>
                    <p tabIndex={0} className="focus:outline-none text-sm md:text-md text-gray-600 leading-normal pt-2">If money can come in between a marriage. It can certainly rip friendships apart.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pb-2">
                <JoinTable />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
