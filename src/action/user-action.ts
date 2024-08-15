'use server'

import { promises as fs } from 'fs'
import path from 'path'
import { studentsSchema, StudentType } from '@/lib/data/schema'
import { revalidatePath } from 'next/cache'
import crypto from 'crypto'

// path store-data
const filePath =
  process.env.NODE_ENV === 'production'
    ? path.join(process.cwd(), 'tmp', 'store-data.json')
    : path.join(process.cwd(), '/tmp', 'store-data.json')

export async function getStudent() {
  try {
    const data = await fs.readFile(filePath)

    return JSON.parse(data.toString() || '[]')
  } catch (error) {
    console.log(error)
  }
}

export async function createStudent(payload: StudentType) {
  const validatePayload = studentsSchema.safeParse(payload)

  if (!validatePayload.success) {
    return { message: 'Invalid data' }
  }
  try {
    let data = await getStudent()

    data = [...data, payload]

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
    revalidatePath('/dashboard/students')

    return { success: 'Student created successfully' }
  } catch (error) {
    console.log(error)

    return { error: 'Internal Server error' }
  }
}

export async function deleteStudent(id: string) {
  try {
    const data: StudentType[] = await getStudent()
    const newData = data.filter((student) => student.id !== id)

    const tempFilePath = path.join('/tmp', 'store-data.json')

    // Write the updated data to the /tmp directory
    await fs.writeFile(tempFilePath, JSON.stringify(newData, null, 2), 'utf-8')

    // Revalidate the path to refresh the data on the client side
    revalidatePath('/dashboard/students')

    return { success: 'Student deleted successfully' }
  } catch (error) {
    console.log(error)
    return { error: 'Internal Server error' }
  }
}
