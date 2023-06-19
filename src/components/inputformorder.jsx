import React from 'react'

const inputformorder = () => {
  return (
    <main>
    

        
        <div className='xl:mx-64 mt-5 bg-emerald-200 p-10  '>

      
        <form action="https://docs.google.com/forms/d/e/1FAIpQLScxP9K0njCobrmf0Le4xq82UQCbDN_iKLLtVhhky5mH2TQpoQ/formResponse" method='POST'>
            <h2 className='font-medium mt-2 text-2xl'>Masukkan Data Diri</h2>
            <div className='grid grid-cols-1 gap-3 my-2 sm:grid'>

            
            <div>
                <h3 className='font-medium'>Nama :</h3>
                <input className='bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.863887102' placeholder='Masukkan Nama Anda' required/>
            </div>
            
            <div>
                <h3 className='font-medium'>Umur :</h3>
                <input className='bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.1403747999' placeholder='Masukkan Umur Anda' required/>
            </div>
            
            <div>
                <h3 className='font-medium'>Alamat :</h3>
                <input className='bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.1922844345' placeholder='Masukkan Alamat Anda' required/>
            </div>

            <div>
                <h3 className='font-medium'>No Handphone :</h3>
                <input className='bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.1936297261' placeholder='Masukkan No Handphone Anda' required/>
            </div>

            </div>

            <div className='mt-6 my-2 w-full border-t-2 border-emerald-800 border-dashed'>
            <h2 className='font-medium mt-2 text-2xl'>Apa Keluhan anda ?</h2>
            <textarea className='bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' placeholder='Masukkan keluhan anda..' name='entry.1329151112' cols={100} rows={10} required/>

            </div>

            <div className='border-t-2 border-dashed border-emerald-800'>
            <h1 className='mt-3 mb-3 text-2xl font-medium'>Pesan Obat Anda</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            
                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1CBmTkSiVARe4dRLQmWD_A9a84CHfKfwa'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Ibuprofen</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.688623515' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=13lXilKe2ivWWXDVzKb2Xi5eU3JASkozC'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Paracetamol</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.1910113244' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=12se-mT8_nX1Jg-NjFunqwk9TmsvYOrpE'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Sanmol</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.2146819969' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1eQPEQbqFuVNnHU7vxGqIBHyeYXFYEFXB'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>OBH</h3>
                    <p className='text-slate-500'>Dalam Satuan botol</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.1146042946' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>
                
            </div>

            <div className='mt-3'>
            <button className='p-3 bg-emerald-100 rounded-xl text-emerald-900 font-medium text-2xl hover:bg-emerald-400 transition-all ease-in' type='submit'>Pesan Sekarang</button>
            </div>

            </div>

        </form>
    
        </div>
   
    </main>
  )
}

export default inputformorder