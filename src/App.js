
import React, { useState } from 'react';
import ChatBubble from './components/ChatBubble';
import ChatInput from './components/ChatInput';
import './styles.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    setMessages([...messages, { type: 'user', text }]);
    setLoading(true);

    // Simulate backend response (replace with real API later)
    setTimeout(() => {
      const response = {
        type: 'bot',
        verse: "Qur'an 9:51",
        reflection: "Nothing will happen to us except what Allah has decreed. Trust in Allah.",
        reviewed: true
      };

      setMessages(prev => [...prev, {
        type: 'bot',
        text: `${response.verse}: ${response.reflection}`,
        reviewed: response.reviewed
      }]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="chat-container">
      <h2>Noor Advisor</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <ChatBubble key={index} text={msg.text} type={msg.type} reviewed={msg.reviewed} />
        ))}
        {loading && <ChatBubble type="bot" text="Thinking..." />}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default App;