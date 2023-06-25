"use client"

import { useRouter } from 'next/router'
import { useUserSocketContext } from '@/context/UserSocketContext'

export const JoinTableComponent = () => {
  const router = useRouter();

  const { user, setUser } = useUserSocketContext();
  console.log(`Current user object: ${JSON.stringify(user)}`)

  let userName;
  let tableID;

  const handleInput = (e) => {
    if (e.target.id == "userName") {
      setUser({...user, username: e.target.value});
      // console.log(`userName: ${JSON.stringify(user.username)}`);
      userName = e.target.value;
    } else if (e.target.id == "tableID") {
      setUser({...user, tableID: e.target.value});
      // console.log(`userName: ${JSON.stringify(user.tableID)}`);
      tableID = e.target.value;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`tableID: ${tableID}`);
    router.push(`/table`);
  };

  return (
    <>
      <button className="btn mx-auto" onClick={()=>window.my_modal_5.showModal()}>GET STARTED!</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">Join your mates or create a new table!</h3>
          <div className="flex flex-col">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Have your mates know who you are... It helps your table&apos;s proprietary honor system!</span>
              </label>
              <label className="input-group">
                <span>Name</span>
                <input id="userName" type="text" placeholder="Don't be that guy" className="input input-bordered" onChange={(e) => handleInput(e)}/>
              </label>
              <label className="label">
                <span className="label-text">Are your friends already in a table lobby? Ask for the table ID! If not, create a new one...</span>
              </label>
              <label className="input-group">
                <span>Table ID</span>
                <input id="tableID" type="number" placeholder="0000000" className="input input-bordered" onChange={(e) => handleInput(e)}/>
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