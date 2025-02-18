"use client"

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import Image from "next/image";


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
      id: 1,
      title: "Anugoonj",
      time: "10:00 AM - 8:00 PM",
      description: "GGSIPU Fest to be held on 24th and 25th.",
    },
    {
      id: 2,
      title: "Aptitude Training",
      time: "19:00 AM - 4:30 PM",
      description: "Aptitude Training conducted by Training and Placement Cell from 10/02 to 14/02 (2025).",
    },
    {
      id: 3,
      title: "Mid Semester Exam",
      time: "10:00 AM - 11:30 AM",
      description: "Mid-Sem's from 03/02/2025.",
    },
  ];

  const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  
    return (
      <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-adSky even:border-t-adPurple"
              key={event.id}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default EventCalendar