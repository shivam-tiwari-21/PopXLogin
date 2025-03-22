import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ user, logout }) => {
  const navigate = useNavigate();

  return (
     <div className="flex flex-col justify-center items-center mt-75 text-center h-full">
      {!user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Welcome to PopX</h1>
          <p className="mb-6 text-gray-500">lorem ipsum</p>
          <div className="space-y-4 w-full">
            <button
              onClick={() => navigate('/create')}
              className="w-full py-3 bg-[#6C25FF] text-white rounded-lg cursor-pointer hover:bg-blue-900 transition-colors"
            >
              Create Account
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full py-3 bg-[#6C25FF4B]  rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
            >
              Already Registered? Login
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6">Welcome Back!</h1>
          <div className="space-y-4 w-full">
            <button
              onClick={() => navigate(`/profile/${user.id}`)}
              className="w-full py-3 bg-[#6C25FF] text-white rounded-lg cursor-pointer hover:bg-blue-900 transition-colors"
            >
              Go to Your Profile
            </button>
            <button
              onClick={logout}
              className="w-full py-3 bg-[#DD4A3D] text-white rounded-lg cursor-pointer hover:bg-red-600 transition-colors"
            >
              Log Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
