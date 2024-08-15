import { StudentType } from '@/lib/data/schema'
import { filePath } from '@/lib/file-path'
import { promises as fs } from 'fs'
import { revalidatePath } from 'next/cache'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await fs.readFile(filePath)
    const students: StudentType[] = JSON.parse(data.toString() || '[]')

    const newData = students.filter((student) => student.id !== params.id)

    // Write the updated data to the /tmp directory
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf-8')

    revalidatePath('/dashboard/students')

    return Response.json({ message: 'Success', data: newData }, { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
