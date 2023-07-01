//Dashboard Admin
import React from 'react';
import _navbar from './navbar';

const mainhome = () => {
  return (

    <main>
      <_navbar />
      <div className='ml-72'>


        <div className='bg-emerald-950 w-full h-max p-5'>
          <div className='p-3 border-2 border-emerald-500 bg-emerald-800  rounded-md h-max'>

            <div className='justify-center flex'>
              <h1 className='font-bold text-6xl container text-emerald-200'> Overview</h1>
              <iframe className='' src="https://free.timeanddate.com/clock/i8vzwl7e/n108/tlid38/fs20/tct/pct/ahr/tt0/tw0/th1/tb2" frameborder="0" width="313" height="30" allowtransparency="true"></iframe>
            </div>

            <div className='mt-10'>
              <div className='w-full h-[350px] rounded-lg p-2 shadow-xl border-emerald-500 border-2 bg-emerald-600 hover:bg-white transition-all ease-in'>
                <h3 className='text-xl font-medium text-emerald-900 bg-emerald-400 rounded-lg p-2'>Grafik Penjualan semua obat<span className='font-light text-sm italic'>*Total sepanjang waktu</span></h3>
                <iframe className='w-full h-full' seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRujdCrwCWrq6cXCwL9DjjuKASTWH_RiLqOj85qEuPKCm6hQ1Ui_5rDmKrAt6kbN2cVr-ttto48QmPQ/pubchart?oid=1170124347&amp;format=interactive"></iframe>

              </div>


            </div>
            <div className='grid grid-cols-2'>
              <div className='mt-10'>
                <div className='w-auto h-[430px] rounded-lg p-2 shadow-xl border-emerald-500 border-2 bg-emerald-600 hover:bg-white transition-all ease-in'>
                  <h3 className='text-xl font-medium text-emerald-900 bg-emerald-400 rounded-lg p-2'>Grafik Feedback Pelanggan</h3>
                  <iframe className='w-full h-full' seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6xP7-E79GlxM26ovK2T9oJnzbmXKdM4_0TvQeINAazQt07E-t84R8QZihEc1pHmxvDJVdZdbnyoK0/pubchart?oid=1481883366&amp;format=interactive"></iframe>

                </div>
              </div>
            </div>
          </div>

        </div>




      </div>
    </main>
  )
}

export default mainhome