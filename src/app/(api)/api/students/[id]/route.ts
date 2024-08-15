import { StudentType } from '@/lib/data/schema'
import { promises as fs } from 'fs'
import path from 'path'

// const filePath =
//   process.env.NODE_ENV === 'production'
//     ? path.join(process.cwd(), 'tmp', 'store-data.json')
//     : path.join(process.cwd(), '/tmp', 'store-data.json')

const filePath =
  process.env.NODE_ENV !== 'production'
    ? path.join(process.cwd(), '/tmp', 'store-data.json')
    : path.join(process.cwd(), 'tmp', 'store-data.json')

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await fs.readFile(filePath)

    console.log(params.id)

    const students: StudentType[] = JSON.parse(data.toString() || '[]')

    const newData = students.filter((student) => student.id !== params.id)

    // const tempFilePath = path.join(process.cwd(), '/tmp', 'store-data.json')

    // Write the updated data to the /tmp directory
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf-8')

    return Response.json(
      { message: 'Success', data: JSON.parse(data.toString() || '[]') },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
