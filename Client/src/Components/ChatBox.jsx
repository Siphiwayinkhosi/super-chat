import React from 'react';
import { Avatar, Image } from 'antd';

export const ChatBox = ({ user, avatar, message, time, isCurrentUser }) => {
  return (
    <div
      className={`flex items-center mb-4 ${
        isCurrentUser ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isCurrentUser && (
        <Avatar
          size={50}
          src={
            <Image
              src={avatar} // Avatar URL passed from props
              alt={`${user}'s avatar`}
            />
          }
        />
      )}
      <div
        className={`ml-4 p-3 rounded-lg ${
          isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
        style={{ maxWidth: '60%' }} // Limit the message box width
      >
        <strong className="text-lg font-bold">{user}</strong>
        <p className="text-sm">{message}</p>
        <span className="text-xs text-white-500">{time}</span> {/* Display time */}
      </div>
      {isCurrentUser && (
        <Avatar
          size={50}
          src={
            <Image
              src={avatar} // Avatar URL passed from props
              alt={`${user}'s avatar`}
            />
          }
        />
      )}
    </div>
  );
};

export default ChatBox;

