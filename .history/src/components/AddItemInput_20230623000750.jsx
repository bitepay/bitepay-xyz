import { useState } from 'react';

export const AddItemInput = ({ handleUserAdd }) => {
	const [itemName, setItemName] = useState('');
	const [itemPrice, setItemPrice] = useState(0);
	const [itemQuantity, setItemQuantity] = useState(0);

	const handleClick = (e)=> {
			e.preventDefault();
			if (itemQuantity === 0) {
					alert("Don't forget to add quantity!");
			}
			else if (itemPrice <= 0) {
					alert("Please enter a valid price");
			}
			else if (itemName != "" && itemPrice > 0 && itemQuantity > 0) {
					const itemID = Math.ceil(Math.random()*1000000000);
					const payload = {itemID, itemName, itemPrice, itemQuantity};
					userAddItem(user, payload);
					setItemName('');
					setItemPrice(0);
					setItemQuantity(0);
			} else {
					alert("Please fill out all fields");
			}
	}

	return (
		<div className="join">
			<div>
				<div>
					<input className="input input-bordered join-item" placeholder="Item name..."/>
				</div>
			</div>
			<select className="select select-bordered join-item">
				<option disabled selected>Quantity</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
			<div className="indicator">
				<button className="btn join-item">ADD</button>
			</div>
		</div>
	)
};