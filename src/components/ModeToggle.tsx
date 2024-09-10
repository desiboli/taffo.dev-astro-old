import {
  LaptopIcon,
  MoonIcon,
  MoonStarIcon,
  SunDimIcon,
  SunIcon,
} from "lucide-react"
import React from "react"
import { Button } from "./ui/button"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setThemeState(theme === "theme-light" ? "dark" : "theme-light")
      }
      className="mode-toggle"
    >
      <SunIcon className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <MoonStarIcon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
