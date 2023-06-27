//Table Order
import React from 'react'
import _navbar from './navbar';


const ordertable = () => {
  return (
    <main>
    <_navbar/>
    <div className='ml-72  bg-emerald-50'>
      <div className=' w-full h-screen p-10'>
        <div className='flex bg-emerald-200  rounded-xl p-3 border-2 border-emerald-300 mb-3 bg-gradient-to-r from-emerald-300 to-emerald-50 shadow-lg'>
          <h1 className='text-3xl container font-medium'>Order Table</h1>
          <iframe className='container' src="https://free.timeanddate.com/clock/i8vzuvux/n108/tlid38/tct/pct/ahr/avt/tt0/tw0/th1/tb4" frameborder="0" width="125" height="34" allowtransparency="true"></iframe>
        </div>



        <div className='shadow-xl border-2 border-emerald-700 rounded-lg w-auto'>
          <iframe className='w-[1550px] h-[720px] p-1' src="https://docs.google.com/spreadsheets/d/1XVQtxyDs2wIA_JhXlSi8psr1bi4Gd34lczFdvG2kG_8/edit?usp=sharing&amp;rm=minimal&amp;single=true&amp;headers=false"></iframe>
        </div>

      
        
      </div>
    </div>
    </main>
  )
}

export default ordertable