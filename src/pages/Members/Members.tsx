import React from 'react'
import Card from '../../component/share/Card/Card'
import ManagementUser from '../../component/share/ManagementUser/ManagementUser'

const Members = () => {
  return (
    <div className='h-screen mt-[3rem]'>
       <Card>
          <ManagementUser />
       </Card>
    </div>
  )
}

export default Members