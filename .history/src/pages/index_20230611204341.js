import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BitePay - Home</title>
        <meta name="description" content="The fastest and easiest way to divvy up the dining bill between your friends."></meta>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className} bg-green-300`}
      >
        <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
        {/* Code block starts */}
        <dh-component>
          <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div>
              <div role="contentinfo" className="flex items-center flex-col px-4">
                <hh1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 p-4">BitePay.xyz</hh1>
                <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">Only pay for what you bit....</p>
              </div>
              <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-300 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800">Ensure no unecessary funds leave your wallet at bill time</h2>
                    <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Constantly split the bill amongst your friends that like to order steak and cocktails like money grows on trees? Never again....</p>
                  </div>
                </div>
                <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-400 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Split the dining bill in real-time</h2>
                    <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">See what everyone is ordering and discuss how much tip everyone is paying!</p>
                  </div>
                </div>
                <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-300 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Create an account and have records of past dining bills</h2>
                    <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">We all have that one friend who forgets to send that Zelle payment. Create an account and chase after your money with proof.</p>
                  </div>
                </div>
                <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-green-300 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">Keep friendships lasting longer</h2>
                    <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">If money can come in between a marriage. It can certainly rip friendships apart.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </dh-component>
        {/* Code block ends */}
      </div>
      </main>
    </>
  )
}
