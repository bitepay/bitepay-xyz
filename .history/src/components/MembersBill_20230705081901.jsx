export const MembersBill = ({ tableMembers, userId }) => {

  const MemberItem = (item) => {
    const { itemID, itemName, itemPrice, itemQuantity } = item

    return (
      <tr key={`member-item-${itemID}`}>
        <td className="px-4">{`${itemName} ${itemQuantity !== '1' ? `x ${Math.round((100 * itemQuantity)) / 100}` : ''}`}</td>
				<td className="px-4">{itemPrice}</td>
        <td className="px-4">{' '}</td>
      </tr>
    )
  }

  return (
    <>
      {tableMembers.length && tableMembers.map((member) => {
        if (member.id !== userId) {
          return (
            <div key={`${member.id}-list-items`} className="collapse collapse-arrow bg-base-200 m-1">
              <input type="radio" name="my-accordion-2"/>
              <div className="collapse-title">
                {/* This is where we need to render name, status, and total */}
                <div className="flex justify-around">
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">
                      {member.username}
                    </div>
                    <div className={`badge badge-sm text-xs ${member.status === 'READY' ? 'badge-accent' : 'badge-secondary badge-outline'}`}>
                      {member.status === 'READY' ? 'READY' : 'PROCESSING'}
                    </div>
                  </div>
                  <div className="text-sm font-light my-auto">
                    TOTAL{': $ '}
                    <div className={`badge ${member.status === 'READY' ? 'badge-primary' : 'badge-neutral'}`}>
                      {Math.round(100 * ((((1+(member.tip / 100))) * member.total) + (member.total * .08875))) / 100}
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-content">
              <table className="table-auto mx-auto text-center">
                <thead>
                  <tr>
                    <th className="px-4">Item</th>
                    <th className="px-4">Price</th>
                    <th className="px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {member.myItems?.length ? member.myItems.map((item) => MemberItem(item)) : <tr key="user-no-items"><td>No items yet</td></tr>}
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-sm text-red-400">TOTAL BEFORE FEES</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">-----</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center  text-red-400">${Math.round(100 * member.total) / 100}</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-sm text-blue-400">NY TAX:</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">-----</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center  text-blue-400">8.875%</div>
                    </td>
                  </tr>
                  <tr hidden={member.status !== 'READY'}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-sm text-blue-400">USER TIP:</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-center">-----</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-sm text-center  text-blue-400">${Math.round((( member.tip / 100 ) * member.total ) * 100) / 100}</div>
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
                      <div className="text-sm text-center  text-green-700 font-semibold">$ {
                      Math.round(100 * ((((1+(member.tip / 100))) * member.total) + (member.total * .08875))) / 100
                      }</div>
                    </td>
                  </tr>
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