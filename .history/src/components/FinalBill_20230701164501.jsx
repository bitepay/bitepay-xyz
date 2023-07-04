export const FinalBill = ({ tableMembers }) => {

  return (
    <>
      <div tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
        <div className="collapse-title">
          Focus me to see content
        </div>
        <div className="collapse-content"> 
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>

      {tableMembers.map((member) => {
        return (
          <div key={`${member.id}-final-key`} tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
            <div className="collapse-title">
              Focus me to see content
            </div>
            <div className="collapse-content"> 
              <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
          </div>
        )
      })}
    </>
  )
}