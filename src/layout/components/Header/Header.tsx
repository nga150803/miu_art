import IonIcon from '@reacticons/ionicons'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky top-0 h-20  w-screen flex justify-center items-center shadow-sd-primary z-auto bg-white'>
      <div className='flex justify-between w-wd-secondary md:w-wd-tertiary items-center'>
          <Link to={'/'} className='font-logo md:text-tx-md-textLogo text_gradient text-tx-textLogo'>Miu</Link>
          <div className=' flex gap-4 text-2xl'>
            
            <Link to= ""><IonIcon name='logo-facebook' className='text-blue-500'/></Link>
            <Link to=""><IonIcon name='logo-instagram' className='text-pink-500 duration-150 hover:scale-110' /></Link>
            <Link to="">
              <IonIcon name='home' className='text-gray-600'/>
            </Link>
            
          </div>
        
      </div>      
    </div>
  )
}

export default Header