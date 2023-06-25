export const TableBill = ({ tableMembers, user, handleUserDelete }) => {

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200 mx-10">
        <input type="radio" name="my-accordion-2" defaultChecked="true"/>
        <div className="collapse-title text-xl font-medium">
          {user.username}
        </div>
        <div className="collapse-content">
          {user.tableID}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mx-10">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          {user.username}
        </div>
        <div className="collapse-content">
          {user.tableID}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mx-10">
        <input type="radio" name="my-accordion-2"/>
        <div className="collapse-title text-xl font-medium">
          {user.username}
        </div>
        <div className="collapse-content">
          {user.tableID}
        </div>
      </div>
    </>
  )
};