import Image from 'next/image'
import React from 'react'
import reward_image from '@/assets/image1.svg'

type CardProps = {
    image_url: string;
    title: string;
    employee_name: string;
    designation: string;
}

export default function Card({ image_url, title, employee_name, designation }: CardProps) {
    return (
        <div className='flex flex-col items-center rounded-lg p-2 h-max w-max border shadow-md bg-gradient-to-tl from-[#eae9fb] to-white'>
            <Image className='rounded-md' src={image_url} alt="Employee Activity" width={300} height={300} />

            <div className='text-center mt-2'>
                <div className='text-[#1b41b3f3] font-bold text-lg'>{title}</div>
                <div className='font-bold mt-2'>{employee_name}</div>
                <div className='text-gray-500 text-xs '>{designation}</div>
            </div>

            <Image src={reward_image} alt="Reward" width={200} height={100} />
        </div>

    )
}
