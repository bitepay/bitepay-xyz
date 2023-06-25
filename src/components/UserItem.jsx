export const UserItem = ({ itemName, itemQuantity, itemPrice, handleUserDelete }) => {
	return (
		<>
			<tr>
				<td>{itemName}</td>
				<td>{itemQuantity}</td>
				<td>{itemPrice}</td>
				{/* This is where we need to add the delete button for User delete feature */}
				<td>{' '}</td>
			</tr>
		</>
	)
}
