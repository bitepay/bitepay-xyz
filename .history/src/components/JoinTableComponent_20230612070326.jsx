"use client"

import { useRouter } from 'next/router'
import { useState } from 'react';

export const JoinTableComponent = () => {
    const router = useRouter();
    const [user]


    return (
        <>
        {/* Open the modal using ID.showModal() method */}
            <button className="btn mx-auto bg-green-400" onClick={()=>window.my_modal_5.showModal()}>GET STARTED!</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-center">Join your mates or create a new table!</h3>
                    <div className="flex flex-col">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Have your mates know who you are... It helps the honor system!</span>
                            </label>
                            <label class="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="Don't be that guy" class="input input-bordered" />
                            </label>
                            <label class="label">
                                <span class="label-text">Are your friends already in a table lobby? Ask for the table ID! If not, create a new one...</span>
                            </label>
                            <label class="input-group">
                                <span>Table ID</span>
                                <input type="number" placeholder="0000000" class="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </>
    )
}