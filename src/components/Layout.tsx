import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../pages/home/sections/navbar'

export default function Layout() {
  const [theme, setTheme] = useState<Theme>({
    backgroundColor: "#050505",
    color: "#E1E1E1"
  })

  // to scroll to the top of the screen when navigation between pages
  const path = useLocation().pathname;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [path])

  // theme colors
  const changeTheme = () => {
    setTheme({
      backgroundColor: theme.backgroundColor == "#050505" ? "#000000" : "#050505",
      color: theme.color == "#E1E1E1" ? "#FFFFFF" : "#E1E1E1"
    })
  }
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}
      className={`${theme.backgroundColor == "#050505" ? '' : 'invert'}`}
    >

      <Navbar
        changeTheme={changeTheme}
      />

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  )
}