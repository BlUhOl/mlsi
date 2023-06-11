import React from 'react'

const mainhome = () => {
  return (
    <main className='ml-72'>
    <div className='bg-gradient-to-br from-emerald-300 to-emerald-50 w-full h-screen p-5'>
      <div className='p-3 border-2 border-emerald-500 bg-emerald-100 bg-opacity-40 backdrop-blur-sm rounded-md h-full'>
        
        <div className='justify-center flex'>
          <h1 className='font-bold text-6xl container text-emerald-900'> Overview</h1>
          <iframe className='' src="https://free.timeanddate.com/clock/i8vzwl7e/n108/tlid38/fs20/tct/pct/ahr/tt0/tw0/th1/tb2" frameborder="0" width="313" height="30" allowtransparency="true"></iframe>
        </div>

      <div className='mt-10'>
        <div className='w-[514px] h-[320px] rounded-lg p-2 shadow-xl border-emerald-700 border-2 bg-emerald-50/50 hover:bg-white transition-all ease-in'>
        <h3 className='text-xl font-medium text-emerald-900'>Grafik Penjualan semua obat</h3>
        <iframe className='' width="498" height="270" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRujdCrwCWrq6cXCwL9DjjuKASTWH_RiLqOj85qEuPKCm6hQ1Ui_5rDmKrAt6kbN2cVr-ttto48QmPQ/pubchart?oid=1170124347&amp;format=interactive"></iframe>

        </div>
      </div>

      </div>


      
                                 
    </div>
    </main>
  )
}

export default mainhome