import React from 'react'
import firebase from '../../public/firebase.png'

const Navbar = () => {
  return (
    <div className=' gap-2 h-[60px] bg-white my-4 rounded-lg flex items-center justify-center text-xl font-medium'>
      
        <img src={firebase} alt="" />
        <h1>Firebase Contact App</h1>
      </div>
  )
}

export default Navbar
