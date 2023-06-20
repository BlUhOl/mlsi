import React from 'react'
import _headnavbar from './headnavbar'

const pageorder = () => {
  return (
    <main>
    <_headnavbar/>
    <div className='w-full h-screen bg-[url(https://drive.google.com/uc?export=view&id=1wNDXidGAooEkCr0ecbOUXithhHN3WAVP)]'>
    <div className='bg-emerald-900 w-full h-screen flex justify-center items-center bg-opacity-50 '>
        <iframe className='w-full h-full pt-9' src='/inputformorder'></iframe>
        </div>
    </div>
    </main>
  )
}

export default pageorder