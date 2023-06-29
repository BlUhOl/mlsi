//Navbar Samping
import React from 'react'

const navbar = () => {
  return (
    <div className='fixed'>
        <div className='h-screen w-72 bg-emerald-800 border-r-emerald-500 border-r-2'>
            <div className='text-6xl font-medium text-center py-2 text-emerald-100'>
                Apotek Lorem Ipsum
            </div>
            <div className='pt-12 p-2 '>
            <a className='' href="/dashboard/overview">
                <div className='my-2 container border-b-2 border-emerald-400 text-4xl rounded-xl p-2 hover:font-semibold hover:bg-emerald-100 text-emerald-100 hover:text-emerald-950 transition-all ease-in'>
                    Overview
                </div>
            </a>
            <a href="/dashboard/orderlist">
                <div className='my-2 container border-b-2 border-emerald-400 text-4xl rounded-xl p-2 hover:font-semibold hover:bg-emerald-100 text-emerald-100 hover:text-emerald-950 transition-all ease-in'>
                    Order
                </div>
            </a>
            <a href="/dashboard/inventory">
                <div className='my-2 container border-b-2 border-emerald-400 text-4xl rounded-xl p-2 hover:font-semibold hover:bg-emerald-100 text-emerald-100 hover:text-emerald-950 transition-all ease-in'>
                    Inventory
                </div>
            </a>

            <a href="/dashboard/feedback">
                <div className='my-2 container border-b-2 border-emerald-400 text-4xl rounded-xl p-2 hover:font-semibold hover:bg-emerald-100 text-emerald-100 hover:text-emerald-950 transition-all ease-in'>
                    Feedback
                </div>
            </a>

            <a href='/'>
                <div className='mt-48 items-center justify-center flex border-2 border-red-300 bg-red-100 text-xl rounded-xl p-1 hover:font-semibold hover:bg-red-500 hover:text-red-50 transition-all ease-in'>
                    Logout
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default navbar