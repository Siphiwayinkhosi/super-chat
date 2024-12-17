import { useState, useEffect } from 'react';
import { io } from 'socket.io-client'; 
import ChatBox from './Components/ChatBox';
import UserLogin from './Components/UserLogin';
import InputText from './Components/InputText';

 const socket = io('http://192.168.100.101:5000'); // Use your computer's local IP

//const socket = io('http://192.168.8.108:5000');

function App() {
  const [user, setUser] = useState(null); // Store logged in user
  const [messages, setMessages] = useState([]); // Store chat messages

  useEffect(() => {
    socket.on('chat', (chat) => {
      console.log('Received message:', chat); // Log received messages
      setMessages((prevMessages) => [...prevMessages, chat]); // Update messages when received
    });

    return () => {
      socket.off('chat');
    };
  }, []);

  const sendMessage = (messageData) => {
    if (messageData.message.trim()) {
      const chat = { 
        user, 
        message: messageData.message, 
        time: messageData.time // Add time to the chat object
      }; 
      console.log('Sending message:', chat); // Log sent messages
      socket.emit('chat', chat); // Emit the message to the server
    }
  };

  return (
    <div className="p-6">
      {!user ? (
        <UserLogin setUser={setUser} />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Username: {user}</h1>
          {messages.map((msg, idx) => (
            <ChatBox
              key={idx}
              user={msg.user}
              message={msg.message}
              time={msg.time} // Pass the time to ChatBox
              avatar="https://picsum.photos/200/300"
              isCurrentUser={msg.user === user}
            />
          ))}
          <InputText sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
}

export default App;
