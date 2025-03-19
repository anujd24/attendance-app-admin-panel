"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Dynamically import Calendar to prevent SSR issues
const Calendar = dynamic(() => import("react-date-range").then((mod) => mod.Calendar), { ssr: false });

const AttendanceMarker = () => {
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState(new Date()); // Ensuring a default date value
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", rollNumber: "001", attendance: 80, present: false },
    { id: 2, name: "Jane Smith", rollNumber: "002", attendance: 75, present: false },
    { id: 3, name: "Bob Johnson", rollNumber: "003", attendance: 50, present: false },
  ]);

  useEffect(() => {
    // Ensuring the code only runs on the client side
  }, []);

  const handleSearch = () => {
    // Implement search logic here
  };

  const handleAttendance = (id: number, isPresent: boolean) => {
    setStudents(students.map((student) => (student.id === id ? { ...student, present: isPresent } : student)));
  };

  const handleSave = () => {
    // Implement save logic here
  };

  const handleUpdate = () => {
    // Implement update logic here
  };

  const handleDownload = (format: "csv" | "pdf") => {
    // Implement download logic here
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Attendance Marker</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select value={course} onChange={(e) => setCourse(e.target.value)} className="p-2 border rounded bg-adYellow hover:border-amber-500">
          <option value="">Select Course</option>
          <option value="btech">B.Tech</option>
          <option value="bba">BBA</option>
          <option value="mba">MBA</option>
        </select>
        <select value={branch} onChange={(e) => setBranch(e.target.value)} className="p-2 border rounded bg-adSky hover:border-sky-500">
          <option value="">Select Branch</option>
          <option value="cse">CSE</option>
          <option value="it">IT</option>
          <option value="ece">ECE</option>
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)} className="p-2 border rounded bg-adYellow hover:border-amber-500">
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        <select value={section} onChange={(e) => setSection(e.target.value)} className="p-2 border rounded bg-adSky hover:border-sky-500">
          <option value="">Select Section</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="p-2 border rounded bg-adYellow hover:border-amber-500">
          <option value="">Select Subject</option>
          <option value="math">Mathematics</option>
          <option value="physics">Physics</option>
          <option value="computer">Computer Science</option>
        </select>
        <div className="flex">
          <input
            type="text"
            placeholder="Search student"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-l w-full bg-adSky hover:border-sky-500"
          />
          <button onClick={handleSearch} className="bg-sky-600 text-white px-4 rounded-r hover:bg-sky-700 transition duration-300">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Calendar date={date} onChange={(newDate) => setDate(newDate || new Date())} />
        </div>
        <div className="md:w-2/3">
          <table className="w-full bg-purple-200 hover:bg-adPurple shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-adSky">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Roll Number</th>
                <th className="p-3 text-left">Attendance %</th>
                <th className="p-3 text-left">Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className={student.attendance < 55 ? "*:" : ""}>
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.rollNumber}</td>
                  <td className="p-3">{student.attendance}%</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleAttendance(student.id, true)}
                      className={`px-3 py-1 rounded mr-2 ${student.present ? "bg-green-500 text-white" : "bg-green-200 dark:bg-green-600"}`}
                    >
                      Present
                    </button>
                    <button
                      onClick={() => handleAttendance(student.id, false)}
                      className={`px-3 py-1 rounded ${!student.present ? "bg-red-500 text-white" : "bg-green-200 dark:bg-green-600"}`}
                    >
                      Absent
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600 transition duration-300 shadow-lg">
            Save Attendance
          </button>
          <button onClick={handleUpdate} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 shadow-lg">
            Update Attendance
          </button>
        </div>
        <div>
          <button onClick={() => handleDownload("csv")} className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600 transition duration-300 shadow-lg">
            Download CSV
          </button>
          <button onClick={() => handleDownload("pdf")} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300 shadow-lg">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceMarker;
