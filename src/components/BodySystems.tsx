
import { HeartPulse, Brain, Lungs, Activity, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BodySystems = () => {
  const systems = [
    {
      name: "Cardiovascular",
      status: "Healthy",
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      details: "BP: 120/80, HR: 72 bpm",
      metrics: {
        risk: "Low",
        nextCheck: "3 months",
        trend: "Stable"
      }
    },
    {
      name: "Respiratory",
      status: "Good",
      icon: <Lungs className="w-8 h-8 text-primary" />,
      details: "O2 Sat: 98%, RR: 16/min",
      metrics: {
        risk: "Low",
        nextCheck: "6 months",
        trend: "Improving"
      }
    },
    {
      name: "Neurological",
      status: "Attention",
      icon: <Brain className="w-8 h-8 text-yellow-500" />,
      details: "Mild headaches reported",
      metrics: {
        risk: "Moderate",
        nextCheck: "2 weeks",
        trend: "Monitor"
      },
      alert: true
    },
    {
      name: "Metabolic",
      status: "Normal",
      icon: <Activity className="w-8 h-8 text-primary" />,
      details: "Glucose: 95 mg/dL",
      metrics: {
        risk: "Low",
        nextCheck: "1 month",
        trend: "Stable"
      }
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <HeartPulse className="text-primary" />
          <h2 className="text-lg font-semibold">Body Systems Monitor</h2>
        </div>
        <Button variant="outline" className="text-sm">
          View Full Health Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systems.map((system, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
              system.alert 
                ? 'bg-yellow-50 border border-yellow-200' 
                : 'bg-secondary/50'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              {system.icon}
              {system.alert && (
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
              )}
            </div>
            <div className="font-semibold mb-2 flex items-center gap-2">
              {system.name}
            </div>
            <div className="text-sm text-gray-500">{system.status}</div>
            <div className="text-xs text-gray-400 mt-2">{system.details}</div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="text-gray-400">Risk Level</div>
                  <div className="font-medium text-primary">{system.metrics.risk}</div>
                </div>
                <div>
                  <div className="text-gray-400">Next Check</div>
                  <div className="font-medium text-primary">{system.metrics.nextCheck}</div>
                </div>
                <div>
                  <div className="text-gray-400">Trend</div>
                  <div className="font-medium text-primary">{system.metrics.trend}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
