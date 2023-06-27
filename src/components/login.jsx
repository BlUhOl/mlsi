// Login
import React from 'react'
import _headnavbar from './headnavbar'


const login = () => {
    const datauser =[
        {
            username: 'Admin1',
            password: '1234567'
        },
        {
            username: 'Admin2',
            password: '987654'
        },
        {
            username: 'Admin3',
            password: 'abcdefg'
        }
      ];

    function auth(event){
        event.preventDefault();
        var uname = document.getElementById('username').value;
        var pass = document.getElementById('password').value;

        if (datauser.some((e) => uname===e.username && pass===e.password)){
            window.location.replace("/dashboard/overview")
        } else{
            alert("User Invalid")
            return;
        }
    }
  return (
    <main>
    <_headnavbar/>
    <div className='py-28 bg-gradient-to-br from-emerald-500 to-emerald-700 w-full h-screen'>
        <div className='sm:flex items-center justify-center'>
            <div className='bg-emerald-50 p-10 rounded-xl lg:m-64'>
                <div>
                    <h3 className='text-2xl font-bold text-emerald-950 my-3'>Login</h3>

                    <form id='loginform' action='post'>
                        <div className='my-1'>
                            <h4 className='text-xl font-normal'>Username</h4>
                            <input className='p-1 bg-white focus:bg-emerald-200 rounded-lg border-2 focus:outline-none focus:border-emerald-700' size={35} type='text' name='namauser' id='username' placeholder='Masukkan username anda' required></input>
                        </div>
                        <div className='my-1'>
                            <h4 className='text-xl font-normal'>Password</h4>
                            <input className='p-1 bg-white focus:bg-emerald-200 rounded-lg border-2 focus:outline-none focus:border-emerald-700' size={35} type='password' name='passuser' id='password' placeholder='Masukkan password anda' required></input>
                        </div>

                        <div className='my-1 mt-5'>
                            <button className='bg-emerald-700 w-full px-3 py-1 rounded-lg border-2 text-emerald-50 font-medium hover:bg-white hover:text-emerald-950 hover:border-emerald-600 transition-all ease-in' type='submit' onClick={auth}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}

export default login