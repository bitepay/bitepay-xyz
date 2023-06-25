export const AddItemInput = ({ handleUserAdd }) => {

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
				<span className="indicator-item badge badge-secondary">new</span> 
				<button className="btn join-item">Search</button>
			</div>
		</div>
	)
};