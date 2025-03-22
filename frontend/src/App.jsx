import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CreatePage from './Pages/CreatePage';
import ProfilePage from './Pages/ProfilePage';

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex justify-center items-center bg-white">
        {/* Mobile container */}
        <div className="w-[375px] h-[667px]  bg-[#F7F8F9]  shadow-lg rounded-xl p-6 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage user={user} logout={logout} />} />
            <Route path="/login" element={<LoginPage login={login} />} />
            <Route path="/create" element={<CreatePage login={login} />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
