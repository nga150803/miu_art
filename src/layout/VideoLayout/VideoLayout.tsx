import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

interface VideoLayoutProps{
    children:React.ReactNode
}

const VideoLayout = (props:VideoLayoutProps) => {

 
  return (


    <div className="flex flex-col overflow-x-hidden">
        <Header/>
        <div >  {props.children}</div>
      
        

        <Footer />
        </div>
  )
}

export default VideoLayout