import React from 'react';
import ChatWindow from 'C:/Users/lucac/OneDrive/Desktop/UTN/wpp-proy-final/wpp-proy-final/src/components/chat/ChatWindow.jsx';
import "C:/Users/lucac/OneDrive/Desktop/UTN/wpp-proy-final/wpp-proy-final/src/styles/ChatPage.css";

const ChatPage = ({ isMobile, onBack }) => {
    return (
        <div className="chat-page-container">
            <ChatWindow isMobile={isMobile} onBack={onBack} />
        </div>
    );
};

export default ChatPage;