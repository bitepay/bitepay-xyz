import { useState, useEffect } from 'react';

export const AddItemInput = ({ handleUserUpdate, user, setUser }) => {
	const [itemName, setItemName] = useState('');
	const [itemPrice, setItemPrice] = useState(0);
	const [itemQuantity, setItemQuantity] = useState(0);
	const [userTip, setUserTip] = useState(user.tip);

	useEffect(() => {
		setUserTip(user.tip)
	}, [])

	const handleClick = (e) => {
			e.preventDefault();
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

	const handleTipChange = (e) => {
		setUser({...user, tip: parseInt(e.target.value)})
	}

	return (
		<>
			<div className="card glass bg-blue-200">
				<div className="card-body">
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
							<button className="btn join-item rounded-l-full" disabled="true">USD $</button>
							<input className="input input-bordered join-item w-28" placeholder="Price" type="number" value={itemPrice} onChange={(e) => {setItemPrice(e.target.value)}}/>
							<button className="btn join-item rounded-r-full" disabled={user.status === 'READY'} onClick={(e) => handleClick(e)}>ADD ITEM</button>
						</div>
					</div>
						<input type="range" min={15} max={30} value={30} className="range" step={1} onChange={(e) => handleTipChange(e)} />
						<div className="w-full flex justify-between text-xs px-2">
							<span>15%</span>
							<span>|</span>
							<span>|</span>
							<span>|</span>
							<span>30%</span>
						</div>
				</div>
			</div>
		</>
	)
};