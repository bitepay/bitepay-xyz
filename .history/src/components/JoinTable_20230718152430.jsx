"use client"

/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useUserSocketContext } from '@/context/UserSocketContext'

export const JoinTable = () => {
  const router = useRouter()

  const { user, setUser } = useUserSocketContext()

  const handleInput = (e) => {
    if (e.target.id == "userName") {
      setUser((prevUser) => ({ ...prevUser, username: e.target.value }))
    } else if (e.target.id == "tableID") {
      setUser((prevUser) => ({ ...prevUser, tableID: e.target.value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/table`)
  };

  const generateUID = (e) => {
    e.preventDefault()
    let UID = Math.ceil(Math.random()*1000000000)
    setUser((prevUser) => ({ ...prevUser, tableID: UID }))
  }

  return (
    <>
      <button className="btn mx-auto" onClick={()=>window.my_modal_5.showModal()}>GET STARTED!</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">Join your mates or create a new table!</h3>
          <div className="flex flex-col">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Have your mates know who you are. It helps with the app&apos;s proprietary honor system!</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input id="userName" type="text" placeholder="Don't be that guy" value={user.username} className="input input-bordered" onChange={(e) => handleInput(e)}/>
              </label>
              <label className="label">
                <span className="label-text">Provide the tableID your friends are in or generate a new tableID using the green button below!</span>
              </label>
              <label className="input-group">
                <span>Table ID</span>
                <input id="tableID" type="number" placeholder="0000000" className="input input-bordered" value={user.tableID} onChange={(e) => handleInput(e)}/>
                <button className="btn btn-square" onClick={generateUID}>
                  <img width="48" height="48" src="https://img.icons8.com/fluency/48/connection-sync.png" alt="connection-sync"/>
                </button>
              </label>
            </div>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={handleSubmit}>JOIN!</button>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  )
}