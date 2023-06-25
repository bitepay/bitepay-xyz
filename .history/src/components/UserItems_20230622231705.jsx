export const UserItem = ({ item, handleUserDelete }) => {
	return (
		<>		
      <tr key={item.itemID}>
        <td>{item.itemName}</td>
        <td>{item.itemQuantity}</td>
        <td>{item.itemPrice}</td>
        {/* This is where we need to add the delete button for User delete feature */}
        <td>{' '}</td>
      </tr>
		</>
	)
}
