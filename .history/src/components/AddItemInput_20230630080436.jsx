import { useState } from 'react';
import Link from 'next/link';

export const AddItemInput = ({ handleUserUpdate, user, setUser, handleTipUpdate, tableMembers, userUpdateTip }) => {
	const [itemName, setItemName] = useState('');
	const [itemPrice, setItemPrice] = useState(0);
	const [itemQuantity, setItemQuantity] = useState(0);
	const [tip, setTip] = useState(user.tip);

	const handleClick = (e) => {
		if (itemQuantity === 0) {
			alert("Don't forget to add quantity!");
		}
		else if (itemPrice <= 0) {
			alert("Please don't forget to add your item's price!");
		}
		else if (itemName != "" && itemPrice > 0 && itemQuantity > 0) {
			const itemID = Math.ceil(Math.random()*1000000000);
			const payload = {itemID, itemName, itemPrice, itemQuantity};
			handleUserUpdate(user, payload);
			setItemName('');
			setItemPrice(0);
		} else {
			alert("Please fill out all fields");
		}
	}

	return (
		<div className="card glass">
			<div className="card-body">
				<strong className="text-center text-black text-lg">ADD ITEMS</strong>
				<div className="join mx-auto">
					
					<input className="input input-bordered join-item max-w-34" placeholder="Item name..." value={itemName} onChange={(e) => {setItemName(e.target.value)}}/>

					<select className="select select-bordered join-item" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)}>
						<option disabled value={0}>QTY</option>
						<option value={1/4}>
								1/4
						</option>
						<option value={1/3}>
								1/3
						</option>
						<option value={1/2}>
								1/2
						</option>
						<option value={1}>
								1
						</option>
						<option value={2}>
								2
						</option>
						<option value={3}>
								3
						</option>
						<option value={4}>
								4
						</option>
					</select>

				</div>
				<div className="mx-auto">
					<div className="join">
						<button className="btn join-item rounded-l-full bg-slate-500">USD $</button>
						<input className="input input-bordered join-item w-28" placeholder="Price" type="number" value={itemPrice} onChange={(e) => {setItemPrice(e.target.value)}}/>
						<button className="btn join-item rounded-r-full" disabled={user.status === 'READY'} onClick={(e) => handleClick(e)}>ADD ITEM</button>
					</div>
				</div >
				<div hidden={user.status !== 'READY'}>
					<div className="flex flex-col items-center">

						<input type="range" className="range" min={15} max={30} value={tip} step={1} onChange={(e) => setTip(e.target.value)} onMouseUp={(e) => userUpdateTip(user, tip)} onTouchEnd={(e) => userUpdateTip(user, tip)}/>
						<div className="w-full flex justify-between text-xs px-2">
							<span>15%</span>
							<span>|</span>
							<span className="text-sm">MY TIP: {user.tip}%</span>
							<span>|</span>
							<span>30%</span>
						</div>

						{/* BUTTON TO SUBMIT FINAL TIP UPDATE AND TOGGLE USER STATUS */}
						{tableMembers.filter(member => member.status === 'READY').length === tableMembers.length ? (
							<Link href="/finalbill">
								<button className="btn btn-info mt-4">FINAL BILL</button>
							</Link>
						) : (
							<button className="btn mt-4">
								<span className="loading loading-spinner"></span>
								<span className="text-lg">
								WAITING FOR OTHERS
								</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
};