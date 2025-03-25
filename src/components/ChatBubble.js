import React from 'react';

const ChatBubble = ({ type, text, reviewed }) => {
  return (
    <div className={`bubble ${type}`}>
      <p>{text}</p>
      {type === 'bot' && reviewed !== undefined && (
        <span className="review-label">
          {reviewed ? '✅ Reviewed by Scholar' : '⚠️ Pending Review'}
        </span>
      )}
    </div>
  );
};

export default ChatBubble;