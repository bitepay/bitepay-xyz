export const TableBill = ({ tableMembers, user, handleUserDelete }) => {

  // React element for current user's item
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

  // React element for each table member's item
  const MemberItem = (item) => {
    const { itemID, itemName, itemPrice, itemQuantity } = item

    return (
      <tr key={`member-item-${itemID}`}>
        <td className="px-5">{itemName}</td>
        <td className="px-5">{itemQuantity}</td>
        <td className="px-5">{itemPrice}</td>
        <td className="px-5">{' '}</td>
      </tr>
    )
  }

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 m-1">
        <input type="radio" name="my-accordion-2" defaultChecked="true"/>
        <div className="collapse-title">
          {/* This is where we need to render name, status, and total */}
          <div className="flex justify-between">
            <div className="text-xl font-medium">
              {user.username}
            </div>
            <div className={`badge ${user.status === 'READY' ? 'badge-accent' : 'badge-secondary badge-outline'}`}>
              {user.status === 'READY' ? 'READY' : 'IN PROGRESS'}
            </div>
            <div className="text-md font-light mr-4">
              TOTAL:
              <div className={`badge badge-lg ${user.status === 'READY' ? 'badge-primary' : 'badge-neutral'}`}>
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

      {/* Map through the array of table members and calculate their totals as well as display their current order */}
      {tableMembers.map((member) => {
        if (member.id !== user.id) {
          return (
            <div key={`${member.id}-list-items`} className="collapse collapse-arrow bg-base-200 m-1">
              <input type="radio" name="my-accordion-2"/>
              <div className="collapse-title text-xl font-medium">
                {/* This is where we need to render name, status, and total */}
                {member.username}
              </div>
              <div className="collapse-content">
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
                  {member.myItems?.length ? member.myItems.map((item) => MemberItem(item)) : <tr key="user-no-items"><td>No items yet</td></tr>}
                </tbody>
                </table>
              </div>
            </div>
          )
        }
      })}

    </>
  )
};