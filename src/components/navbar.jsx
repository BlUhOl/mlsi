import React from 'react'

const navbar = () => {
  return (
    <div className='fixed'>
        <div className='h-screen w-72 bg-emerald-600 border-r-emerald-500 border-r-2'>
            <div className='text-6xl font-medium text-center py-2'>
                Lorem Ipsum
            </div>
            <div className='pt-12'>
                <div className='container text-4xl border-b-2 border-emerald-500 p-2 hover:font-semibold hover:bg-gradient-to-tl hover:from-emerald-200 hover:to-emerald-500 transition-transform ease-in-out'>
                    Overview
                </div>
                <div className='container text-4xl border-b-2 border-emerald-500 p-2 hover:font-semibold hover:bg-gradient-to-tl hover:from-emerald-200 hover:to-emerald-500 transition-transform ease-in-out'>
                    Order
                </div>
                <div className='container text-4xl border-b-2 border-emerald-500 p-2 hover:font-semibold hover:bg-gradient-to-tl hover:from-emerald-200 hover:to-emerald-500 transition-transform ease-in-out'>
                    Inventory
                </div>
                <div className='container text-4xl border-b-2 border-emerald-500 p-2 hover:font-semibold hover:bg-gradient-to-tl hover:from-emerald-200 hover:to-emerald-500 transition-transform ease-in-out'>
                    Contact
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar