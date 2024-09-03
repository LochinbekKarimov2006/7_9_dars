import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/Fire'; 

function Sigin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      console.log('Ro\'yxatdan o\'tgan foydalanuvchi:', user);
    } catch (error) {
      console.error('Ro\'yxatdan o\'tish xatosi:', error.message);
    }
  };

  const sigin = (e) => {
    e.preventDefault();
    registerUser(name, email, password);
  };

  return (
    <div
      style={{
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://get.wallhere.com/photo/sunlight-landscape-sunset-hill-nature-field-road-sunrise-hills-evening-morning-river-horizon-valley-highway-dusk-plateau-infrastructure-autumn-mountain-dawn-agriculture-meadow-reservoir-prairie-rural-area-atmospheric-phenomenon-mountainous-landforms-mountain-range-nonbuilding-structure-243901.jpg)',
      }}
      className="h-[100vh] w-[100%] flex flex-col justify-center items-center"
    >
      <div className="bg-[#030303c0] h-[450px] w-[373px] rounded-[20px] p-[32px]">
        <h2 className="text-[32px] text-[400] text-[#fff]">Sign Up</h2>
        <form onSubmit={sigin} className="flex flex-col mt-[18px]">
          <input
            onChange={(e) => setName(e.target.value)}
            className="text-white h-[48px] pl-[15px] border-b-[1px] border-[#fff] bg-[#fff0]"
            type="text"
            placeholder="Full Name"
            value={name}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-white h-[48px] pl-[15px] border-b-[1px] border-[#fff] bg-[#fff0] mt-[15px]"
            type="email"
            placeholder="Email address"
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-white h-[48px] pl-[15px] border-b-[1px] border-[#fff] bg-[#fff0] mt-[15px]"
            type="password"
            placeholder="Password"
            value={password}
          />
          <button type="submit" className="btn mt-[40px] bg-[#fe0101d3] text-white hover:bg-[#f00] border-[#f00] hover:border-[#f00]">
            Sign up to your account
          </button>
        </form>
        <div className="text-[16px] flex justify-center mt-[20px] gap-1">
          <h2 className="text-white">Don’t have an account?</h2>
          <NavLink to="/login">
            <p className="text-[#f00]">Login</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sigin;
