/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'


import { useUserSocketContext } from '@/context/UserSocketContext'

export const JoinInvite = () => {

  const router = useRouter()
  const params = useSearchParams()

  const { setUser } = useUserSocketContext()

  const invitationTableID = params.get('tableID')
  const invitationInviter = params.get('inviter')

  const handleInput = (e) => setUser((prevUser) => {
    prevUser.username = e.target.value
    return prevUser
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    setUser((prevUser) => {
      prevUser.tableID = parseInt(invitationTableID)
    })
    router.push(`/table`);
  };

  return (
    <>
      <div className="h-full w-full py-8 px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                  <img className="animate-bounce mx-auto" src="table-icon.svg" alt="table-icon"/>
                    <p tabIndex={0} aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800 text-center">
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
                        <input aria-label="enter email adress" role="input" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" onChange={(e) => handleInput(e)}/>
                    </div>
                    <div className="mt-8">
                        <button role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-green-700 text-sm font-semibold leading-none text-white focus:outline-none bg-green-700 border rounded hover:bg-indigo-600 py-4 w-full" onClick={(e) => handleSubmit(e)}>
                            JOIN TABLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}