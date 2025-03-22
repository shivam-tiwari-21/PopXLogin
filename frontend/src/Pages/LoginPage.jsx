import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ id: "123", email });
    navigate('/');
  };

  return (
    <div className="flex flex-col h-full">
<h2 className="text-xl font-bold mb-2 ">Signin to your</h2>
<h2 className="text-xl font-bold mb-4">Pop X account</h2>   
      <p className="mb-4 text-gray-500">lorem ipsum</p>
      <form onSubmit={handleLogin} className="space-y-4 w-full">
      <div className='  text-[#6C25FF] ml-2 drop-shadow-2xl z-15'>Email <span className='text-[#DD4A3D]'>*</span></div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 -mt-4 flex border border-[#CBCBCB] rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
              <div className='  text-[#6C25FF] ml-2 drop-shadow-2xl z-15'>Password <span className='text-[#DD4A3D]'>*</span></div>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 -mt-4 flex border border-[#CBCBCB] rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#6C25FF] cursor-pointer text-white rounded-lg  hover:bg-blue-900 mt-2 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
