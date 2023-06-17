import axios from 'axios'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
import { listImageProps } from '../../types/listImage'
import Loading from '../../component/share/Loading/Loading'
import IonIcon from '@reacticons/ionicons'

const Home = () => {
    const [isImage, setIsImage] = useState<listImageProps[]>([])
    const [isPage, setIsPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [model, setModel] = useState<boolean>(false)
    const [ tempImg, setTempImg]= useState<string>('')

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`https://api.pexels.com/v1/curated?page=${isPage}&per_page=20`, {
                    headers: {
                        Authorization: 'lgyF8olfKpu21F7Vr27jJXX2kgYXr5tt8VdR3gTQTnk7dr8RVq8kZ19G'
                    }
                })
                setIsImage(response.data.photos)
                setIsLoading(false)
                
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [isPage])

    if (isLoading) return <Loading />
    const detailImage = (image:string)=>{
        setModel(true)
        setTempImg(image)
    }

    return (
        <div className='py-1'>
<div className={model ? 'fixed bottom-0 right-0 top-0 z-30 flex items-center justify-center bg-white'
: 'hidden'}>
    <div className=' relative md:w-full md:h-full md:h-[40rem'>
        <img src={tempImg} alt=""  className='md:m-auto md:object-cover md:h-full'/>
    </div>
    <div className='absolute right-3 top-6 bg-slate-50 rounded-[60%] p-4'>
        <IonIcon className='text-lg text-pink-600 font-bold' name='close' onClick={()=>{
            setModel(false)
        }} />
    </div>
</div>

            <div className='columns-2 gap-5 sm:gap-8 md:columns-3 lg:columns-5 [&>img:not(:first-child)]:mt-8'>
                {isImage.map((item) => {
                    return (
                        <div
                            key={item.id} 
                            
                            className=' relative mb-8 min-h-[20rem] cursor-pointer overflow-hidden rounded-lg bg-slate-200  filter duration-300 hover:brightness-75'
                        >
                            <LazyLoadImage
                                className='scale-110 '
                                src={item.src.original}
                                alt={item.alt}
                                effect='blur'
                                beforeLoad={() => setLoaded(false)}
                                afterLoad={() => setLoaded(true)}
                            />
                            {loaded && (
                                <h4 className='absolute bottom-2 left-2 font-bold text-white'>{item.photographer}</h4>
                            )}
                            <div  onClick={()=>{
                                detailImage(item.src.original)
                            }}
                             className='absolute left-0 top-0 h-full w-full'></div>
                        </div>
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

export default Home