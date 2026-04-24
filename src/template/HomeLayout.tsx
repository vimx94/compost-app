import { Outlet } from '@tanstack/react-router'
import Navbar from '../components/organisms/Navbar'

export function HomeLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}