import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center space-x-3 h-20'>
      <div className='flex flex-col justify-end items-end text-sm '>
        <span className='font-semibold'>Mahardhika</span>
        <span className='font-medium text-gray-500'>Admin</span>
      </div>
      <Button variant='secondary' size='icon' className='rounded-full'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Button>
    </div>
  )
}
