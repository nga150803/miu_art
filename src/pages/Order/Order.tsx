import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import React from "react"
import { getAllBill } from "../../redux/reducers/bill"
import {motion} from 'framer-motion'
import IonIcon from "@reacticons/ionicons"
import http from "../../routes/util/http"
import { toast } from "react-toastify"

const Order = () => {
  const dispatch = useAppDispatch()
  const listBill = useAppSelector(state => state.bill.bill)
  const [dragX, setDragX] = React.useState(0);
  const dragThreshold = 500;


  React.useEffect(() => {
    dispatch(getAllBill())
  }, [dispatch])

  function formatDate(date: any) {
    const dateObj = new Date(date);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }


  const handlRemove = async (_id: string) => {
    await http.delete(`/bill/${_id}`)

  }
  
  return (
    <div className='min-h-screen px-4 py-6 '>
      <h1 className='text-[1.4rem]  uppercase font-bold'>Danh sách hóa đơn</h1>
      <div className='mt-6 flex gap-4'>
        <div className='flex-1 flex-col flex gap-4'>
          <div className='flex gap-2 rounded-lg bg-gray-100 border border-gray-300'>
            <div className="flex-1 text-center font-bold text-gray-700 py-4">#</div>
            <div className="flex-[2] font-bold text-gray-700 text-center py-4">Ngày</div>
            <div className="flex-[2] font-bold text-gray-700 text-center py-4">Số điện thoại</div>
            <div className="flex-[2] font-bold text-gray-700 text-center py-4">Phương thức</div>
            <div className="flex-[2] font-bold text-gray-700 text-center py-4">Trạng thái</div>
            <div className="flex-[2] font-bold text-gray-700 text-center py-4">Tổng tiền</div>
            <div className="flex-1 text-center py-4"></div>
          </div>
         {
          listBill.map((item: any, index) => (
            <motion.div key={index} className='flex gap-2 rounded-lg cursor-pointer bg-gray-100  '
            drag='x'
            onDrag={(event, info) => setDragX(info.offset.x)}
            onDragEnd={() => {
              if (Math.abs(dragX) > dragThreshold) {
                handlRemove(item._id)
              }
              setDragX(0);
            }}
            whileDrag={{ left: '-20%', right: '20%' }}
         >
           <div className="flex-1 flex items-center justify-center text-gray-700 py-4">{index + 1}</div>
           <div className="flex-[2] text-gray-700 flex items-center justify-center py-4 flex items-center justify-center">{formatDate(item.createdAt)}</div>
           <div className="flex-[2] text-gray-700 flex items-center justify-center py-4">{item.phoneNumber}</div>
           <div className="flex-[2] text-gray-700 flex items-center justify-center py-4">{
            item.payment === 1 ? <p>Thanh toán online</p> : <p>Nhận trực tiếp</p>
           }</div>
           <div className="flex-[2] text-gray-700 flex items-center justify-center py-4">{item.status}</div>
           <div className="flex-[2] text-gray-700 flex items-center justify-center py-4">{item.total}</div>
           <div className="flex-1 flex items-center justify-center py-4">
            <motion.button className="py-4 px-4 flex justify-center items-center rounded-lg text-white bg-blue-500"
            whileTap={{scale: .9}}
            >
              <IonIcon name="ellipsis-vertical" />
            </motion.button>
           </div>
         </motion.div>
          ))
         }
        </div>
        <div className='flex-1 max-w-[22rem] '></div>
      </div>
    </div>
  )
}

export default Order