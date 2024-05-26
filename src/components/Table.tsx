import React from 'react'
import employees from '@/assets/employees-data.json'
import Image from 'next/image'


export default function Table() {
    return (
        <div className='w-full overflow-x-scroll md:overflow-visible'>
            <table className='w-full min-w-max shadow-lg overflow-hidden rounded-md'>
                
                {/* Table Headers */}
                <thead className='bg-[#1e40ae] text-white'>
                    <tr>
                        <th className='font-normal py-3 pr-4 text-left'></th>
                        <th className='font-normal py-3 pr-4 text-left'>Rank</th>
                        <th className='font-normal py-3 pr-4 text-left'>Name</th>
                        <th className='font-normal py-3 pr-4 text-left'>Designation</th>
                        <th className='font-normal py-3 pr-4 text-left'>No. of hours worked</th>
                        <th className='font-normal py-3 pr-4 text-left'>Changes</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>

                    {/* Loops through employee data */}
                    {employees.map((employee, index) => (
                        <tr key={index} className={`border-b !p-10 ${(index % 2 == 0) ? "bg-[#f9fafc]" : ""}`}>

                            {/* Display medals of first three ranked employees */}
                            {index === 0 && <td className='py-3 pl-2'>🥇</td>}
                            {index === 1 && <td className='py-3 pl-2'>🥈</td>}
                            {index === 2 && <td className='py-3 pl-2'>🥉</td>}
                            {index > 2 && <td className='py-3 pr-4'></td>}

                            <td className='py-3 pr-4'>{employee.rank}</td>
                            <td className='flex justify-start items-center gap-2 py-3 pr-4'>
                                <Image className='rounded-full overflow-hidden object-fill w-6 h-6' src={employee.profile_image} height={30} width={30} alt="image" />
                                {employee.name}
                            </td>
                            <td className='py-3 pr-4'>{employee.designation}</td>
                            <td className='py-3 pr-4'>{employee.no_of_hours_worked}</td>
                            <td className='py-3 pr-4'>🔻{employee.changes} hrs</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
