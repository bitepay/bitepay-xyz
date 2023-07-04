export const UserBill = ({ user, handleUserDelete }) => {

  const UserItem = (item) => {
    const { itemID, itemName, itemPrice, itemQuantity } = item

    return (
      <tr key={`user-item-${itemID}`}>
				<td className="px-4">{`${itemName} ${itemQuantity !== '1' ? `x ${Math.round((100 * itemQuantity)) / 100}` : ''}`}</td>
				<td className="px-4">{itemPrice}</td>
				{/* This is where we need to add the delete button for User delete feature */}
				<td className="px-4">
          <button className="btn btn-circle btn-error md:btn-md btn-sm" onClick={() => handleUserDelete(user, item)} disabled={user.status === 'READY'}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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
              {user.username} (ME)
            </div>
            <div className={`badge badge-sm text-xs ${user.status === 'READY' ? 'badge-accent' : 'badge-secondary badge-outline'}`}>
              {user.status === 'READY' ? 'READY' : 'PROCESSING'}
            </div>
          </div>
          <div className="text-sm font-light my-auto">
            TOTAL{': $ '}
            <div className={`badge ${user.status === 'READY' ? 'badge-primary' : 'badge-neutral'}`}>
              {user.status === 'READY' ? 
                Math.round(100 * ((((1+(user.tip / 100))) * user.total) + (user.total * .08875))) / 100 : 
                Math.round(100 * (user.total + (user.total * .08875))) / 100
              }
            </div>
          </div>

        </div>
      </div>
      <div className="collapse-content">
        {/* This is where I need to map through user items */}
        <table className="table-auto mx-auto text-center">
          <thead>
            <tr>
              <th className="px-4">Item</th>
              <th className="px-4">Price</th>
              <th className="px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.myItems.map((item) => UserItem(item))}
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-blue-400">TOTAL BEFORE FEES</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">-----</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center  text-blue-400">${user.total}</div>
              </td>
            </tr>
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-blue-400">NY TAX:<span className="text-xs text-red-500">8.875%</span></div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">-----</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center  text-blue-400">8.875%</div>
              </td>
            </tr>
            <tr hidden={user.status !== 'READY'}>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-blue-400">MY TIP:</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">-----</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center  text-blue-400">${Math.round((( user.tip / 100 ) * user.total ) * 100) / 100}</div>
              </td>
            </tr>
            <tr>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left text-sm text-green-700 font-semibold">FINAL TOTAL</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-center">-----</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-sm text-center  text-green-700 font-semibold">$ {user.status === 'READY' ? 
                Math.round(100 * ((((1+(user.tip / 100))) * user.total) + (user.total * .08875))) / 100 : 
                Math.round(100 * (user.total + (user.total * .08875))) / 100 }
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}