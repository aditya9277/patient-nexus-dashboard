
import { HeartPulse } from "lucide-react";

export const BodySystems = () => {
  const systems = [
    {
      name: "Heart",
      status: "Healthy",
      icon: "❤️",
      details: "Normal rhythm, good function",
    },
    {
      name: "Lungs",
      status: "Good",
      icon: "🫁",
      details: "Clear breathing, normal capacity",
    },
    {
      name: "Brain",
      status: "Optimal",
      icon: "🧠",
      details: "Normal cognitive function",
    },
    {
      name: "Liver",
      status: "Normal",
      icon: "🫀",
      details: "Functioning properly",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <HeartPulse className="text-primary" />
        <h2 className="text-lg font-semibold">Body Systems</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systems.map((system, index) => (
          <div
            key={index}
            className="p-6 bg-secondary/50 rounded-lg transition-transform hover:scale-[1.02]"
          >
            <div className="text-4xl mb-4">{system.icon}</div>
            <div className="font-semibold mb-2">{system.name}</div>
            <div className="text-sm text-gray-500">{system.status}</div>
            <div className="text-xs text-gray-400 mt-2">{system.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
