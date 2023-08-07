import react, {useState, useEffect} from 'react';
import axios from 'axios'

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
   Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip
} from "@material-tailwind/react";


import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
 
const TABS = [
  {
    label: "Tất cả",
    value: "all",
  },
  {
    label: "Online",
    value: "monitored",
  },
  {
    label: "Offline",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Mã loại hàng", "Tên danh mục", "Thao tác"];
 interface Category {
  _id: string;
  name: string;
 }

const Category = () => {
  const [isCategory, setIsCategory]= useState<Category[]>([])

const handleGetCategory = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/category`)
    setIsCategory(response.data)
  } catch (error) {
    console.error(error) // Handle any errors that occur
  }

}


useEffect(() => {
  handleGetCategory()
}, [])

console.log(isCategory);


  return (
    <div className='my-[3rem] '>
      <Card className="h-full w-full p-6">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
            Danh sách loại hàng
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
            Xem thông tin về tất cả loại hàng sản phẩm
            </Typography>
          </div>
          <Link to={'/category_add'} className="flex shrink-0 flex-col gap-6 sm:flex-row">
            {/* <Button variant="outlined" color="blue-gray" size="lg">
              Xem tất cả
            </Button> */}
            <Button className="flex items-center gap-2 outline-none py-3 px-6 rounded-full background text-white" color="blue" size="lg">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm danh mục
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72 flex justify-center items-center">
            <input type="text" placeholder="Tìm kiếm ..."  className="border border-solid rounded-2xl py-2 px-6 outline-none"/>
            <IonIcon  name="search-outline" className="right-10 absolute"/>
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>

            {isCategory.map(({ _id, name}, index) => {
              const isLast = index === isCategory.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={name}>
                  <td className={classes}>
                     <p>{index +1}</p>
                  </td>
                  <td className={classes}>
                    <p>{name}</p>
                  </td>
                  
                 
                  <td className={classes}>
                    <Link to={'/category_edit'}>
                      <Tooltip content="Sửa loại hàng">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      
                    </Link>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button className="outline-none rounded-lg " variant="outlined" color="blue-gray" size="sm">
            Trở lại
          </Button>
          <Button className="outline-none rounded-lg" variant="outlined" color="blue-gray" size="sm">
            Tiếp
          </Button>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Category