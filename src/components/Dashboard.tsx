
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChatBot } from "./ChatBot";
import { HealthMetrics } from "./HealthMetrics";
import { Appointments } from "./Appointments";
import { BodySystems } from "./BodySystems";
import { 
  HeartPulse, 
  Calendar, 
  MessageCircle, 
  Activity,
  Brain,
  ImagePlus,
  FileText,
  AlertTriangle,
  Microscope,
  Globe,
  Stethoscope,
  UserRound
} from "lucide-react";
import { Button } from "./ui/button";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("metrics");

  const quickActions = [
    { icon: <AlertTriangle className="w-5 h-5" />, label: "Emergency", color: "bg-red-500" },
    { icon: <Microscope className="w-5 h-5" />, label: "Lab Results", color: "bg-purple-500" },
    { icon: <ImagePlus className="w-5 h-5" />, label: "Upload Scan", color: "bg-blue-500" },
    { icon: <FileText className="w-5 h-5" />, label: "Reports", color: "bg-green-500" },
  ];

  const features = [
    { icon: <Stethoscope />, label: "Symptom Check", description: "AI-powered health assessment" },
    { icon: <ImagePlus />, label: "Imaging Analysis", description: "Advanced medical scan analysis" },
    { icon: <Brain />, label: "Decision Support", description: "Clinical decision assistance" },
    { icon: <FileText />, label: "Report Generation", description: "Automated health reports" },
    { icon: <Globe />, label: "Language Options", description: "Multi-lingual support" },
    { icon: <AlertTriangle />, label: "Emergency Tools", description: "Quick emergency response" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">HealthBot</h1>
            <div className="flex items-center gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`${action.color} text-white hover:opacity-90`}
                  size="sm"
                >
                  {action.icon}
                  <span className="ml-2 hidden md:inline">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Globe className="w-4 h-4" />
              EN
            </Button>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full">
              <UserRound className="w-5 h-5 text-primary" />
              <span className="hidden md:inline text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Highlights */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/80 backdrop-blur-lg border-none shadow-lg animate-fade-in">
            <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-secondary/50 transition-all"
                >
                  {feature.icon}
                  <span className="font-medium">{feature.label}</span>
                  <span className="text-xs text-gray-500 text-center">
                    {feature.description}
                  </span>
                </Button>
              ))}
            </div>
          </Card>

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
