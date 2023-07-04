/* eslint-disable @next/next/no-img-element */

import { calculateTotal, calculateTableTip, calculateBeforeTax } from '@/utils/utils'
import Image from 'next/image'

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

  const MemberItems = ({ items }) => {
    return (
      <div class="overflow-x-auto">
        <table class="table table-xs">
          <thead>
            <tr>
              <th>item</th> 
              <th></th> 
              <th>price</th> 
            </tr>
          </thead> 
          <tbody>
          {items.map((item) => (
            <tr key={`${item.id}`}>
              <td>{item.name}</td>
              <td>x{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <>
      <h1 className="md:text-4xl text-2xl font-semibold">Final Bill</h1>
      {/* This is where we render table total information */}
      <div className="h-auto w-auto card bg-base-300 rounded-box place-items-center">
        <img className="animate-bounce" src="table-icon.svg" alt="table-icon"/>
        <div className="text-xl font-semibold">FINAL BILL</div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col text-center mx-auto">
            <img width="48" height="48" src="https://img.icons8.com/color/48/donate.png" alt="donate"/>
            <h2 className="md:text-md text-xs font-medium">AVG. TIP</h2>
            <p>{calculateTableTip(tableMembers)}%</p>
          </div>
          <div className="flex flex-col text-center mx-auto">
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/tip.png" alt="tip"/>
            <h2 className="md:text-md text-xs font-medium">PRE-TAX<br/> TOTAL</h2>
            <p>$ {calculateBeforeTax(tableMembers)}</p>
          </div>
        </div>
      </div>
      <div className="divider">INDIVIDUAL INFO</div>
      <div className="join join-vertical w-full">
        {tableMembers.length && tableMembers.map((member) => <MemberPortion key={`${member.id}-portion`} member={member} />)}
      </div>
      {/* This is where we render the table cumulative tip and fees */}
    </>
  )
}