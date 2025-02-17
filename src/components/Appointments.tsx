
import { Calendar, Clock, Video, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Appointments = () => {
  const appointments = [
    {
      doctor: "Dr. Harper Jon",
      specialty: "Cardiologist",
      time: "09:00 AM",
      date: "Today",
      type: "video",
      urgent: false,
      avatar: "https://i.pravatar.cc/32?img=1",
    },
    {
      doctor: "Dr. Sarah Kim",
      specialty: "Neurologist",
      time: "02:30 PM",
      date: "Tomorrow",
      type: "in-person",
      urgent: true,
      avatar: "https://i.pravatar.cc/32?img=2",
    },
    {
      doctor: "Dr. James Wilson",
      specialty: "General Practice",
      time: "11:00 AM",
      date: "Aug 25",
      type: "phone",
      urgent: false,
      avatar: "https://i.pravatar.cc/32?img=3",
    },
  ];

  return (
    <div className="h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="text-primary" />
          <h2 className="text-lg font-semibold">Medical Appointments</h2>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          Schedule New
        </Button>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className={`relative p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
              appointment.urgent ? 'bg-red-50 border border-red-100' : 'bg-secondary/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={appointment.avatar}
                alt={appointment.doctor}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-semibold flex items-center gap-2">
                  {appointment.doctor}
                  {appointment.urgent && (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
                <div className="text-sm text-gray-500">{appointment.specialty}</div>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {appointment.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {appointment.date}
                  </div>
                  <div className="flex items-center gap-1">
                    {appointment.type === "video" ? (
                      <Video className="w-3 h-3" />
                    ) : appointment.type === "phone" ? (
                      <Phone className="w-3 h-3" />
                    ) : (
                      <Calendar className="w-3 h-3" />
                    )}
                    {appointment.type}
                  </div>
                </div>
              </div>
              <Button 
                className={`px-4 py-2 text-sm rounded-full ${
                  appointment.urgent ? 'bg-red-500' : 'bg-primary'
                } text-white`}
              >
                Join
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
