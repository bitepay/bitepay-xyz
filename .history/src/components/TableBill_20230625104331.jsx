import { MemberItems } from './MemberItems'
import { UserItem } from './UserItem'
import { useEffect, useState } from 'react';

export const TableBill = ({ tableMembers, user, handleUserDelete }) => {
  // useEffect(() => {
  //   console.log('tableMembers: ', tableMembers);

  // }, [tableMembers, user])

  const UserItem = (item) => {
    const { itemID, itemName, itemPrice, itemQuantity } = item

    return (
      <tr key={`user-item-${itemID}`}>
				<td>{itemName}</td>
				<td>{itemQuantity}</td>
				<td>{itemPrice}</td>
				{/* This is where we need to add the delete button for User delete feature */}
				<td>{' '}</td>
			</tr>
    )
  }

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 m-1">
        <input type="radio" name="my-accordion-2" defaultChecked="true"/>
        <div className="collapse-title text-xl font-medium">
          {/* This is where we need to render name, status, and total */}
          {user.username}
        </div>
        <div className="collapse-content">
          {/* This is where I need to map through user items */}
          <table className="table-auto mx-2">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
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
              <table className="table-auto justify-center">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>----</th>
                  </tr>
                </thead>
                <tbody>
                  {member.myItems?.length ? member.myItems.map((item) => UserItem(item)) : <tr key="user-no-items"><td>No items yet</td></tr>}
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