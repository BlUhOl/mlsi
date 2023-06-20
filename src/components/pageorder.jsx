import React from 'react'
import _headnavbar from './headnavbar'

const pageorder = () => {
  return (
    <main className='w-full h-screen bg-emerald-50'>
    <_headnavbar/>
        <iframe className='w-full h-full pt-10' src='/inputformorder'></iframe>
    </main>
  )
}

export default pageorder