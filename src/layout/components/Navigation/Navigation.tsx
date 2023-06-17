import IonIcon from '@reacticons/ionicons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Navigation = () => {
  const [selectedIcon, setSelectedIcon]= useState<string>('home')

  const handleIconClick = (iconName:string)=>{
    setSelectedIcon(iconName)
  }
  return (
    <div className='fixed bottom-0 w-screen py-4 z-50'>
      <div className='m-auto flex w-4/5 translate-y-1 items-center justify-between text-2xl bg-pink-200 rounded-3xl p-4 text-gray-600'>
        <Link to='' onClick={()=> handleIconClick('search')}>
          <IonIcon name='search'  className={selectedIcon ==='search' ? ' -translate-y-2 scale-110 duration-300 text-red-300' : 'text-gray-500'} />
        </Link>
        <Link to=''onClick={()=> handleIconClick('home')}>
          <IonIcon name='home'  className={selectedIcon ==='home' ? ' -translate-y-2 scale-110 duration-300 text-red-300' : 'text-gray-500'} />
        </Link>
        <Link to='' onClick={()=> handleIconClick('settings')}>
          <IonIcon name='settings'  className={selectedIcon ==='settings' ? ' -translate-y-2 scale-110 duration-300 text-red-300' : 'text-gray-500'} />
        </Link>
        <Link to='' onClick={()=> handleIconClick('notifications')}>
          <IonIcon name='notifications'  className={selectedIcon ==='notifications' ? ' -translate-y-2 scale-110 duration-300 text-red-300' : 'text-gray-500'} />
        </Link>
        <Link to='' onClick={()=> handleIconClick('person')}>
          <IonIcon name='person'  className={selectedIcon ==='person' ? ' -translate-y-2 scale-110 duration-300 text-red-300' : 'text-gray-500'} />
        </Link>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Navigation
