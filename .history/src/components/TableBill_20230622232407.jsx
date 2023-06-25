import { MemberItems } from './MemberItems'
import { UserItems } from './UserItems'

export const TableBill = ({ tableMembers, user, handleUserDelete }) => {

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
          <table class="table-auto">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {user.items?.length ? <UserItems items={user.items} handleUserDelete={handleUserDelete}/> : <tr><td>No items yet</td></tr>}
            </tbody>
            </table>
        </div>
      </div>

      {/* Map through the array of table members and calculate their totals as well as display their current order */}
      {tableMembers.map((member) => {
        if (member.id !== user.id) {
          return (
            <div className="collapse collapse-arrow bg-base-200 m-1">
              <input type="radio" name="my-accordion-2"/>
              <div className="collapse-title text-xl font-medium">
                {/* This is where we need to render name, status, and total */}
                {member.username}
              </div>
              <div className="collapse-content">
              <table class="table-auto">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>----</th>
                  </tr>
                </thead>
                <tbody>
                  {member.items?.length ? <MemberItems items={member.items}/> : <strong className="mx-max">NO ITEMS YET</strong>}
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