import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { videoProps } from '../../types/video'
import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'

const Video = () => {


    const [isListVideo, setIsListVideo] =useState<videoProps[]>([])
    const [isPage, setIsPage] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.pexels.com/v1/videos/popular/?page=${isPage}&per_page=80`,
                    {
                        headers: {
                            Authorization: 'lgyF8olfKpu21F7Vr27jJXX2kgYXr5tt8VdR3gTQTnk7dr8RVq8kZ19G'
                        }
                    }
                )
                console.log(response.data.videos)
                setIsListVideo(response.data.videos)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [isPage])

  return (
    <div className=''>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {isListVideo.map((item, index)=>{

                return (
                    <Link to={`/video/watch/${item.id}`} key={index} className='relative p-4 md:p-5 '>

                        <div className='rounded-xl h-[15rem] hover:brightness-75 relative md:overflow-hidden'  
                       
                        >
                            <img className=' rounded-xl h-full object-cover w-full ' 
                            src={item.image} alt="" />

                            <IonIcon name='play' className='absolute left-1/2 top-1/2 -translate-y-2/4 text-4xl text-white'/>
                        </div>
                        <div className=' absolute bottom-4 text-zinc-100 left-9'>
                            <h3 className='font-bold'>{item.user.name}</h3>
                        </div>
                    </Link>
                )
            })}
        </div>
        <div className='mt-8 flex justify-center gap-4 '>
                {isPage > 1 && (
                    <button className='rounded-lg bg-slate-200 px-6 py-4' onClick={() => setIsPage(isPage - 1)}>
                        {isPage - 1}
                    </button>
                )}
                <button className='text_gradient rounded-lg px-6 py-4 text-white'>{isPage}</button>
                <button className='rounded-lg bg-slate-200 px-6 py-4' onClick={() => setIsPage(isPage + 1)}>
                    {isPage + 1}
                </button>
            </div>
    </div>
  )
}

export default Video