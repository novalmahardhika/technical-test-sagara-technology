import { promises as fs } from 'fs'
import path from 'path'
import { columns } from '@/components/dashboard/tabel/columns'
import { DataTable } from '@/components/dashboard/tabel/data-table'
import { formatDate } from '@/lib/format-date'
import { StudentType } from '@/lib/data/schema'

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), '/src/lib/data/students.json')
  )

  const students = JSON.parse(data.toString() || '[]')

  return students
}

export default async function StudentsPage() {
  let data: StudentType[] = await getTasks()

  const formatData = data.map((prev) => ({
    ...prev,
    createdAt: formatDate(prev.createdAt),
  }))

  return (
    <div className='flex flex-col space-y-5 '>
      <h1 className='text-2xl font-bold'>Data Student</h1>
      <DataTable data={formatData} columns={columns} />
    </div>
  )
}
