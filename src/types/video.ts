export interface videoProps {
    avg_color: string
    duration: number
    full_res: null
    height: number
    id: number
    image: string
    tags: string[]
    url: string
    user: {
        id: number
        name: string
        url: string
    }
    video_files: 
        {
            file_type: string
            fps: number
            height: number
            id: number
            link: string
            quality: string
            width: number
        }[]
    
    video_pictures: 
        {
            id: number
            nr: number
            picture: string
        }[]
    
    width: number
}