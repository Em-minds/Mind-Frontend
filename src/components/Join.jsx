import React, { useState } from 'react'

export const Join = () => {
  const [email,setEmail] = useState('')
  const [click, setClick] = useState(false)
  const [msg,  setMsg] = useState('Join the waitlist')

  let theWaitlist = {
      email:email
  }



  const handleClick = () => {
    setClick(true)
    setMsg('Yaay! you have been added to the waitlist.')
    setTimeout( () => {setClick(false), submitEmail()}, 7000)
  }

  const submitEmail = (e) =>{
    e.preventDefault()
    
    if (email.trim() !== '') {
      fetch('https://mind-be.vercel.app/api/wait-list/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(theWaitlist)
      })
        .then(() => {
          console.log('Successfully submitted');
          
        })
        .catch((error) => {
          console.error('Error submitting:', error);
        });

        setEmail('')
        setMsg('Join the waitlist')
    }
  }

  return (
    <form id='test' onSubmit={submitEmail} data-click={click}>
        <input type='email' pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}' placeholder='Enter your email address' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={handleClick}>{msg}</button>
    </form>

  )
}
