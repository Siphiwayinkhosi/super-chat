import React, { useState } from 'react';

export const UserLogin = ({ setUser }) => {
  const [name, setName] = useState(''); // State to store the name input

  const handleLogin = () => {
    if (name.trim()) { // Ensure the user enters a non-empty name
      setUser(name); // Set the username in the parent component
    }
  };

  return (
    
    <div 
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('/80.png')`, // Set background image
        backgroundSize: 'cover', // Cover the whole area
        backgroundPosition: 'center', // Center the image
      }}
    >
      <h1 className='text-2xl font-bold mb-4 text-white'>Join our group chat application</h1>
      <h1 className="text-2xl font-bold mb-4 text-white">Enter your username</h1>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update name input
        className="border p-2 mb-4"
      />
      <button
        onClick={handleLogin} // Call handleLogin when button is clicked
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default UserLogin;

