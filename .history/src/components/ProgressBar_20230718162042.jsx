import { useState, useEffect } from 'react';

export const ProgressBar = ({ tableMembers, user, userUpdateStatus }) => {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const completed = tableMembers.filter((member) => member.status === 'READY')
    const progress = Math.round(100 * ((completed.length / tableMembers.length) * 100)) / 100
    setProgress(progress)

  }, [tableMembers])

  const progressBar = (progress) => {
    if (progress === 100) {
      return (
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 text-center text-xs">
            <div className="bg-green-600 text-green-100 rounded-full" style={{width: `${progress}%`}}> ALL MEMBERS ARE READY! </div>
          </div>
      )
    } else {
      return (
        <div className="flex flex-col w-full">
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 text-center text-xs">
            <div className="bg-blue-600 text-blue-100 rounded-full text-xs" style={{width: `${progress < 25 ? 25 : progress}%`}}>
              
            </div>
            <p className="absolute text-xs w-full">ONLY {progress}% ARE READY
            </p>
          </div>
        </div>


      )
    }
  }

  const handleStatusToggle = (e) => {
    e.preventDefault()
    userUpdateStatus(user)
  }

  const toggleStatusButton = (user) => {
    return (
      <label className={`btn swap swap-rotate ${user.status === 'READY' ? 'bg-red-400' : 'bg-blue-400'}`}>
  
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={(e) => handleStatusToggle(e)} checked={user.status === 'READY'}/>
        {/* not ready icon */}
        <div className="swap-on rounded-md dark:text-white">👎Unready</div>
        {/* ready icon */}
        <div className="swap-off rounded-md dark:text-white">Ready👍</div>
        
      </label>
    )

  }



  return (

      <div className="w-full flex items-center justify-around overflow-hidden rounded-lg shadow-lg pl-1 bg-gray-100 uppercase border-green-100">
        {progressBar(progress)}
        {toggleStatusButton(user)}
      </div>

  )
}