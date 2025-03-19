"use client"

import { useState } from "react"
import { Bar, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)

const StudentInformation = () => {
  const [course, setCourse] = useState("")
  const [branch, setBranch] = useState("")
  const [year, setYear] = useState("")
  const [section, setSection] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [studentInfo, setStudentInfo] = useState<{ name: string; rollNumber?: string, contactNumber: string, parentContactNumber: string, currentAttendance: number, weeklyAttendance: number[], semesterAttendance: number[],   } | null>(null);


  const handleSearch = () => {
    // Implement search logic here
    // For demonstration, we'll set some dummy data
    setStudentInfo({
      name: "John Doe",
      rollNumber: "001",
      contactNumber: "1234567890",
      parentContactNumber: "0987654321",
      currentAttendance: 80,
      weeklyAttendance: [75, 80, 85, 90, 80, 85, 75],
      semesterAttendance: [85, 80, 75, 90],
    })
  }

  const handleDownload = (format: "csv" | "pdf") => {
    // Implement download logic here
  }

  const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Attendance",
        data: studentInfo?.weeklyAttendance || [],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  }

  const semesterData = {
    labels: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
    datasets: [
      {
        data: studentInfo?.semesterAttendance || [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    ],
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 mt-4 text-black">Student Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="px-3 border rounded bg-adYellow hover:border-amber-500 " 
        >
          <option value="">Select Course</option>
          <option value="btech" >B.Tech</option>
          <option value="bba">BBA</option>
          <option value="mba">MBA</option>
        </select>
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="px-3 border rounded bg-adSky hover:border-sky-500"
        >
          <option value="">Select Branch</option>
          <option value="cse">CSE</option>
          <option value="it">IT</option>
          <option value="ece">ECE</option>
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2  border rounded bg-adYellow hover:border-amber-500"
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        <select
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="px-3 border rounded bg-adSky hover:border-sky-500"
        >
          <option value="">Select Section</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
        <div className="flex col-span-2">
          <input
            type="text"
            placeholder="Search student by name or roll number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-l w-full bg-adYellow hover:border-amber-500 text-lime-950"
          />
          <button
            onClick={handleSearch}
            className="bg-sky-600 text-white px-4 rounded-r hover:bg-sky-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
      {studentInfo ? (
        <div className=" bg-adPurple hover:bg-purple-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{studentInfo.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <p>
              <strong>Roll Number:</strong> {studentInfo.rollNumber}
            </p>
            <p>
              <strong>Contact Number:</strong> {studentInfo.contactNumber}
            </p>
            <p>
              <strong>Parent's Contact Number:</strong> {studentInfo.parentContactNumber}
            </p>
            <p>
              <strong>Current Attendance:</strong> {studentInfo.currentAttendance}%
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Weekly Attendance</h3>
              <Bar data={weeklyData} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Semester-wise Attendance</h3>
              <Pie data={semesterData} />
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => handleDownload("csv")}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              Download CSV
            </button>
            <button
              onClick={() => handleDownload("pdf")}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300 shadow-lg"
            >
              Download PDF
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No student information found. Please search for a student.
        </p>
      )}
    </div>
  )
}

export default StudentInformation

