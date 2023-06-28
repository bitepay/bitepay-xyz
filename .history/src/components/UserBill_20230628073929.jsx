export const UserBill = ({ user, handleUserDelete }) => {

  const UserItem = (item) => {
    const { itemID, itemName, itemPrice, itemQuantity } = item

    return (
      <tr key={`user-item-${itemID}`}>
				<td className="px-5">{`${itemName} ${itemQuantity !== 1 ? `x${itemQuantity}` : ''}`}</td>
				<td className="px-5">{itemPrice}</td>
				{/* This is where we need to add the delete button for User delete feature */}
				<td className="px-5">
          <button className="btn btn-circle" onClick={() => handleUserDelete(user, item)} disabled={user.status === 'READY'}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </td>
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
              <th className="mx-auto">Item</th>
              <th className="mx-auto">Price</th>
              <th className="mx-auto"></th>
            </tr>
          </thead>
          <tbody>
            {user.myItems.map((item) => UserItem(item))}
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-green-500">NY TAX:</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">------------</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center  text-green-500">8.875%</div>
              </td>
            </tr>
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-green-500">FINAL TOTAL</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">------------</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center  text-green-500">$ {
                Math.round(100 * ((((1+(user.tip / 100))) * user.total) + (user.total * .08875))) / 100
                }</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}