import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import ToolBar from '../ToolBar/ToolBar'

 export interface MainLayoutProps{
    children:React.ReactNode
}


const MainLayout = (props: MainLayoutProps) => {

  const [checkWidth, setCheckWidth] = useState<boolean>(false)


  const handleResize = () => {
    if(window.innerWidth < 768){
      setCheckWidth(true)
     
    }else{
      setCheckWidth(false)

    }
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return()=> window.removeEventListener('resize', handleResize)
},[])
  return (
    <div className='main-layout flex flex-col gap-8 overflow-x-hidden'>
        <Header />
        {checkWidth ? <Navigation />:<ToolBar />}
        <main className=''>
          <div className=' m-auto w-wd-secondary md:w-wd-tertiary'>{props.children}</div>
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout