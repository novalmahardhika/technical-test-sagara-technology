import { promises as fs } from 'fs'
import path from 'path'
import { columns } from '@/components/dashboard/tabel/columns'
import { DataTable } from '@/components/dashboard/tabel/data-table'

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), '/src/lib/data/students.json')
  )

  const students = JSON.parse(data.toString() || '[]')

  return students
}

export default async function StudentsPage() {
  const data = await getTasks()

  return (
    <div className='flex flex-col space-y-5 '>
      <h1 className='text-2xl font-bold'>Data Student</h1>
      <DataTable data={data} columns={columns} />
    </div>
  )
}
