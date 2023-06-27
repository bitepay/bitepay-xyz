import { useState } from 'react';

export const AddItemInput = ({ handleUserUpdate, user }) => {
	const [itemName, setItemName] = useState('');
	const [itemPrice, setItemPrice] = useState(0);
	const [itemQuantity, setItemQuantity] = useState(0);

	const handleClick = (e)=> {
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

	return (
		<>
			<div className="join mx-auto">

				<div>
					<input className="input input-bordered join-item max-w-34" placeholder="Item name..." value={itemName} onChange={(e) => {setItemName(e.target.value)}}/>
				</div>


				<select className="select join-item" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)}>
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

				<div>
					<label className="input-group join-item">
						<span>$</span>
						<input className="input join-item w-28" placeholder="Price" type="number" value={itemPrice} onChange={(e) => {setItemPrice(e.target.value)}}/>
					</label>
				</div>
			</div>
			<button class="btn btn-block btn-outline btn-info mt-2" onClick={(e) => handleClick(e) }>ADD ITEM</button>
		</>
	)
};