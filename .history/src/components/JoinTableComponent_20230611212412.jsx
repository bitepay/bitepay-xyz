"use client"

import { useRouter } from 'next/router'

export const JoinTableComponent = () => {
    const router = useRouter();


    return (
        <>
        {/* Open the modal using ID.showModal() method */}
            <button className="btn mx-auto" onClick={()=>window.my_modal_5.showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-center">Join your mates or create a new table!</h3>
                    <div className="flex flex-col">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <label class="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="info@site.com" class="input input-bordered" />
                            </label>
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <label class="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="info@site.com" class="input input-bordered" />
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