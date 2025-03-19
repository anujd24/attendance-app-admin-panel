"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, UserCheck, User, FileText, Settings, LogOut, Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const sidebarItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: UserCheck, label: "Attendance Marker", path: "/attendance" },
  { icon: User, label: "Student Information", path: "/student-information" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Profile", path: "/profile" },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    // Implement logout logic here
    router.push("/")
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-screen bg-gray-800 text-white z-50"
        animate={{ width: isOpen ? "240px" : "60px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <button className="p-3 hover:bg-gray-700 w-full text-left" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
        {sidebarItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <motion.div
              className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={24} />
              {isOpen && (
                <motion.span
                  className="ml-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          </Link>
        ))}
        <motion.div
          className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
        >
          <LogOut size={24} />
          {isOpen && (
            <motion.span className="ml-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              Logout
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-4 hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar

