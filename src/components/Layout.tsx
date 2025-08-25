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

  // theme colors. find a better way later
  const changeTheme = () => {
    setTheme({
      backgroundColor: theme.backgroundColor == "#050505" ? "#ffffff" : "#050505",
      color: theme.color == "#E1E1E1" ? "#000000" : "#E1E1E1"
    })
  }

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}
    >

      <Navbar
        changeTheme={changeTheme}
      />

      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  )
}