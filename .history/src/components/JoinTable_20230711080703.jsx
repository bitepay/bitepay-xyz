"use client"

import { useRouter } from 'next/router'
import { useUserSocketContext } from '@/context/UserSocketContext'

export const JoinTable = () => {
  const router = useRouter()

  const { user, setUser } = useUserSocketContext()
  // console.log(`Current user object: ${JSON.stringify(user)}`)

  const handleInput = (e) => {
    if (e.target.id == "userName") {
      setUser((prevUser) => ({ ...prevUser, username: e.target.value }))
      // console.log(`userName: ${JSON.stringify(user.username)}`)
    } else if (e.target.id == "tableID") {
      setUser((prevUser) => ({ ...prevUser, tableID: e.target.value }))
      // console.log(`userName: ${JSON.stringify(user.tableID)}`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
                <input id="userName" type="text" placeholder="Don't be that guy" value={user.username} className="input input-bordered" onChange={(e) => handleInput(e)}/>
              </label>
              <label className="label">
                <span className="label-text">Are your friends already in a table lobby? Ask for the table ID! If not, create a new one...</span>
              </label>
              <label className="input-group">
                <span>Table ID</span>
                <input id="tableID" type="number" placeholder="0000000" className="input input-bordered" value={user.tableID} onChange={(e) => handleInput(e)}/>
                <button class="btn btn-square">
                  <svg fill="#b0b0b0" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #000000;" stroke="#b0b0b0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M38.243,28.251c-0.006-0.011-0.016-0.018-0.022-0.028c-0.027-0.049-0.066-0.087-0.101-0.13 c-0.044-0.055-0.086-0.111-0.14-0.154c-0.039-0.032-0.084-0.052-0.128-0.078c-0.067-0.039-0.133-0.075-0.207-0.097 c-0.019-0.006-0.033-0.02-0.052-0.025c-0.035-0.009-0.068,0-0.102-0.005c-0.068-0.01-0.134-0.015-0.203-0.01 c-0.07,0.004-0.134,0.017-0.2,0.035c-0.027,0.008-0.055,0.004-0.082,0.015l-5.647,2.108c-0.518,0.193-0.78,0.769-0.587,1.286 c0.193,0.518,0.77,0.779,1.287,0.587l3.688-1.376c-1.844,4.298-6.017,7.159-10.737,7.159c-5.338,0-10.006-3.686-11.35-8.964 c-0.137-0.535-0.682-0.862-1.216-0.722c-0.536,0.136-0.859,0.681-0.723,1.216c1.57,6.164,7.034,10.47,13.288,10.47 c5.497,0,10.359-3.306,12.533-8.279l1.793,3.484c0.177,0.345,0.527,0.542,0.89,0.542c0.154,0,0.311-0.035,0.457-0.111 c0.491-0.252,0.685-0.855,0.432-1.347L38.243,28.251z"></path> <path d="M25.008,13.536c5.164,0,9.664,3.386,11.199,8.426c0.161,0.529,0.72,0.824,1.248,0.666c0.528-0.161,0.826-0.72,0.665-1.248 c-1.793-5.888-7.063-9.844-13.112-9.844c-5.269,0-9.939,2.998-12.244,7.658l-1.637-3.438c-0.238-0.5-0.836-0.711-1.333-0.473 c-0.499,0.237-0.71,0.834-0.473,1.332l2.622,5.504c0.004,0.009,0.011,0.015,0.015,0.023c0.012,0.023,0.029,0.042,0.043,0.065 c0.049,0.079,0.105,0.15,0.172,0.211c0.025,0.023,0.049,0.043,0.076,0.064c0.087,0.065,0.181,0.119,0.284,0.153 c0.008,0.003,0.014,0.01,0.023,0.012c0.002,0.001,0.005,0,0.007,0.001c0.091,0.027,0.186,0.042,0.283,0.042c0,0,0,0,0,0s0,0,0,0 c0.001,0,0.002,0,0.003,0c0.087,0,0.176-0.012,0.263-0.036l5.698-1.572c0.532-0.146,0.845-0.697,0.698-1.229 c-0.146-0.532-0.698-0.847-1.23-0.698l-3.78,1.043C16.45,16.148,20.471,13.536,25.008,13.536z"></path> </g></svg>
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