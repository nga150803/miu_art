import IonIcon from "@reacticons/ionicons"
import { useState } from "react"
import { Link } from "react-router-dom"

const ToolBar = () => {
  const [isLanguage, setIsLanguage]= useState<string>('vi')
  const [isKindOfArt, setIsKindOfArt]= useState<string>('')
  const[isSizeImageWidth, setIsSizeImageWidth]= useState<number>(0)
  const[isSizeImageHeight, setIsSizeImageHeight]= useState<number>(0)


  return (

    <div  className=' m-auto  w-4/5 grid grid-flow-col md:flex justify-between items-center'>
      
      <div className="">
        <input type="text" placeholder="Tìm kiếm ảnh"  className=" bg-gray-200  text-gray-700 px-4 py-2 rounded-full outline-primary"/>
      </div>
      <Link to={'/video'}>
        <button  className="py-2 px-6 rounded-full bg-gray-100 hover:bg-gray-200">
          Video
        </button>
      </Link>
      {/* <div className="flex gap-4">
        <button className="py-2 px-6 rounded-full bg-gray-100 hover:bg-gray-200">
          {isKindOfArt === '' ? 'Thể loại' : isKindOfArt}
        </button>
        <button className="py-2 px-6 rounded-full bg-gray-100 hover:bg-gray-200">{isSizeImageWidth === 0 && isSizeImageHeight ===0 ? 'Kích thước':`${isSizeImageWidth} x ${isSizeImageHeight}`}</button>
        <button className="py-2 px-6 rounded-full bg-gray-100 hover:bg-gray-200">
          {isLanguage}
        </button>
      </div> */}

    </div>
  )
}

export default ToolBar