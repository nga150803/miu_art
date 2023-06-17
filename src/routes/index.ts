import { Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import config from '../config'
import MainLayout from '../layout/components/MainLayout/MainLayout'
import Video from '../pages/Video/Video'
import VideoLayout from '../layout/VideoLayout/VideoLayout'
import DetailVideo from '../pages/DetailVideo/DetailVideo'

interface Route {
  path: string
  component: any
  layout: any
}

const publicRoutes: Route[] = [
  {
    path: config.routes.home,
    component: Home,
    layout: MainLayout
  },
  {
    path: config.routes.video,
    component: Video,
    layout: VideoLayout
  },
  {
    path: config.routes.videoDetail,
    component: DetailVideo,
    layout: VideoLayout
  }
]
const privateRoutes: Route[] = []
export { publicRoutes, privateRoutes }
