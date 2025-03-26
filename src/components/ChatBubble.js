import React from 'react';

const ChatBubble = ({ type, text, className }) => {
  return (
    <div className={`bubble ${type} ${className || ''}`} dir={className === 'arabic' ? 'rtl' : 'ltr'}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;