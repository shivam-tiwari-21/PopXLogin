import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { userId } = useParams();
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold bg-white -ml-7 -mr-7 -mt-5 pl-8 pt-5 pb-3 border border-[#00000007] mb-2">Account Settings</h2>
      <p className="">Hii, User {userId}</p>
      <p className="">user@email.com</p>
      <p className="text-gray-600">
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default ProfilePage;
