import { calculateTotal } from '@/utils/utils'

export const FinalBill = ({ tableMembers }) => {

  const MemberPortion = ({ member }) => {
    return (
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" /> 
        <div className="collapse-title text-xl font-medium">

          <div className="flex justify-around">
            <div className="text-lg font-medium">
              {member.username}
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
          <p>hello</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <h1>Final Bill</h1>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" /> 
          <div className="collapse-title md:text-xl text-sm font-medium">
            
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
                  {calculateTotal(tableMembers)}
                </div>
              </div>
            </div>

          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        {tableMembers.length && tableMembers.map((member) => <MemberPortion key={`${member.id}-portion`} member={member} />)}
      </div>
    </>
  )
}