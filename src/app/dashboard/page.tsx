import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import ButtonSignOut from './ButtonSignOut'

async function DashboardPage() {

  const session = await getServerSession()
  console.log(session)
  return (
    <div className='flex justify-center items-center h-screen'>

    <div className=' bg-slate-300 p-10 text-center '>
    <h1>Bienvenido {session?.user?.name}</h1>
      <p>{session?.user?.email} </p>
      <Image
        src={session?.user?.image || ""}
        alt="imagen referencia"
        width={200}
        height={200}

      />
      <ButtonSignOut/>
    </div>
    </div>
  )
}

export default DashboardPage
