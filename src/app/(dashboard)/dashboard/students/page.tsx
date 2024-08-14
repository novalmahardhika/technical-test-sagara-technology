import { columns } from '@/components/dashboard/tabel/columns'
import { DataTable } from '@/components/dashboard/tabel/data-table'
import { formatDate } from '@/lib/format-date'
import { StudentType } from '@/lib/data/schema'
import { getStudent } from '@/action/user-action'

export default async function StudentsPage() {
  const data: StudentType[] = await getStudent()

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
