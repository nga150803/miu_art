import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Sidebar from '../SideBar/SideBar'
import NavBar from '../Navbar/NavBar'

export interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const [checkWidth, setCheckWidth] = useState<boolean>(false)

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setCheckWidth(true)
    } else {
      setCheckWidth(false)
    }
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className='flex  justify-center gap-4 bg-[#F4F7FE] '>
      <div className='w-[15%]'>
        <Sidebar />
      </div>
      <div className='w-[82%]'>
        <main className='mx-auto pt-6 px-4 flex-1 py-4'>
          <NavBar />
          {props.children}
        </main>
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}

export default MainLayout
