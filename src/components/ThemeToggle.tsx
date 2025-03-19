import type React from "react"
import { Sun, Moon, Laptop } from "lucide-react"

interface ThemeToggleProps {
  currentTheme: string
  onToggle: (theme: string) => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onToggle }) => {
  return (
    <div className="fixed top-4 right-4 flex space-x-2">
      <button
        onClick={() => onToggle("light")}
        className={`p-2 rounded-full ${currentTheme === "light" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
      >
        <Sun size={24} />
      </button>
      <button
        onClick={() => onToggle("dark")}
        className={`p-2 rounded-full ${currentTheme === "dark" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
      >
        <Moon size={24} />
      </button>
      <button
        onClick={() => onToggle("system")}
        className={`p-2 rounded-full ${currentTheme === "system" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
      >
        <Laptop size={24} />
      </button>
    </div>
  )
}

export default ThemeToggle

