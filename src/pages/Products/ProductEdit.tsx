import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getProductById, updateProduct } from "../../redux/reducers/products.reducer";
import { Product } from "../../types/products";
import { useNavigate, useParams } from "react-router-dom";

interface Category {
  _id: string;
  name: string;
 }


 

const ProductEdit = () => {

  const [isCategory, setIsCategory] = useState<Category[]>([]);
  const {_id} = useParams<string>()
  const navigate = useNavigate()


  const dispatch = useAppDispatch()
  const infoProduct: any = useAppSelector(state => state.product)


  const [name, setName] = useState(infoProduct.name)
  const [category, setCategory] = useState(infoProduct.category)
  const [price, setPrice] = useState(infoProduct.price)
  const [description, setDescription] = useState(infoProduct.description)
  const [descriptionDetail, setDescriptionDetail] = useState(infoProduct.description_detail
    )

  
  
  
 
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
    if(_id){
      dispatch(getProductById(_id));
    }
  }, []);



  const handleFormSubmit = (event:any) => {
    event.preventDefault();

    const data = {
      name,
      description,
      description_detail: descriptionDetail,
      price,
      _id
    }

    dispatch(updateProduct(data)) 
    navigate(-1) 
  };
  
  return (
    
      <div className='bg-white w-[80%]  mx-auto mt-[3rem] p-8 rounded-2xl' >
          <h1 className='text-center py-[1.5rem] text-[1.7rem] font-bold uppercase text_gradient1'>Sửa sản phẩm</h1>

        <form className=' 'onSubmit={handleFormSubmit}>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
              <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Tên sản phẩm</label>
              <input
                className='mb-3 block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:bg-blue-50 focus:border-blue-400 focus:outline-none'
                id='grid-first-name'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
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
                      <option key={category._id} value={category.name}>{category.name}</option> 
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
          className='mb-3 block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:bg-blue-50 focus:border-blue-400 focus:outline-none'
          type='number'
          placeholder='Giá'
          value={price}
                onChange={e => setPrice(e.target.value)}

        />
            </div>
            <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
            <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Giá sản phẩm sale</label>
              <input
                className='mb-3 block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:bg-blue-50 focus:border-blue-400 focus:outline-none'
                type='number'
                placeholder='Giá sale'

              />
            </div>
            
          </div>
          <div className='mb-4'>
          <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Hình ảnh</label>
          <input type="file" placeholder='Tải hình ảnh lên tại đây' className='' />
            
          </div>
          <div className='mb-2 '>
          <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Mô tả</label>
              <textarea name="" id="" cols={150} rows={2} className='border border-gray-300 rounded-lg outline-none p-6'
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder='Mô tả sản phẩm...' ></textarea>

          </div>
          <div className='mb-2 '>
          <label className='mb-2 block text-[1rem] font-bold  tracking-wide text-gray-700'>Mô tả chi tiết </label>
              <textarea name="" id=""
              value={descriptionDetail}
              onChange={e => setDescriptionDetail(e.target.value)}
              cols={150} rows={3} className='border border-gray-300 rounded-lg outline-none p-6' placeholder='Mô tả chi tiết sản phẩm...' ></textarea>

          </div>
          <div className='flex justify-center items-center mt-8 mb-2'>
            <button type="submit" className='background py-4 px-6 text-white text-[1rem] font-semibold rounded-xl'>Sửa sản phẩm</button>
          </div>
          
        </form>
      </div>
  )
}

export default ProductEdit
