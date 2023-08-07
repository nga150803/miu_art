import React, {useState, useEffect} from 'react'
import Card from '../../component/share/Card/Card'
import axios, { AxiosError } from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
interface Category {
  _id: string;
  name: string;
 }

const ProductAdd = () => {
  const navigate = useNavigate()
  const [isCategory, setIsCategory] = useState<Category[]>([]);

  const handleGetCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/category`);
      setIsCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const productData: Record<string, any> = {};

    formData.forEach((value, key) => {
      if (key === 'image') {
        // Xử lý hình ảnh và lưu URL vào productData
        const imageFile = value as File;
        const imageUrl = URL.createObjectURL(imageFile);
        productData[key] = imageUrl;
      } else {
        productData[key] = value;
      }
    });

    try {
      const response = await axios.post(
        'http://localhost:8080/api/products/add',
        productData
      );
      toast.success('Thêm sản phẩm thành công');
      navigate(-1);
      alert(' Thêm sản phẩm thành công ❤')


      console.log('Sản phẩm đã được thêm:', response.data);
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
    }
  };

  return (
    
      <div className='bg-white w-[80%]  mx-auto mt-[3rem] p-8 rounded-2xl' >
          <h1 className='text-center py-[1.5rem] text-[1.7rem] font-bold uppercase text_gradient1'>Thêm sản phẩm</h1>

        <form className=' ' onSubmit={handleAddProduct}>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
              <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Tên sản phẩm</label>
              <input
              name="name" 
                className='mb-3 block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:bg-blue-50 focus:border-blue-400 focus:outline-none'
                id='grid-first-name'
                type='text'
                placeholder='Nhập tên sản phẩm...'
              />
              
            </div>
            <div className='w-full px-3 md:w-1/2'>
            <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Danh mục sản phẩm</label>
            <div className='relative'>
                <select
                 name="category"
                  className='mb-3 block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:bg-blue-50 focus:border-blue-400 focus:outline-none'
                  id='grid-state'
                >
                {isCategory.map((category) => (
                      <option key={category._id}>{category.name}</option>
                ))}
                  
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                  <svg className='h-4 w-4 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className='-mx-3 mb-2 flex flex-wrap'>
            <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
            <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Giá sản phẩm</label>

              <input
               name="price"
                className='mb-3 block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:bg-blue-50 focus:border-blue-400 focus:outline-none'
                type='number'
                placeholder='Giá'
              />
            </div>
            <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
            <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Giá sản phẩm sale</label>
              <input
               name="price_sale"
                className='mb-3 block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:bg-blue-50 focus:border-blue-400 focus:outline-none'
                type='number'
                placeholder='Giá sale'
              />
            </div>
            
          </div>
          <div className='mb-4'>
          <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Hình ảnh</label>
          <input  name="image" type="file" placeholder='Tải hình ảnh lên tại đây' className='' />
            
          </div>
          {/* <div className='mb-4'>
          <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Lượt xem</label>
          <input  name="Views" type="text" placeholder='Lượt xem sản phẩm' className='' />
          </div> */}
          <div className='mb-2 '>
          <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Mô tả</label>
              <textarea  name="description" id="" cols={150} rows={2} className='border border-gray-300 rounded-lg outline-none p-6' placeholder='Mô tả sản phẩm...'></textarea>

          </div>
          <div className='mb-2 '>
          <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Mô tả chi tiết </label>
              <textarea name="description_detail" id="" cols={150} rows={3} className='border border-gray-300 rounded-lg outline-none p-6' placeholder='Mô tả chi tiết sản phẩm...'></textarea>

          </div>
          <div className='flex justify-center items-center mt-8 mb-2'>
            <button type="submit" className='background py-4 px-6 text-white text-[1rem] font-semibold rounded-xl'>Thêm sản phẩm</button>
          </div>
          
        </form>
      </div>
  )
}

export default ProductAdd
