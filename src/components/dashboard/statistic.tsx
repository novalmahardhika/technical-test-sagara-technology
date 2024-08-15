import { TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Chart } from './chart'
import { StudentType } from '@/lib/data/schema'

export default function Statistic({ student }: { student: StudentType[] }) {
  const total = student.length
  const certified = student.filter((x) => +x.score > 70).length
  const average = student.reduce((a, c) => a + +c.score, 0) / total

  return (
    <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 h-[160px]'>
      <div className='h-full p-5 flex flex-col rounded bg-white justify-between'>
        <div className='flex justify-between e'>
          <h3>Total Student</h3>
          <Image src='/Icon1.svg' alt='total-student' width={40} height={40} />
        </div>

        <h1 className='font-bold text-3xl '>{total}</h1>

        <div className='flex items-end space-x-1 text-emerald-500'>
          <TrendingUp />
          <span>8.5%</span>
          <span className='text-gray-700'>Up from yesterday</span>
        </div>
      </div>
      <div className='h-full p-5 flex flex-col justify-between rounded bg-white'>
        <div className='flex justify-between'>
          <h3>Total Certified Students</h3>
          <Image
            src='/Icon2.svg'
            alt='total-certified-student'
            width={40}
            height={40}
          />
        </div>

        <h1 className='font-bold text-3xl '>{certified}</h1>

        <div className='flex items-end space-x-1 text-emerald-500'>
          <TrendingUp />
          <span>8.5%</span>
          <span className='text-gray-700'>Up from yesterday</span>
        </div>
      </div>
      <div className='h-full rounded bg-white p-5 flex flex-col justify-between'>
        <div className='flex justify-between'>
          <h3>Average Certification Scores</h3>
          <Image
            src='/Icon3.svg'
            alt='average-certification-student'
            width={40}
            height={40}
          />
        </div>

        <h1 className='font-bold text-3xl '>{average}</h1>

        <div className='flex items-end space-x-1 text-emerald-500'>
          <TrendingUp />
          <span>8.5%</span>
          <span className='text-gray-700'>Up from yesterday</span>
        </div>
      </div>

      <div className='col-span-full'>
        <Chart student={student} />
      </div>
    </div>
  )
}
