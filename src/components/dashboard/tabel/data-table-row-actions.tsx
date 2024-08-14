'use client'

import { Button } from '@/components/ui/button'
import { Pen, Trash2 } from 'lucide-react'

export function DataTableRowActions() {
  return (
    <div className='flex space-x-2'>
      <Button variant={'ghost'} className='text-red-500 hover:text-red-600'>
        <Trash2 />
      </Button>

      <Button
        variant={'ghost'}
        className='text-yellow-500 hover:text-yellow-600'
      >
        <Pen className='w-5 h-5' />
      </Button>
    </div>
  )
}
