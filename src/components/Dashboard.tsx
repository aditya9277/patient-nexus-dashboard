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
  Sun,
  Pill,
  Dna,
  Laptop,
  Wallet,
  Utensils,
  Baby,
  Heart,
  TreePine,
  Dumbbell,
  Target,
  ScrollText,
  Users,
  BadgeAlert,
  Car
} from "lucide-react";
import { Button } from "./ui/button";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("metrics");

  const quickActions = [
    { icon: <BadgeAlert className="w-5 h-5" />, label: "Critical Alert: Blood Sugar High", color: "bg-red-500" },
    { icon: <Pill className="w-5 h-5" />, label: "Medication Due: Metformin", color: "bg-purple-500" },
    { icon: <Car className="w-5 h-5" />, label: "Hospital Parking: A4-123", color: "bg-blue-500" },
    { icon: <ScrollText className="w-5 h-5" />, label: "New Test Results", color: "bg-green-500" },
  ];

  const features = [
    { 
      icon: <Heart />, 
      label: "Health Hub", 
      description: "Track vitals, medications & appointments",
      notifications: 3,
      details: "3 medications due today"
    },
    { 
      icon: <Brain />, 
      label: "Mental Wellness", 
      description: "Meditation, mood tracking & therapy",
      notifications: 1,
      details: "New meditation session available"
    },
    { 
      icon: <Dumbbell />, 
      label: "Fitness Journey", 
      description: "Workouts, nutrition & progress",
      notifications: 2,
      details: "Daily workout plan ready"
    },
    { 
      icon: <Utensils />, 
      label: "Nutrition AI", 
      description: "Personalized meal plans & tracking",
      notifications: 0,
      details: "Today's meal plan generated"
    },
    { 
      icon: <Users />, 
      label: "Family Health", 
      description: "Manage family medical records",
      notifications: 1,
      details: "Sarah's vaccination due"
    },
    { 
      icon: <Wallet />, 
      label: "Insurance Hub", 
      description: "Claims, coverage & expenses",
      notifications: 2,
      details: "2 pending claims"
    },
    { 
      icon: <TreePine />, 
      label: "Lifestyle", 
      description: "Work-life balance & habits",
      notifications: 0,
      details: "Sleep quality: 85%"
    },
    { 
      icon: <Target />, 
      label: "Goals & Plans", 
      description: "Health objectives & milestones",
      notifications: 4,
      details: "4 goals need attention"
    },
    { 
      icon: <Laptop />, 
      label: "Telemedicine", 
      description: "Virtual consultations & chats",
      notifications: 1,
      details: "Follow-up in 2 days"
    },
    { 
      icon: <Dna />, 
      label: "Genomics", 
      description: "DNA insights & personalized care",
      notifications: 0,
      details: "Genetic report ready"
    }
  ];

  const todayHighlights = [
    "🎯 Achieved 8,500 steps - 85% of daily goal",
    "💧 Water intake: 1.5L/2.5L - Reminder set for 2:00 PM",
    "🥗 Lunch: Mediterranean diet - 450 calories",
    "💊 All morning medications taken",
    "🩺 Dr. Smith appointment confirmed for 2:30 PM",
    "❤️ Blood pressure trending normal this week",
    "🧘‍♂️ Complete 2 mindfulness sessions",
    "🥗 Stay under 2000mg sodium today",
    "💪 30-min strength training completed",
    "🌡️ Temperature check: 98.6°F"
  ];

  const upcomingTasks = [
    "Lab work at Quest Diagnostics - Tomorrow 9:00 AM",
    "Refill Prescription #4589 - 3 days left",
    "Annual Physical Examination - Next week",
    "Dental Cleaning - In 2 weeks",
    "Update Insurance Information - This month",
    "Schedule Eye Examination - This month",
    "Wellness Workshop - Next Tuesday"
  ];

  const hydrationStats = {
    current: 1.5,
    target: 2.5,
    nextReminder: "2:00 PM",
    streak: 5,
    history: [
      { time: "8:00 AM", amount: 0.5 },
      { time: "10:30 AM", amount: 0.5 },
      { time: "12:00 PM", amount: 0.5 }
    ]
  };

  const nutritionStats = {
    calories: {
      consumed: 1250,
      target: 2000,
      remaining: 750
    },
    meals: [
      {
        time: "8:00 AM",
        name: "Breakfast",
        items: "Oatmeal with berries, Greek yogurt",
        calories: 350,
        nutrients: "Protein: 15g, Carbs: 45g, Fats: 8g"
      },
      {
        time: "12:00 PM",
        name: "Lunch",
        items: "Mediterranean salad, whole grain bread",
        calories: 450,
        nutrients: "Protein: 20g, Carbs: 55g, Fats: 15g"
      }
    ],
    upcoming: [
      {
        time: "3:30 PM",
        name: "Snack",
        suggestion: "Apple with almond butter",
        calories: 200
      },
      {
        time: "6:30 PM",
        name: "Dinner",
        suggestion: "Grilled salmon with quinoa",
        calories: 550
      }
    ]
  };

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
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-xl font-semibold text-gray-800">Good Morning, John</h2>
                </div>
                <p className="text-gray-600 mt-1">Today's Personalized Health Journey</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                View Schedule
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Today's Highlights
                </h3>
                <ul className="space-y-2">
                  {todayHighlights.map((highlight, index) => (
                    <li key={index} className="text-sm text-gray-600">{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Upcoming Tasks
                </h3>
                <ul className="space-y-2">
                  {upcomingTasks.map((task, index) => (
                    <li key={index} className="text-sm text-gray-600">{task}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  {/* Water Intake */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Water Intake</span>
                      <span>{hydrationStats.current}L / {hydrationStats.target}L</span>
                    </div>
                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all"
                        style={{ width: `${(hydrationStats.current / hydrationStats.target) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Next reminder: {hydrationStats.nextReminder}</p>
                  </div>
                  {/* Calories */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Calories</span>
                      <span>{nutritionStats.calories.consumed} / {nutritionStats.calories.target}</span>
                    </div>
                    <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full transition-all"
                        style={{ width: `${(nutritionStats.calories.consumed / nutritionStats.calories.target) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{nutritionStats.calories.remaining} calories remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Feature Highlights */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white/90 backdrop-blur-lg border-none shadow-lg overflow-hidden">
            <h2 className="text-lg font-semibold mb-4">Life & Health Hub</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features.map((feature, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-secondary/50 transition-all group relative"
                >
                  {feature.notifications > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                      {feature.notifications}
                    </span>
                  )}
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-sm text-center">{feature.label}</span>
                  <span className="text-xs text-gray-500 text-center line-clamp-2 min-h-[2.5rem]">
                    {feature.description}
                  </span>
                  <span className="text-xs text-gray-500 text-center mt-1">{feature.details}</span>
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
