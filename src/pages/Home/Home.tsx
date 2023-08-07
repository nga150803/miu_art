import IonIcon from '@reacticons/ionicons'
import MiniCalendar from '../../component/MiniCalendar/MiniCalendar'
import ManagementUser from '../../component/share/ManagementUser/ManagementUser'
import PieChart from '../../component/charts/PieChart'
import {pieChartOptions, pieChartData} from '../../layout/components/variables/charts'

const Home = () => {
  return (
    <>
      <div className='mt-8'>
        {/* //total */}
        <div className='layout'>
          <div className='flex gap-[1rem] rounded-2xl bg-white p-[2rem] '>
            <div className='flex items-center justify-center '>
              <IonIcon
                name='stats-chart-outline'
                className='rounded-full bg-[#F4F7FE] p-[20px] text-[1.7rem] text-blue-600 '
              />
            </div>
            <div className='flex flex-col justify-center leading-8 '>
              <h1 className='text-[1.05rem] font-semibold text-[#848282]'>Doanh thu</h1>
              <p className='text-[1.4rem] font-semibold '>20.000.000</p>
            </div>
          </div>
          <div className='flex gap-[1rem] rounded-2xl bg-white p-[1rem] '>
            <div className='flex items-center justify-center '>
              <IonIcon
                name='save-outline'
                className='rounded-full bg-[#fff8e9] p-[20px] text-[1.7rem] text-orange-500 '
              />
            </div>
            <div className='flex flex-col justify-center leading-8 '>
              <h1 className='text-[1.05rem] font-semibold text-[#848282]'>Tổng sản phẩm</h1>
              <p className='text-[1.4rem] font-semibold '>134</p>
            </div>
          </div>
          <div className='flex gap-[1rem] rounded-2xl bg-white p-[1rem] '>
            <div className='flex items-center justify-center '>
              <IonIcon
                name='checkmark-circle-outline'
                className='rounded-full bg-[#ffffe2] p-[20px] text-[1.7rem] text-yellow-500 '
              />
            </div>
            <div className='flex flex-col justify-center leading-8 '>
              <h1 className='text-[1.05rem] font-semibold text-[#848282]'>Tổng đơn hàng</h1>
              <p className='text-[1.4rem] font-semibold '>205</p>
            </div>
          </div>
          <div className='flex gap-[1rem] rounded-2xl bg-white p-[1rem] '>
            <div className='flex items-center justify-center '>
              <IonIcon
                name='happy-outline'
                className='rounded-full bg-[#edfff5] p-[20px] text-[1.7rem] text-green-500 '
              />
            </div>
            <div className='flex flex-col justify-center leading-8 '>
              <h1 className='text-[1.05rem] font-semibold text-[#848282]'>Tổng khách hàng</h1>
              <p className='text-[1.4rem] font-semibold '>78</p>
            </div>
          </div>
          
        </div>
        {/* ?? */}

        <div className='mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2'>
          <div className='bg-pink-50 '>
            <ManagementUser />
          </div>
          
          <div className='grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2'>
            

            <div className=''>
              <MiniCalendar />
            </div>
            <div >
              {/* <Chart /> */}
                  <PieChart options={pieChartOptions} series={pieChartData}/>              
            </div>
          </div>
       
        </div>
      </div>
    </>
  )
}

export default Home
