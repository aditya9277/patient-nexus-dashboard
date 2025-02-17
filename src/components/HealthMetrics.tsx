
import { Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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
      <div className="flex items-center gap-2 mb-6">
        <Activity className="text-primary" />
        <h2 className="text-lg font-semibold">Health Metrics</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Blood Pressure</div>
          <div className="text-2xl font-semibold text-primary">116/70</div>
        </div>
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Heart Rate</div>
          <div className="text-2xl font-semibold text-primary">72 bpm</div>
        </div>
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Blood Oxygen</div>
          <div className="text-2xl font-semibold text-primary">98%</div>
        </div>
        <div className="bg-secondary/50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Temperature</div>
          <div className="text-2xl font-semibold text-primary">98.6°F</div>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
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
