// Navbar atas
import React from 'react'

const headnavbar = () => {
  return (
    <div className='flex justify-between bg-teal-200 w-full h-auto py-3 shadow-lg border-b-2 border-emerald-400 fixed'>
        <a className='pl-5 text-2xl font-medium text-emerald-900' href='/'>Apotek Lorem Ipsum</a>
        <a className='items-center mr-5 bg-emerald-50 rounded-lg px-3 py-1 text-xl border-2 hidden xl:block hover:bg-emerald-900 hover:text-emerald-50 hover:font-medium hover:border-emerald-700 transition-all ease-in' href='/login'>
        Login</a>
    </div>


  )
}

export default headnavbar