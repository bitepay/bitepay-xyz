export const UserBill = ({ user, handleUserDelete }) => {

  const UserItem = (item) => {
    const { itemID, itemName, itemPrice, itemQuantity } = item

    return (
      <tr key={`user-item-${itemID}`}>
				<td className="px-5">{itemName}</td>
				<td className="px-5">{itemQuantity}</td>
				<td className="px-5">{itemPrice}</td>
				{/* This is where we need to add the delete button for User delete feature */}
				<td className="px-5"><button className="btn btn-outline btn-error" onClick={() => handleUserDelete(user, item)} disabled={user.status === 'READY'}>DELETE</button></td>
			</tr>
    )
  }

  return (
    <div className="collapse collapse-arrow bg-base-200 m-1">
      <input type="radio" name="my-accordion-2" defaultChecked="true"/>
      <div className="collapse-title">
        {/* This is where we need to render name, status, and total */}
        <div className="flex justify-around">
          <div className="flex flex-col">
            <div className="text-lg font-medium">
              {user.username}
            </div>
            <div className={`badge badge-sm text-xs ${user.status === 'READY' ? 'badge-accent' : 'badge-secondary badge-outline'}`}>
              {user.status === 'READY' ? 'READY' : 'PROCESSING'}
            </div>
          </div>
          <div className="text-sm font-light my-auto">
            TOTAL{': $ '}
            <div className={`badge ${user.status === 'READY' ? 'badge-primary' : 'badge-neutral'}`}>
              {user.total}
            </div>
          </div>

        </div>
      </div>
      <div className="collapse-content">
        {/* This is where I need to map through user items */}
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-5">Item</th>
              <th className="px-5">Quantity</th>
              <th className="px-5">Price</th>
              <th className="px-5"></th>
            </tr>
          </thead>
          <tbody>
            {user.myItems.map((item) => UserItem(item))}
          </tbody>
        </table>
      </div>
    </div>
  )
}