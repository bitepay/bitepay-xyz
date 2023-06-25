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
                {/* This is where I need to map through user items */}
                {member.tableID}
              </div>
            </div>
          )
        }
      })}

    </>
  )
};