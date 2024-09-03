import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth, provider } from '../firebase/Fire';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

function Login() {
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error('Google orqali ro\'yxatdan o\'tishda xatolik:', error.message);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async (e) => {
      e.preventDefault();
      try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('Kirish muvaffaqiyatli');
      } catch (error) {
          console.error('Kirishda xatolik:', error.message);
      }
  };

  return (
    <div
    style={{
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(https://get.wallhere.com/photo/sunlight-landscape-forest-sunset-lake-nature-reflection-plants-evening-morning-river-wilderness-pond-habitat-natural-environment-283520.jpg)"
    }}
    className='h-[100vh] w-[100%] flex flex-col justify-center items-center'
>
    <div className='bg-[#030303c0] h-[450px] w-[373px] rounded-[20px] p-[32px]'>
        <h2 className='text-[32px] text-[400] text-[#fff]'>Login</h2>
        <form className='flex flex-col mt-[18px]' onSubmit={signInWithEmail}>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className='text-white h-[48px] pl-[15px] border-b-[1px] border-[#fff] bg-[#fff0]'
                type="email"
                placeholder='Email address'
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                className='text-white h-[48px] pl-[15px] border-b-[1px] border-[#fff] bg-[#fff0] mt-[15px]'
                type="password"
                placeholder='Password'
            />
            <button

                type="submit"
                className='btn mt-[40px] bg-[#fe0101d3] text-white hover:bg-[#f00] border-[#f00] hover:border-[#f00]'
            >
                Login to your account
            </button>
            <button
            onClick={signInWithGoogle}
            type="submit"
            className='btn mt-[40px] bg-[#152cff88] text-white hover:bg-[#001eff] border-[#0026ff] hover:border-[#1947ff]'
        >
            Google
        </button>
        </form>
        <div className='text-[16px] flex justify-center mt-[20px] gap-1'>
            <h2 className='text-white'>Don’t have an account?</h2>
            <NavLink to="/sigin">
                <p className='text-[#f00]'>Sign Up</p>
            </NavLink>
        </div>
    </div>
</div>
  );
}

export default Login;
