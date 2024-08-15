import React from 'react'
import { Card } from './card'
import { Upload } from 'lucide-react'

export default function AddImage() {
  return (
    <Card className='h-40 flex justify-center items-center flex-col space-y-2 cursor-not-allowed'>
      <div className='rounded-full border p-2 '>
        <Upload />
      </div>

      <div className='flex justify-center flex-col text-center text-sm text-gray-500 '>
        <span>
          <span className='text-black font-semibold'>Click to upload</span> or
          drag and drop
        </span>
        <span>SVG, PNG, JPG or GIF (max, 800 X 800px)</span>
      </div>
    </Card>
  )
}
