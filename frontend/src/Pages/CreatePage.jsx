import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePage = ({ login }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'no', // Default value
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating user account creation
    login({ id: "123", email: formData.email });
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-center mt-8 h-full">
      <h2 className="text-xl font-bold mb-2 ">Create your</h2>
      <h2 className="text-xl font-bold mb-4">Pop X account</h2>      
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className='  text-[#6C25FF] ml-2 drop-shadow-2xl z-15'>Full Name <span className='text-[#DD4A3D]'>*</span></div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-3 -mt-4 flex border border-[#CBCBCB] rounded-lg"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
       <div className='  text-[#6C25FF] ml-2 drop-shadow-2xl z-15'>Phone <span className='text-[#DD4A3D]'>*</span></div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 -mt-4 flex border border-[#CBCBCB] rounded-lg"
          value={formData.phone}
          onChange={handleChange}
          required
        />
               <div className='  text-[#6C25FF] ml-2 drop-shadow-2xl z-15'>Email <span className='text-[#DD4A3D]'>*</span></div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-3 -mt-4 flex border border-[#CBCBCB] rounded-lg"
          value={formData.email}
          onChange={handleChange}
          required
        />
               <div className='  text-[#6C25FF] ml-2 drop-shadow-2xl z-15'>Password <span className='text-[#DD4A3D]'>*</span></div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 -mt-4 flex border border-[#CBCBCB] rounded-lg"
          value={formData.password}
          onChange={handleChange}
          required
        />
               <div className='  text-[#6C25FF] ml-2 drop-shadow-2xl z-15'>Company <span className='text-[#DD4A3D]'>*</span></div>

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full p-3 -mt-4 flex border border-[#CBCBCB] rounded-lg"
          value={formData.company}
          onChange={handleChange}
        />

        {/* Radio Button for Agency */}
        <div className="w-full text-left">
          <p className="mb-2">Are you an agency?</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
                className="w-4 h-4"
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#6C25FF] text-white rounded-lg hover:bg-blue-900 mt-10 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
