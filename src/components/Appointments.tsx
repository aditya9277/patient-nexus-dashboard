
import { Calendar } from "lucide-react";

export const Appointments = () => {
  const appointments = [
    {
      doctor: "Dr. Harper Jon",
      time: "09:00 AM",
      date: "Today",
      avatar: "https://i.pravatar.cc/32?img=1",
    },
    {
      doctor: "Dr. Sarah Kim",
      time: "02:30 PM",
      date: "Tomorrow",
      avatar: "https://i.pravatar.cc/32?img=2",
    },
    {
      doctor: "Dr. James Wilson",
      time: "11:00 AM",
      date: "Aug 25",
      avatar: "https://i.pravatar.cc/32?img=3",
    },
  ];

  return (
    <div className="h-[400px]">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="text-primary" />
        <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg transition-transform hover:scale-[1.02]"
          >
            <img
              src={appointment.avatar}
              alt={appointment.doctor}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="font-semibold">{appointment.doctor}</div>
              <div className="text-sm text-gray-500">
                {appointment.date} at {appointment.time}
              </div>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-full text-sm">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
