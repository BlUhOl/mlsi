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
    <div className='py-36 bg-sky-950 w-full h-screen'>
        <div className='flex items-center justify-center'>
            <div className='bg-emerald-50 p-10 rounded-xl'>
                <div>
                    <h3 className='text-2xl font-bold text-emerald-950 my-3'>Login</h3>

                    <form id='loginform' action='post'>
                        <div>
                            <h4>Username</h4>
                            <input type='text' name='namauser' id='username' placeholder='Masukkan username anda' required></input>
                        </div>
                        <div>
                            <h4>Password</h4>
                            <input type='password' name='passuser' id='password' placeholder='Masukkan password anda' required></input>
                        </div>

                        <div>
                            <button type='submit' onClick={auth}>Login</button>
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