
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Globe, Wand2, FileText, AlertTriangle } from "lucide-react";

type BaseMessage = {
  type: "user" | "bot";
  text: string;
};

type OptionsMessage = BaseMessage & {
  options: string[];
  analysis?: never;
};

type AnalysisMessage = BaseMessage & {
  options?: never;
  analysis?: {
    confidence: string;
    recommendation: string;
    urgency: string;
  };
};

type Message = OptionsMessage | AnalysisMessage;

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: "bot", 
      text: "Select your preferred language / Seleccione su idioma / 选择您的语言", 
      options: ["English", "Español", "中文"]
    }
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");

  const features = [
    { icon: <Wand2 className="w-4 h-4" />, label: "Symptom Check" },
    { icon: <FileText className="w-4 h-4" />, label: "Generate Report" },
    { icon: <AlertTriangle className="w-4 h-4" />, label: "Emergency" },
    { icon: <Globe className="w-4 h-4" />, label: "Translate" }
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "user", text: input } as Message]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { 
          type: "bot", 
          text: "I'll help analyze your symptoms. Please provide more details about what you're experiencing.",
          analysis: {
            confidence: "89%",
            recommendation: "Schedule consultation",
            urgency: "Medium"
          }
        } as Message
      ]);
    }, 1000);
  };

  return (
    <div className="h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="text-primary" />
          <h2 className="text-lg font-semibold">AI Health Assistant</h2>
        </div>
        <div className="flex items-center gap-2">
          {features.map((feature, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="p-2"
              title={feature.label}
            >
              {feature.icon}
            </Button>
          ))}
        </div>
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
              <div>{message.text}</div>
              {message.options && (
                <div className="mt-2 flex gap-2">
                  {message.options.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      size="sm"
                      onClick={() => setLanguage(option)}
                      className="text-xs"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}
              {message.analysis && (
                <div className="mt-2 pt-2 border-t border-gray-200 text-xs">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-gray-500">Confidence</div>
                      <div className="font-medium">{message.analysis.confidence}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Action</div>
                      <div className="font-medium">{message.analysis.recommendation}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Urgency</div>
                      <div className="font-medium">{message.analysis.urgency}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={language === "Español" ? "Escriba su mensaje..." : language === "中文" ? "输入消息..." : "Type your message..."}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1"
        />
        <Button onClick={handleSend} className="bg-primary text-white">
          {language === "Español" ? "Enviar" : language === "中文" ? "发送" : "Send"}
        </Button>
      </div>
    </div>
  );
};
