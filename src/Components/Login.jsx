import React from 'react'
import logo from "../assets/Logo.png"


const Login = () => {
  return (
    <div className='login-page'>
        <div className='inner-box '>
            <img src={logo} alt="" className='w-14 mt-5 ml-auto mr-auto ' />
            <h2 className='text-xl  font-medium mt-2 text-center'>Join NaviSensei as an aspiring Learner!</h2>
            <div className='loginbody  flex h-[60%] w-full mt-9' >
                <div className='learnerSignup border-r-2 border-gray-300 h-[100%] w-[50%] flex flex-col items-center gap-3'>
                    <h4 className='text-center text-[1.6vw] mt-2'>Sign Up</h4>
                    <form action="" className='w-[70%] h-[100%] mb-2 '>
                        <label htmlFor="" className='block w-[50%] text-[1.1vw] text-gray-500'>Email Id</label>
                        <input type="email" className='w-[100%] h-[14%] text-[1vw] rounded-xl mb-2 border border-gray-600 pl-3' />
                         <label htmlFor="" className='block w-[50%] text-[1.1vw] text-gray-500'>Password</label>
                        <input type="password" className='w-[100%] text-[1vw] h-[14%] rounded-xl border border-gray-600 mb-2 pl-3' />
                         <label htmlFor="" className='block w-[50%] text-[1.1vw] text-gray-500'>Confirm Password</label>
                        <input type="password" className='w-[100%] text-[1vw] h-[14%] rounded-xl border border-gray-600 mb-2 pl-3' />
                        <div className='flex justify-center'>
                        <button className='p-3 text-center text-[1vw] mt-1 mb-5 items-center text-white rounded-3xl bg-gray-400 w-[40%]'>Sign Up</button>
                        </div>
                    </form>
                    <p className='text-[0.9vw] text-gray-500 text-center'> By signing up, you agree to the  <span className='underline'>Terms of Service</span> and acknowledge you’ve read our <span className='underline'>Privacy Policy.</span></p>
                    
                </div>
                <div className='learnerLogin flex flex-col  h-[100%] w-[50%] items-center '>
                    <h4 className='text-center text-[1.6vw] mt-2'>Log in</h4>
                     <form action="" className='w-[70%] h-[70%] flex flex-col  gap-0.5 mt-5 '>
                        <label htmlFor="" className='block w-[50%] text-[1.1vw] text-gray-500'>Email Id</label>
                        <input type="email" className='w-[100%] h-[14%] text-[1vw] rounded-xl mb-2 border border-gray-600 pl-3' />
                         <label htmlFor="" className='block w-[50%] text-[1.1vw] text-gray-500'>Password</label>
                        <input type="password" className='w-[100%] text-[1vw] h-[14%] rounded-xl border border-gray-600 mb-2 pl-3' />
                        <div className='flex justify-center'>
                        <button className='p-3 text-center text-[1vw] mt-1 mb-5  text-white rounded-3xl bg-gray-400 w-[40%]'>Login</button>
                        </div>
                    </form>
                    {/* <div className='h-[25%] flex flex-col ml-10 gap-0.5 mt-5'>
                    <h4 className='text-[1.1vw] text-gray-500 '>Email Address</h4>
                    <input type="text" className='h-[40%] w-[80%] p-3 border border-gray-600 rounded-xl' />
                    </div>
                    <div className='h-[25%] flex flex-col ml-10 gap-0.5'>
                    <h4 className='text-[1.1vw] text-gray-500'>Password</h4>
                    <input type="password" className='h-[40%] w-[80%] border border-gray-600 rounded-xl p-3' />
                    <div className='flex justify-end w-[80%]'>
                        <a href="" className='text-[1vw] text-gray-500 '>Forgot Password?</a>
                    </div>
                        <button className='p-3 text-center ml-[6vw] mt-5 text-white rounded-3xl bg-gray-400 w-[25%]'>Login</button>
                    </div> */}
                </div>
            </div>
            <footer className='flex gap-8 text-[1vw] mt-11 h-10 rounded-2xl text-gray-600 bg-gray-200 justify-center items-center'>
                    <p>About</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>@support.navisensei</p>
                 
            </footer>
        </div>
    </div>
  )
}

export default Login
