import Input from "../components/Input";
import Chat from "../components/Chat";
import { useState } from "react";

function Chatbox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (message.trim() === "") return;
      const updatedMessages = [...messages, { role: "user", content: message }];
      console.log(updatedMessages);
      const response = await fetch(
        "http://localhost:5050/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            provider: "open-ai",
            mode: "development",
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: updatedMessages,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      const userMessage = {
        id: messages.length,
        text: message,
        role: "user",
        date: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      const botMessage = {
        id: messages.length + 1,
        role: "bot",
        text: data.message.content,
        date: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      console.log(botMessage);
      setMessages([...messages, userMessage, botMessage]);
      localStorage.setItem(
        "messages",
        JSON.stringify([...messages, userMessage, botMessage])
      );
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  console.log(message);
  return (
    <>
      <Chat messages={messages} />
      <Input
        handleSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
      />
    </>
  );
}

export default Chatbox;
