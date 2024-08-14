'use client'

import { deleteStudent } from '@/action/user-action'
import { Button } from '@/components/ui/button'
import { StudentType } from '@/lib/data/schema'
import { Pen, Trash2 } from 'lucide-react'

export function DataTableRowActions({ student }: { student: StudentType }) {
  const deleteHandler = async () => {
    await deleteStudent(student.id)
  }
  return (
    <div className='flex space-x-2'>
      <Button
        variant={'ghost'}
        className='text-red-500 hover:text-red-600'
        onClick={deleteHandler}
      >
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
