import React from 'react'
import UserCard from '@/components/UserCard'
import CountChart from '@/components/CountChart'
import AttendanceChart from '@/components/AttendanceChart'
import EventCalendar from '@/components/EventCalendar'
import Announcement from '@/components/Announcement'

function adminPage() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row '>
      {/* LEFT SIDE */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* USER CARDS */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='Student'></UserCard>
          <UserCard type='Teacher'></UserCard>
          <UserCard type='Staff'></UserCard>
          <UserCard type='Parent'></UserCard>
        </div>

          {/* Middle Charts */}
          <div className='flex gap-4 flex-col lg:flex-row'>
            {/* Count chart */}
            <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart/>
            </div>
            {/* Attendance chart */}
            <div className='w-full lg:w-2/3 h-[450px]'><AttendanceChart/></div>
          </div>

          {/* Bottom Charts */}
          <div className='w-full h-[500px]'>
          </div>
      </div>
      
      {/* RIGHT SIDE */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar/>
        <Announcement/>
      </div>
    </div>
  )
}

export default adminPage