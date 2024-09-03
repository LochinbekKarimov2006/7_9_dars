import React, { useState } from 'react';
import { registerUser, loginUser } from './authService';

const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Ro'yxatdan o'tish</h2>
      <input
        type="text"
        placeholder="Ism"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => registerUser(name, email, password)}>Ro'yxatdan o'tish</button>

      <h2>Tizimga kirish</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => loginUser(email, password)}>Tizimga kirish</button>
    </div>
  );
};

export default AuthForm;
