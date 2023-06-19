import React from 'react'
import _headnavbar from './headnavbar'

const pageorder = () => {
  return (
    <main className='w-full h-screen'>
    <_headnavbar/>
        <iframe className='w-full h-full' src='/inputformorder'></iframe>
    </main>
  )
}

export default pageorder