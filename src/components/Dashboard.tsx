
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
  UserRound,
  Bell,
  Sun
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
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] to-[#D3E4FD] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 bg-white/90 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Medisphere
              </h1>
              <p className="text-sm text-gray-600">Welcome back, John!</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`${action.color} text-white hover:opacity-90 shadow-sm`}
                  size="sm"
                >
                  {action.icon}
                  <span className="ml-2 hidden md:inline truncate max-w-[100px]">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="outline" className="gap-2">
              <Globe className="w-4 h-4" />
              EN
            </Button>
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm p-2 px-4 rounded-full">
              <UserRound className="w-5 h-5 text-primary" />
              <div className="hidden md:block">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-gray-500 block">Premium Plan</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Greeting Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-xl font-semibold text-gray-800">Good Morning, John</h2>
                </div>
                <p className="text-gray-600 mt-1">Here's your health summary for today</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                View Schedule
              </Button>
            </div>
          </Card>

          {/* Feature Highlights */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg overflow-hidden">
            <h2 className="text-lg font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-secondary/50 transition-all group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-sm text-center">{feature.label}</span>
                  <span className="text-xs text-gray-500 text-center line-clamp-2 min-h-[2.5rem]">
                    {feature.description}
                  </span>
                </Button>
              ))}
            </div>
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-1 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg overflow-hidden">
            <div className="h-full overflow-y-auto">
              <ChatBot />
            </div>
          </Card>

          <Card className="col-span-1 md:col-span-2 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg overflow-hidden">
            <div className="h-full overflow-y-auto">
              <HealthMetrics />
            </div>
          </Card>

          <Card className="p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg overflow-hidden">
            <div className="h-full overflow-y-auto">
              <Appointments />
            </div>
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg overflow-hidden">
            <div className="h-full overflow-y-auto">
              <BodySystems />
            </div>
          </Card>
        </div>

        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg rounded-full px-6 py-4 shadow-lg z-50">
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
