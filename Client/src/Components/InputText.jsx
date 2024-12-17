import React, { useState } from 'react';

export const InputText = ({ sendMessage }) => {
  const [message, setMessage] = useState(''); // State to store the message

  const handleSend = () => {
    if (message.trim()) {
      const messageData = {
        message,
        time: new Date().toLocaleTimeString(), // Add the current time
      };
      sendMessage(messageData); // Send the message data via the provided function
      setMessage(''); // Clear the input field after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend(); // Trigger sending the message on Enter key press
    }
  };

  return (
    <div className="flex items-center">
      <input
        autoFocus
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update the input field
        onKeyDown={handleKeyDown} // Trigger sending on Enter key press
        placeholder="Type your message"
        className="border p-2 w-full mr-2"
      />
      <button
        onClick={handleSend} // Send the message on button click
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default InputText;

