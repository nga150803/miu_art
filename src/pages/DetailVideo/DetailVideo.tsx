import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VideoDataProp } from '../../types/detailVideo'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../layout/components/Header/Header'
import Footer from '../../layout/components/Footer/Footer'

const DetailVideo = () => {
    const[ isDetailVideo, setIsDetailVideo]= useState<VideoDataProp>({
        file_type: '',
        fps: 0,
        height: 0,
        id: 0,
        link: '',
    
        quality: '',
        width: 0
    })
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.pexels.com/videos/videos/${id}`,
                    {
                        headers: {

                            Authorization: 'lgyF8olfKpu21F7Vr27jJXX2kgYXr5tt8VdR3gTQTnk7dr8RVq8kZ19G'
                        }
                    }
                )
                setIsDetailVideo(response.data.video_files[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])
  return (
    <div className='flex justify-center items-center    min-h-screen md:w-[80%] md:m-auto' >

        <div className='md:h-full md:w-full  md:h-[40rem] '>
        <video src={isDetailVideo.link} controls autoPlay loop muted className='md:m-auto md:object-cover md:h-full'></video>


        </div>

    </div>
  )
}

export default DetailVideo