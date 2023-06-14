"use client"

import { useRouter } from 'next/router'
import { useState } from 'react';

export const JoinTableComponent = () => {
  const router = useRouter();

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
                <input type="text" placeholder="Don't be that guy" className="input input-bordered" />
              </label>
              <label className="label">
                <span className="label-text">Are your friends already in a table lobby? Ask for the table ID! If not, create a new one...</span>
              </label>
              <label className="input-group">
                <span>Table ID</span>
                <input type="number" placeholder="0000000" className="input input-bordered" />
              </label>
            </div>
          </div>
          <div className="modal-action">
            <button className="btn">Close</button>  
          </div>
        </form>
      </dialog>
    </>
  )
}