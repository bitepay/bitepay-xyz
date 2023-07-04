export const FinalBill = ({ tableMembers }) => {

  return (
    <>


      <div class="collapse bg-base-200">
        <input type="checkbox" class="peer" /> 
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          {/* Render table information */}
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>hello</p>
        </div>
      </div>

      {tableMembers.map((member) => {
        return (
          <div key={`${member.id}-final-key`} class="collapse bg-base-200">
          <input type="checkbox" class="peer" /> 
          <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            {/* Render member info */}
          </div>
          <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
            <p>hello</p>
          </div>
        </div>
        )
      })}
    </>
  )
}