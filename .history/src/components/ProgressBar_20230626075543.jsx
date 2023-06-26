import { useState, useEffect } from 'react';

export const ProgressBar = ({ tableMembers, user, handleUserUpdate }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completed = tableMembers.filter((member) => member.status === 'READY');
    const progress = Math.round(100 * ((completed.length / tableMembers.length) * 100)) / 100;
    setProgress(progress);

    console.log(`Re-render triggered from tableMember update in ProgressBar. Progress is now ${progress}%`)
  }, [tableMembers])

  const progressBar = (progress) => {
    if (progress === 100) {
      return (
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-full" style={{width: `${progress}%`}}> {progress}% COMPLETE! </div>
          </div>
      )
    } else {
      return (
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${progress < 15 ? 15 : progress}%`}}> {progress}% READY... </div>
          </div>
      )
    }
  }

  const handleClick = (e) => {
    e.preventDefault();

    console.log('clicked')

  }

  const toggleStatusButton = (status) => {
    return (
      <label className="btn swap swap-rotate">
  
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />
        
        {/* ready icon */}
        <div class="swap-on">{"I'm ready"}👍</div>
        
        {/* not ready icon */}
        <div class="swap-off">👎{"Not ready"}</div>
        
      </label>
    )

  }



  return (
    <section className="container mx-auto p-4 font-mono">
      <div className="w-full flex items-center justify-between mb-.5 overflow-hidden rounded-lg shadow-lg bg-gray-100 uppercase border-b border-gray-100">
          {progressBar(progress)}
        <div id="final-bill-button" className='p-2'>
          {toggleStatusButton(user.status)}
        </div>
      </div>
    </section>
  )
}