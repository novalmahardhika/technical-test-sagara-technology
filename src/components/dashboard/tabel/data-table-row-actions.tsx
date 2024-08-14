'use client'

import { ModalDelete } from '@/components/modal/modal-delete'
import { Button } from '@/components/ui/button'
import { StudentType } from '@/lib/data/schema'
import { Pen } from 'lucide-react'

export function DataTableRowActions({ student }: { student: StudentType }) {
  return (
    <div className='flex space-x-2'>
      <ModalDelete studentId={student.id} />
      <Button
        variant={'ghost'}
        className='text-yellow-500 hover:text-yellow-600'
      >
        <Pen className='w-5 h-5' />
      </Button>
    </div>
  )
}
