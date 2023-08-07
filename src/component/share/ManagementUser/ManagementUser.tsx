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
  Tooltip,
} from "@material-tailwind/react";
import IonIcon from "@reacticons/ionicons";
import axios from "axios";
import { useEffect, useState } from "react";
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
 
const TABLE_HEAD = ["Thành viên", "Email", "Chức năng", "Địa chỉ", "Thao tác"];
 

 

interface User {
  username: string
  email: string
  phoneNumber: string
  avatar: string
  address: string
  _id: string
}

export default function ManagementUser() {

  const [user, setUser] = useState<User[]>([]);

  const handleGetUser = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users')
      setUser(response.data.data);
    }catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    handleGetUser();
  },[])
  return (
    <Card className="h-full w-full p-6">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
            Danh sách thành viên
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
            Xem thông tin về tất cả các thành viên
            </Typography>
          </div>
          <Link to={'/member_add'} className="flex shrink-0 flex-col gap-6 sm:flex-row">
            {/* <Button variant="outlined" color="blue-gray" size="lg">
              Xem tất cả
            </Button> */}
            <Button className="flex items-center gap-2 outline-none py-3 px-6 rounded-full background text-white" color="blue" size="lg">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm thành viên
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
      {/* /// */}
      {user.length > 0 ? (
        <CardBody className="px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            {/* ... mã hiện tại ... */}

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
    
            {user.map(({ username,email, phoneNumber, avatar,address, _id }, index) => {
              const isLast = index === user.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={username}>
                  <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {username}
                        </Typography>
                       
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      {/* <Typography variant="small" color="blue-gray" className="font-normal">
                        User
                      </Typography> */}
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {email}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        User
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {phoneNumber}
                      </Typography>
                    </div>
                  </td>
                  
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {address || 'Chưa cập nhật'}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Link to={'/member_edit'}>
                      <Tooltip content="Edit User">
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
      ) : (
        <CardBody>
          <Typography variant="body2" color="blue-gray">
            Không tìm thấy người dùng nào.
          </Typography>
        </CardBody>
      )}
{/*  */}

   
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button className="outline-none rounded-lg " variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button className="outline-none rounded-lg" variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

