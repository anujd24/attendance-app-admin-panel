"use client"

import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Single',
    count: 10,
    fill: '#FAE27C',
  },
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Multiple',
    count: 90,
    fill: '#C3EBFA',
  }
];

const CountChart = () => {
    return(
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src={"/moreDark.png"} alt='' height={20} width={20}></Image>
            </div>

            {/* Chart */}
            <div className='relative w-full h-[75%]'>
            <ResponsiveContainer>
            <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar                    
              background
              dataKey="count"
            />
        </RadialBarChart>
        </ResponsiveContainer>
        <Image src={"/maleFemale.png"} alt='' height={50} width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></Image>
      </div>

            {/* Bottom */}
            <div className='flex justify-center gap-16'> 
              <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-adSky rounded-full'></div>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-xs text-gray-300'>Girls (10%)</h2>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-adYellow rounded-full'></div>
                <h1 className='font-bold'>4,567</h1>
                <h2 className='text-xs text-gray-300'>Boys (90%)</h2>
              </div>
            </div>
        </div>
    )
}

export default CountChart
