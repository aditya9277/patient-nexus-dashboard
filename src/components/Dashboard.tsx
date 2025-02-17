
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChatBot } from "./ChatBot";
import { HealthMetrics } from "./HealthMetrics";
import { Appointments } from "./Appointments";
import { BodySystems } from "./BodySystems";
import { HeartPulse, Calendar, MessageCircle, Activity } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("metrics");

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">HealthBot</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer">
              $
            </div>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center cursor-pointer">
              <img
                src="https://i.pravatar.cc/32"
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 p-6 bg-white/80 backdrop-blur-lg border-none shadow-lg animate-fade-in">
            <ChatBot />
          </Card>

          <Card className="col-span-1 md:col-span-2 p-6 bg-white/80 backdrop-blur-lg border-none shadow-lg animate-fade-in">
            <HealthMetrics />
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-lg border-none shadow-lg animate-fade-in">
            <Appointments />
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/80 backdrop-blur-lg border-none shadow-lg animate-fade-in">
            <BodySystems />
          </Card>
        </div>

        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-lg rounded-full px-6 py-4 shadow-lg">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveTab("metrics")}
              className={`p-2 rounded-full transition-colors ${
                activeTab === "metrics"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-secondary"
              }`}
            >
              <Activity size={24} />
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={`p-2 rounded-full transition-colors ${
                activeTab === "calendar"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-secondary"
              }`}
            >
              <Calendar size={24} />
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`p-2 rounded-full transition-colors ${
                activeTab === "chat"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-secondary"
              }`}
            >
              <MessageCircle size={24} />
            </button>
            <button
              onClick={() => setActiveTab("health")}
              className={`p-2 rounded-full transition-colors ${
                activeTab === "health"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-secondary"
              }`}
            >
              <HeartPulse size={24} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
