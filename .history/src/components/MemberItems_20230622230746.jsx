export const MemberItems = ({ items }) => {
	return (
		<>
			{items.map((item) => {
				<tr key={item.itemID}>
					<td>{item.itemName}</td>
					<td>{item.itemQuantity}</td>
					<td>{item.itemPrice}</td>
					<td>{' '}</td>
				</tr>
			})}
		</>
	)
}
