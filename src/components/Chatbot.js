import React, { useState } from 'react';
import './chatbot.css'

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    const getResponse = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/prompt/${text}`);
        const data = await response.json();

        setMessages([
        ...messages,
        {
            author: text,
            bot: data.candidates[0].content,
        },
        ]);
        setText("");
    };

    return (
        <div className="chatbot-container">
            <div className="chat-header">PaLM 2 Chatbot</div>
            <div className="chat-window">
                {messages.map((message, index) => (
                    <React.Fragment key={index}>
                        <div className="message user">{message.author}</div>
                        <div className="message bot">{message.bot}</div>
                    </React.Fragment>
                ))}
            </div>
            <form className="message-form" onSubmit={getResponse}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;