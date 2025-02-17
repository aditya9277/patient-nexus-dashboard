
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";

export const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Please select your preferred language" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Thanks for your message! How can I help you?" },
      ]);
    }, 1000);
  };

  return (
    <div className="h-[400px] flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="text-primary" />
        <h2 className="text-lg font-semibold">Health Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === "user"
                  ? "bg-primary text-white"
                  : "bg-secondary text-primary"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1"
        />
        <Button onClick={handleSend} className="bg-primary text-white">
          Send
        </Button>
      </div>
    </div>
  );
};
