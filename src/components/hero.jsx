import React from 'react'
import _headnavbar from './headnavbar'

const hero = () => {
  return (
    <main className=''>

    <_headnavbar/>



        <div className='flex justify-center items-center bg-gradient-to-br from-emerald-600 to-cyan-600 w-full h-screen '>
            <div className='mx-2'>
            <h1 className=' text-white text-7xl font font-medium mb-6 text-center'>Pesan obat sekarang!</h1>
            
            <a className=' justify-center flex text-center text-3xl text-emerald-800 bg-emerald-100 px-4 py-1 rounded-xl  hover:bg-emerald-600 hover:text-emerald-50 hover:border-2 hover:border-emerald-50 ease-in transition-all' href='/order'>Pesan Obat</a>
            
            
            </div>
        </div>
    </main>
  )
}

export default hero