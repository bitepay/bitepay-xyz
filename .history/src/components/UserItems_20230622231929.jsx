export const UserItem = ({ items, handleUserDelete }) => {
	return (
		<>
			{items.length && items.map((item) => {
				<tr key={item.itemID}>
					<td>{item.itemName}</td>
					<td>{item.itemQuantity}</td>
					<td>{item.itemPrice}</td>
          {/* This is where we need to add the delete button for User delete feature */}
					<td>{' '}</td>
				</tr>
			})}
		</>
	)
}
