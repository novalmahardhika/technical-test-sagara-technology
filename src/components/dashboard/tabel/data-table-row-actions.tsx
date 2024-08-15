'use client'

import { ModalDelete } from '@/components/modal/modal-delete'
import UpdateModal from '@/components/modal/update-modal'
import { Button } from '@/components/ui/button'
import { StudentType } from '@/lib/data/schema'

export function DataTableRowActions({ student }: { student: StudentType }) {
  return (
    <div className='flex space-x-2'>
      <ModalDelete studentId={student.id} />
      <UpdateModal {...student} />
    </div>
  )
}
