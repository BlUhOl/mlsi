//Form inpur
import React from 'react'

const inputformorder = () => {

    function confirm(){
    var nm = document.getElementById("nama").value;
    var umr = document.getElementById("umur").value;
    var almt = document.getElementById("alamat").value;
    var nhp = document.getElementById("nohp").value;
    var klhn = document.getElementById("keluhan").value;

    var hibprfn = document.getElementById("ibprfn").value * 3500;
    var hprctml = document.getElementById("prctml").value * 5000;
    var hsnml = document.getElementById("snml").value * 3000;
    var hobh = document.getElementById("obh").value * 25000;
    var hzl100 = document.getElementById("zl100").value * 10000;
    var hzl300 = document.getElementById("zl300").value * 20000;
    var hfmx = document.getElementById("fmx").value * 15000;
    var hpls100 = document.getElementById("pls100").value * 20000;

    
     var ttlprc = hibprfn + hprctml + hsnml + hobh + hzl100 + hzl300 + hfmx + hpls100 ;
     document.getElementById("result").hidden = false;

    document.getElementById("data1").innerHTML = nm;
    document.getElementById("data2").innerHTML = umr;
    document.getElementById("data3").innerHTML = almt;
    document.getElementById("data4").innerHTML = nhp;
    document.getElementById("data5").innerHTML = klhn;
   

    document.getElementById("thibrpfn").innerHTML ="Ibuprofen    " + "x" + document.getElementById("ibprfn").value + "=        Rp." + hibprfn;
    document.getElementById("thprctml").innerHTML ="Paracetamol    " + "x" + document.getElementById("prctml").value + "=        Rp." + hprctml;
    document.getElementById("thsnml").innerHTML ="Sanmol     " + "x" + document.getElementById("snml").value + "=        Rp." + hsnml;
    document.getElementById("thobh").innerHTML ="OBH     " + "x" + document.getElementById("obh").value + "=        Rp." + hobh;
    document.getElementById("thzl100").innerHTML ="Zyloric 100mg    " + "x" + document.getElementById("zl100").value + "=        Rp." + hzl100;
    document.getElementById("thzl300").innerHTML ="Zyloric 300mg    " + "x" + document.getElementById("zl300").value + "=        Rp." + hzl300;
    document.getElementById("thfmx").innerHTML ="Feminax    " + "x" + document.getElementById("fmx").value + "=        Rp." + hfmx;
    document.getElementById("thpls100").innerHTML ="Polisylane 100ml    " + "x" + document.getElementById("pls100").value + "=        Rp." + hpls100;
   
   

   document.getElementById("totalprice").innerHTML = "Total Harga   =   Rp." +ttlprc;
   
   document.getElementById("submitt").hidden = false;
    }

    function submit(){
       
    }
    
   

  return (
    <main id='mainformpage'>
    
        
        <div className='xl:mx-48 mt-5 bg-emerald-200 p-10  '>

      
        <form name='mainform' action="https://docs.google.com/forms/d/e/1FAIpQLScxP9K0njCobrmf0Le4xq82UQCbDN_iKLLtVhhky5mH2TQpoQ/formResponse" method='POST'>
            <h2 className='font-medium mt-2 text-2xl'>Masukkan Data Diri</h2>
            <div className='grid grid-cols-1 gap-3 my-2 sm:grid'>

            
            <div>
                <h3 className='font-medium'>Nama :</h3>
                <input id='nama' className=' bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.863887102' placeholder='Masukkan Nama Anda' required/>
            </div>
            
            <div>
                <h3 className='font-medium'>Umur :</h3>
                <input id='umur' className=' bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.1403747999' placeholder='Masukkan Umur Anda' required/>
            </div>
            
            <div>
                <h3 className='font-medium'>Alamat :</h3>
                <input id='alamat' className=' bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.1922844345' placeholder='Masukkan Alamat Anda' required/>
            </div>

            <div>
                <h3 className='font-medium'>No Handphone :</h3>
                <p className='italic'>Pastikan no Handphone terdaftar di whatsapp!!</p>
                <input id='nohp' className=' bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='text' name='entry.1936297261' placeholder='Masukkan No Handphone Anda' required/>
            </div>

            </div>

            <div className='mt-6 my-2 w-full border-t-2 border-emerald-800 border-dashed'>
            <h2 className='font-medium mt-2 text-2xl'>Apa Keluhan anda ?</h2>
            <textarea id='keluhan' className='bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' placeholder='Masukkan keluhan anda..' name='entry.1329151112' cols={100} rows={10} required/>

            </div>

            <div className='border-t-2 border-dashed border-emerald-800'>
            <h1 className='mt-3 mb-3 text-2xl font-medium'>Pesan Obat Anda</h1>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
            
                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1CBmTkSiVARe4dRLQmWD_A9a84CHfKfwa'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Ibuprofen</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.3500</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='ibprfn' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.688623515' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=13lXilKe2ivWWXDVzKb2Xi5eU3JASkozC'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Paracetamol</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.5000</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='prctml' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.1910113244' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=12se-mT8_nX1Jg-NjFunqwk9TmsvYOrpE'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Sanmol</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.3000</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='snml' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.2146819969' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1eQPEQbqFuVNnHU7vxGqIBHyeYXFYEFXB'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>OBH</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.25000</h3>
                    <p className='text-slate-500'>Dalam Satuan botol</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='obh' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.1146042946' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1VCfDmdbZFwXpM9C-bYGubXLwPAfcb-QV'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Zyrolic 100mg</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.10000</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='zl100' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.1067090660' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1zpnlRlB2wIzLR3Qb-1jdFCY8-7GTYal9'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Zyrolic 300mg</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.20000</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='zl300' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.857117924' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>
                
                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1jV800TuzbXprLWK8heq0coIdNRqY40pR'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Feminax</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.15000</h3>
                    <p className='text-slate-500'>Dalam Satuan strip</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='fmx' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.1826867245' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>

                <div className='grid grid-cols-3 gap-5 bg-gradient-to-br from-emerald-100 to-cyan-100 p-5 rounded-lg shadow-lg border-2 border-emerald-50'>
                    
                    <img className='rounded-xl border-2 border-emerald-300 w-full h-full col-span-1 break-inside-avoid' src='https://drive.google.com/uc?export=view&id=1pwwVf0-M8RzBE0s1A28lLiCVefC0PAPP'></img>
                    <div className='col-span-2 border-l-2 border-dashed border-emerald-300 pl-3'>
                    <h3 className='text-2xl font-medium text-emerald-900'>Polysilane 100ml</h3>
                    <h3 className='bg-gradient-to-l from-emerald-300 to-emerald-400 p-1 rounded-lg my-1 text-emerald-50 font-bold text-md'>Rp.20000</h3>
                    <p className='text-slate-500'>Dalam Satuan Botol</p>
                    <h5 className='text-slate-600 text-xs'>Jumlah : ..(Max.5)</h5>
                    <input id='pls100' className='mt-3 bg-emerald-50 rounded-md p-2 w-full focus:outline-none focus:bg-white focus:border-emerald-300 border-emerald-800 border-2 font-medium transition-all ease-in' type='number' name='entry.465290073' placeholder='Jumlah' min={0} max={5}/>
                    </div>
                    
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='py-2 my-2 border-t-2 border-emerald-800 border-dashed'>
                <h1 className='text-2xl font-medium my-2'>Pilih Metode pengiriman</h1>
                <div className='flex my-1'>
                <input className='hidden cursor-pointer peer/ojol' checked id='radio1' type='radio' name='entry.1655359029' value='Ambil ditempat' required></input>
                <label for='radio1' className=' p-2 w-full bg-emerald-100 rounded-lg text-2xl cursor-pointer border-emerald-200 border-0 peer-checked/ojol:border-2 peer-checked/ojol:bg-gradient-to-br peer-checked/ojol:from-emerald-800 peer-checked/ojol:to-emerald-600 peer-checked/ojol:font-medium peer-checked/ojol:text-emerald-200 transition-all ease-in'>
                Ambil ditempat</label>
                </div>

                <div className='flex my-1'>
                <input className='hidden cursor-pointer peer/ojol' id='radio2' type='radio' name='entry.1655359029' value='Jasa ojek online' required></input>
                <label for='radio2' className=' p-2 w-full bg-emerald-100 rounded-lg text-2xl cursor-pointer border-emerald-200 border-0 peer-checked/ojol:border-2 peer-checked/ojol:bg-gradient-to-br peer-checked/ojol:from-emerald-800 peer-checked/ojol:to-emerald-600 peer-checked/ojol:font-medium peer-checked/ojol:text-emerald-200 transition-all ease-in'>
                Jasa ojek online</label>
                </div>
            </div>

            <div className='py-2 my-2 border-t-2 border-emerald-800 border-dashed'>
                <h1 className='text-2xl font-medium my-2'>Pilih Metode pembayaran</h1>
                <div className='flex my-1'>
                <input className='hidden cursor-pointer peer/ojol' checked id='radio3' type='radio' name='entry.1812116104' value='Bayar ditempat' required></input>
                <label for='radio3' className='flex items-center p-2 w-full bg-emerald-100 rounded-lg text-2xl cursor-pointer border-emerald-200 border-0 peer-checked/ojol:border-2 peer-checked/ojol:bg-gradient-to-br peer-checked/ojol:from-emerald-800 peer-checked/ojol:to-emerald-600 peer-checked/ojol:font-medium peer-checked/ojol:text-emerald-200 transition-all ease-in'>
                Bayar ditempat</label>
                </div>

                <div className='flex my-1'>
                <input className='hidden cursor-pointer peer/ojol' id='radio4' type='radio' name='entry.1812116104' value='Transfer' required></input>
                <label for='radio4' className='flex items-center p-2 w-full bg-emerald-100 rounded-lg text-2xl cursor-pointer border-emerald-200 border-0 peer-checked/ojol:border-2 peer-checked/ojol:bg-gradient-to-br peer-checked/ojol:from-emerald-800 peer-checked/ojol:to-emerald-600 peer-checked/ojol:font-medium peer-checked/ojol:text-emerald-200 transition-all ease-in'>
                Transfer</label>
                </div>
            </div>
            </div>

            <div className='p-1 border-2 rounded-xl border-emerald-50'>
                <input className=' ' type='button' onClick={confirm} id='confirmbutton'></input>
                <label className='flex justify-center cursor-pointer bg-emerald-50 shadow-lg border-emerald-50 font-medium hover:bg-emerald-800 border-2 hover:text-emerald-50 p-3 text-2xl rounded-lg transition-all eas' for='confirmbutton'>Konfirmasi Pesanan</label>
                <div id='result' className='bg-emerald-50 p-3 rounded-lg mt-3' hidden>
                        <div>
                        <h4 className='text-xl font-medium'>Nama :</h4>
                        <span id='data1' className='text-xl'></span>
                        </div>
                        <div>
                        <h4 className='text-xl font-medium'>Umur :</h4>
                        <span id='data2' className='text-xl'></span>
                        </div>
                        <div>
                        <h4 className='text-xl font-medium'>Alamat :</h4>
                        <span id='data3' className='text-xl'></span>
                        </div>
                        <div>
                        <h4 className='text-xl font-medium'>No Handphone :</h4>
                        <span id='data4' className='text-xl'></span>
                        </div>
                        <div>
                        <h4 className='text-xl font-medium'>Keluhan :</h4>
                        <span id='data5' className='text-xl'></span>
                        </div>

                        <div className='border-t-2 my-2'>
                        <div>
                        <span id='thibrpfn' className='text-xl'></span>
                        </div>
                        <div>
                        <span id='thprctml' className='text-xl'></span>
                        </div>
                        <div>
                        <span id='thsnml' className='text-xl'></span>
                        </div>
                        <div>
                        <span id='thobh' className='text-xl'></span>
                        </div>
                        <div>
                        <span id='thzl100' className='text-xl'></span>
                        </div>
                        <div>
                        <span id='thzl300' className='text-xl'></span>
                        </div>
                        <div>
                        <span id='thfmx' className='text-xl'></span>
                        </div>
                        <div>
                        <span id='thpls100' className='text-xl'></span>
                        </div>

                        

                        <div className='flex items-end justify-end'>
                        <span id='totalprice' className='p-3 rounded-lg bg-gradient-to-l from-emerald-300 to-emerald-400 text-xl font-semibold'></span>
                        </div>
                        </div>
                    
                </div>
            </div>

            <div className='mt-3 flex justify-center w-full'>
            <button id='submitt' hidden className='p-3 bg-emerald-100 rounded-xl w-full text-emerald-900 font-medium text-2xl hover:bg-emerald-400 transition-all ease-in' type='submit' onClick={submit}>Pesan Sekarang</button>
            </div>

            </div>

        </form>

        
    
        </div>
   
    </main>
  )
}

export default inputformorder