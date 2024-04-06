"use client"

import React from 'react'
import { signOut } from 'next-auth/react'

function ButtonSignOut() {
  return (
   

    <button onClick={() => {
        signOut()
    }} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4
    rounded-full'>
        
        Cerrar Sesion
      </button>
          
  )
}

export default ButtonSignOut
