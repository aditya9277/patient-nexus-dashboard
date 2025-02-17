
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
  Settings,
  LucideIcon,
  Video,
  Dna,
  PieChart,
  Share2
} from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    { icon: <Video />, label: "Telemedicine", description: "Virtual consultations" },
    { icon: <Dna />, label: "Genomic Analysis", description: "Personalized medicine insights" },
    { icon: <PieChart />, label: "Health Analytics", description: "Predictive health trends" },
    { icon: <Share2 />, label: "Care Network", description: "Connected healthcare ecosystem" }
  ];

  const tabs = [
    { id: "metrics", icon: Activity, label: "Metrics" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "chat", icon: MessageCircle, label: "Chat" },
    { id: "health", icon: HeartPulse, label: "Health" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background p-4 md:p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 bg-white/80 backdrop-blur-lg rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">HealthBot</h1>
            <div className="flex items-center gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`${action.color} text-white hover:opacity-90 truncate max-w-[200px]`}
                  size="sm"
                >
                  {action.icon}
                  <span className="ml-2 hidden md:inline whitespace-nowrap">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">EN</span>
            </Button>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
              <UserRound className="w-5 h-5 text-primary" />
              <span className="hidden md:inline text-sm font-medium">John Doe</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Highlights */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Quick Access
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-secondary/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    {feature.icon}
                    <span className="font-medium text-sm mt-2">{feature.label}</span>
                    <span className="text-xs text-gray-500 text-center line-clamp-2">
                      {feature.description}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-1 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <ChatBot />
          </Card>

          <Card className="col-span-1 md:col-span-2 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <HealthMetrics />
          </Card>

          <Card className="p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <Appointments />
          </Card>

          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <BodySystems />
          </Card>
        </div>

        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl border border-gray-100 z-50">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex items-center gap-4 bg-transparent">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg scale-110"
                      : "text-gray-500 hover:bg-secondary hover:text-primary"
                  }`}
                >
                  <tab.icon size={24} />
                  <span className="sr-only">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {/* TabsContent components would go here if needed */}
          </Tabs>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
