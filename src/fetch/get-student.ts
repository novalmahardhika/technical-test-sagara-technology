import { promises as fs } from 'fs'
import path from 'path'

export async function getStudent() {
  const data = await fs.readFile(
    path.join(process.cwd(), '/src/lib/data/students.json')
  )

  const students = JSON.parse(data.toString() || '[]')

  return students
}
