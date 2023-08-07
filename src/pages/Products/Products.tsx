import {  ChevronUpDownIcon } from '@heroicons/react/24/outline'
import { UserPlusIcon } from '@heroicons/react/24/solid'

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  
} from '@material-tailwind/react'
import IonIcon from '@reacticons/ionicons'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useRedux'
import { deleteProduct } from '../../redux/reducers/products.reducer'


const TABS = [
  {
    label: 'Tất cả',
    value: 'all'
  },
  {
    label: 'Online',
    value: 'monitored'
  },
  {
    label: 'Offline',
    value: 'unmonitored'
  }
]

const TABLE_HEAD = ['Hình ảnh', 'Sản phẩm', 'Giá', 'Mô tả', 'Mô tả chi tiết', 'Lượt xem', 'Danh mục', 'Thao tác']


interface Product {
  _id: string
  name: string
  image: string
  description: string
  description_detail: string
  category: 1
  price: number
  price_sale: number
  Views: number
}



const Products = () => {
  const dispatch = useAppDispatch();
  const [isProduct, setIsProduct] = useState<Product[]>([]);


  const handleGetProduct = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setIsProduct(response.data);
    } catch (error) {
      console.error(error); // Handle any errors that occur
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState('');

  // Function to show the confirmation modal
  const showDeleteConfirmation = (productId: string) => {
    setProductIdToDelete(productId);
    setShowConfirmationModal(true);
  };

  // Function to hide the confirmation modal
  const hideDeleteConfirmation = () => {
    setShowConfirmationModal(false);
    setProductIdToDelete('');
    window.location.reload()
  };



  return (
    <Card className='h-full w-full p-6 mt-[3rem]'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-8 flex items-center justify-between gap-8'>
          <div>
            <p color='blue-gray' className='text-[1.8rem] font-bold'>
              Danh sách sản phẩm
            </p>
            <p color='gray' className='mt-1 font-normal'>
              Xem thông tin về tất cả các sản phẩm
            </p>
          </div>
          <div className='flex shrink-0 flex-col gap-6 sm:flex-row'>
          
            <Link to ={'/product_add'}
              className='background flex items-center gap-2 rounded-full px-6 py-3 text-white outline-none'
              color='blue'
            >
              <UserPlusIcon strokeWidth={2} className='h-4 w-4' /> Thêm sản phẩm
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <Tabs value='all' className='w-full md:w-max'>
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} className='bg-white  '>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className='flex w-full items-center justify-center md:w-72'>
            <input
              type='text'
              placeholder='Tìm kiếm sản phẩm ...'
              className='rounded-2xl border border-solid px-6 py-2 outline-none'
            />
            <IonIcon name='search-outline' className='absolute right-10' />
          </div>
        </div>
      </CardHeader>
      <CardBody className=' px-0'>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className='border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50 cursor-pointer border-y p-4 transition-colors'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
                  >
                    {head}{' '}
                    {index !== TABLE_HEAD.length - 1 && <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isProduct.map(
              ({_id, image, name, price, price_sale, description, description_detail, category, Views }, index) => {
                const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

                const isLast = index === isProduct.length - 1
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className='flex h-[6rem] w-[6rem] items-center gap-3'>
                        <Avatar src={image} alt={name} size='sm' className='h-full w-full object-cover' />
                      </div>
                    </td>
                    <td className={classes}>
                      <p className='font-medium w-32 truncate  opacity-70'>{name}</p>
                    </td>

                    <td className={classes}>
                      <div className='flex flex-col gap-2'>
                        <p className='font-medium'>{formattedPrice}</p>

                        <p className='font-normal text-gray-400 line-through'>{price_sale || 0} đ </p>
                      </div>
                    </td>

                    <td className={classes}>
                      <p className='w-32 truncate font-normal opacity-70'>{description}</p>
                    </td>
                    <td className={classes}>
                      <p className='w-32 truncate font-normal'>{description_detail}</p>
                    </td>
                    <td className={classes}>
                      <p className='font-normal'>{Views}</p>
                    </td>
                    <td className={classes}>
                      <p className='font-normal'>{category}</p>
                    </td>
                    <td className={classes}>
                      <div className='flex justify-center items-center gap-4'>
                      <Link  to={`/product_edit/${_id}`}  className='text-[1.3rem]'>
                        <IonIcon name='create-outline' className='text-blue-500' />
                      </Link>
                      <button
      onClick={() => showDeleteConfirmation(_id)}
      className='text-[1.3rem]'
    >
      <IonIcon name='trash-outline' className='text-red-500' />
    </button>
                      </div>
                      {/* Confirmation modal */}
    {showConfirmationModal && (
      <div className='fixed inset-0 flex items-center justify-center '>
        <div className='bg-[#F4F7FE] p-12 rounded-lg'>
          <p className='mb-4 '>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
          <div className='flex justify-end'>
            <button
              onClick={() => {
                hideDeleteConfirmation();
                // Call the deleteProduct async thunk here
                dispatch(deleteProduct(productIdToDelete));
              }}
              className='mr-2 px-4 py-2 bg-red-500 text-white rounded-lg'
            >
              Xóa
            </button>
            <button
              onClick={hideDeleteConfirmation}
              className='px-4 py-2 bg-gray-500 text-white rounded-lg'
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    )}
                     
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='border-blue-gray-50 flex items-center justify-between border-t p-4'>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          Trang 1 đến 10
        </Typography>
        <div className='flex gap-2'>
          <Button className='rounded-lg outline-none ' variant='outlined' color='blue-gray' size='sm'>
            Quay lại
          </Button>
          <Button className='rounded-lg outline-none' variant='outlined' color='blue-gray' size='sm'>
            Tiếp tục
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Products
