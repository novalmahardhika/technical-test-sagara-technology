'use server'

import { promises as fs } from 'fs'
import path from 'path'
import { StudentType } from '@/lib/data/schema'

export async function getStudent() {
  try {
    const filePath = path.join(
      process.cwd(),
      'src',
      'lib',
      'data',
      'students.json'
    )

    const data = await fs.readFile(filePath)

    return JSON.parse(data.toString() || '[]')
  } catch (error) {
    console.error(error)
  }
}

export async function deleteStudent(id: string) {
  try {
    const data: StudentType[] = await getStudent()
    const newData = data.filter((student) => student.id !== id)

    const filePath = path.join(
      process.cwd(),
      'src',
      'lib',
      'data',
      'students.json'
    )

    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf-8')

    return { message: 'Student deleted successfully' }
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete student')
  }
}
