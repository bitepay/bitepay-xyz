export const MembersBill = ({ tableMembers }) => {

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
      {tableMembers.length && tableMembers.map((member) => {
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