import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';


function Sidebar() {
  const [isSubMenuHidden, setIsSubMenuHidden] = useState(false);
  // const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  function toggleSubMenu() {
    setIsSubMenuHidden(!isSubMenuHidden);
  }

  // function toggleSidebar() {
  //   setIsSidebarHidden(!isSidebarHidden);
  // }

  return (
   
    <div className='p-[1rem]'>
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0  duration-1000 p-2 w-[300px] text-center bg-white shadow h-screen`}>
   {/* <div className={`sidebar fixed top-0 bottom-0 lg:left-0 left-${isSidebarHidden ? '-300' : '0'} duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen`}> */}
      <div className="text-gray-800 text-xl p-4">
        <div className="p-2.5 mt-1 flex items-center rounded-md ">
         <IonIcon name='planet-outline'/>
          <h1 className="text-[1rem]  ml-3 text-xl text_gradient1 font-bold">Admin_Miu</h1>
          <IonIcon name='list-outline' className="bi bi-x ml-20 cursor-pointer lg:hidden"/>
          {/* <IonIcon name='list-outline' className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={toggleSidebar}/> */}

        </div>
        <hr className="my-2 text-gray-800" />

        <div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  background">
            <IonIcon name='search-outline'/>
            <input className="text-[1rem] ml-4 w-full bg-transparent focus:outline-none placeholder:text-white " placeholder="Search" />
          </div>

          <Link to={'/'} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
          <IonIcon name='home-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Tổng quan</span>
          </Link>

          <Link to={'/category'} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='book-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Danh mục</span>
          </Link>
          <Link to={'/product'} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='bookmark-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Sản phẩm</span>
          </Link>
          <Link to={'/member'} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='person-add-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Khách hàng</span>
          </Link>
          
          <Link to={'/bill'} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='checkmark-circle-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Đơn hàng</span>
          </Link>
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='compass-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Bình luận</span>
          </div>
         
          <hr className="my-4 text-gray-600" />
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='ellipsis-vertical-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Liên hệ</span>
          </div>

          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='chatbox-ellipses-outline'/>

            <div className="flex justify-between w-full items-center" onClick={toggleSubMenu}>
              <span className="text-[1rem] ml-4 text-gray-800">Chatbox</span>
              <span className={`text-sm ${isSubMenuHidden ? '' : 'rotate-180'}`} id="arrow">
                <IonIcon name='chevron-down-outline'/>

              </span>
            </div>
          </div>
          <div className={`leading-7 text-left text-base font-thin mt-2 w-4/5 mx-auto ${isSubMenuHidden ? 'hidden' : ''}`} id="submenu">
            <h1 className="cursor-pointer p-2 hover:bg-blue-100 rounded-md mt-1">Messenger</h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-100 rounded-md mt-1">Personal</h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-100 rounded-md mt-1">Friends</h1>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-200">
            <IonIcon name='log-out-outline'/>

            <span className="text-[1rem] ml-4 text-gray-800">Đăng xuất</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;