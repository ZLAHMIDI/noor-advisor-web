
import React, { useState } from 'react';
import ChatBubble from './components/ChatBubble';
import ChatInput from './components/ChatInput';
import './styles.css';
import { getVerse } from './utils/quranApi';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

 
const handleSend = async (text) => {
  setMessages(prev => [...prev, { type: 'user', text }]);
  setLoading(true);

  try {
    const verseData = await getVerse("9:51"); // ✅ Make sure this happens FIRST

    if (verseData) {
      setMessages(prev => [
        ...prev,
        { type: 'bot', text: verseData.reference },
        { type: 'bot', text: verseData.arabic, type: 'bot', className: 'arabic' },
        { type: 'bot', text: verseData.translation },
        { type: 'bot', text: "✨ Reflection: Trust in Allah’s will during uncertainty." }
      ]);
    } else {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "⚠️ Sorry, I couldn’t fetch a verse just now. Please try again soon."
      }]);
    }

  } catch (err) {
    console.error("Error in handleSend:", err);
    setMessages(prev => [...prev, {
      type: 'bot',
      text: "Something went wrong while retrieving the ayah."
    }]);
  }

  setLoading(false);
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