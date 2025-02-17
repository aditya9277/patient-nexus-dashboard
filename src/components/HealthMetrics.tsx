import { Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { time: "00:00", value: 120 },
  { time: "04:00", value: 115 },
  { time: "08:00", value: 130 },
  { time: "12:00", value: 125 },
  { time: "16:00", value: 118 },
  { time: "20:00", value: 122 },
];

export const HealthMetrics = () => {
  return (
    <div className="h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Activity className="text-primary" />
          <h2 className="text-lg font-semibold">Health Analytics</h2>
        </div>
        <Button variant="outline" size="sm">Export Data</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Blood Pressure</div>
          <div className="text-2xl font-semibold text-primary">116/70</div>
          <div className="text-xs text-green-500 mt-1">↓ 3% from last week</div>
        </div>
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Heart Rate</div>
          <div className="text-2xl font-semibold text-primary">72 bpm</div>
          <div className="text-xs text-blue-500 mt-1">Optimal range</div>
        </div>
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Blood Oxygen</div>
          <div className="text-2xl font-semibold text-primary">98%</div>
          <div className="text-xs text-green-500 mt-1">↑ 1% from yesterday</div>
        </div>
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Temperature</div>
          <div className="text-2xl font-semibold text-primary">98.6°F</div>
          <div className="text-xs text-blue-500 mt-1">Normal range</div>
        </div>
      </div>

      <div className="relative h-48">
        <div className="absolute top-0 left-0 text-xs text-gray-500">
          Last 24 Hours
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0066FF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
