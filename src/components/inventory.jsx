import React from 'react'
import _navbar from './navbar';


const inventory = () => {
  return (
    <main>
      <_navbar />
      <div className='ml-72 h-fit bg-emerald-950'>
        <div className=' w-full  p-10'>
          <div className='flex bg-emerald-200  rounded-xl p-3 border-2 border-emerald-300 mb-3  shadow-lg'>
            <h1 className='text-3xl container font-medium text-emerald-950'>Inventory</h1>
            <iframe className='container' src="https://free.timeanddate.com/clock/i8vzuvux/n108/tlid38/tct/pct/ahr/avt/tt0/tw0/th1/tb4" frameborder="0" width="125" height="34" allowtransparency="true"></iframe>
          </div>

          <div className='p-2 bg-emerald-800 rounded-xl mb-5 border-2 border-emerald-300 h-max'>
            <h1 className='text-2xl font-medium text-emerald-100'>Masukkan Data Baru</h1>
            <div className='shadow-xl border-2 border-emerald-700 rounded-lg w-min'>

              <iframe className='w-[1200px] h-[450px] p-1' src="https://docs.google.com/spreadsheets/d/1i4YnTATB70SBt41ZKMG0Sze6zkpVL5fap3mo8N0rioM/edit?usp=sharing&amp;rm=minimal&amp;single=true&amp;headers=false&amp;chrome=false&amp;widget=false"></iframe>
            </div>
          </div>

          <div className='p-2 bg-emerald-800 rounded-xl mb-5 border-2 border-emerald-300 h-max'>
            <h1 className='text-2xl font-medium text-emerald-100'>Tabel Inventory</h1>
            <div className='shadow-xl border-2 border-emerald-700 rounded-lg w-min'>
              <iframe className='w-[1200px] h-[720px] p-1' src="https://docs.google.com/spreadsheets/d/1mtKpoo-BNcD9Hh3XR7eXzdGdIgs4QK8id0gzoh7o9Z8/edit?usp=sharing&amp;rm=minimal&amp;single=true&amp;headers=false&amp;chrome=false"></iframe>
            </div>
          </div>



        </div>
      </div>

    </main>
  )
}

export default inventory