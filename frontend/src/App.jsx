import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you find an event?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulating bot response (Replace with actual API call)
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: "Looking for events... (Fetching data)", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your preferences..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
