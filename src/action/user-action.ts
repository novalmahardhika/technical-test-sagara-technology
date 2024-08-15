'use server'

import { promises as fs } from 'fs'
import { studentFormSchema, StudentType } from '@/lib/data/schema'
import { revalidatePath } from 'next/cache'
import { filePath } from '@/lib/file-path'
import { generateUUID } from '@/lib/generate-uuid'
import { z } from 'zod'

export async function getStudent() {
  try {
    const data = await fs.readFile(filePath)
    return JSON.parse(data.toString() || '[]')
  } catch (error) {
    console.log(error)
  }
}

export async function createStudent(values: z.infer<typeof studentFormSchema>) {
  const validatePayload = studentFormSchema.safeParse(values)
  if (!validatePayload.success) {
    return { message: 'Invalid data' }
  }

  const payload = validatePayload.data

  if (payload.password !== payload.reTypePassword) {
    return { error: 'password doesnt match' }
  }

  try {
    let data = await getStudent()

    const modifiedPayload = {
      id: generateUUID,
      ...payload,
      createdAt: new Date().toISOString(),
      profile: 'https://github.com/shadcn.png',
    }

    data = [...data, modifiedPayload]
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
    revalidatePath('/dashboard/students')
    return { success: 'Student created successfully' }
  } catch (error) {
    console.log(error)
    return { error: 'Internal Server error' }
  }
}

export async function updateStudent(
  userId: string,
  values: z.infer<typeof studentFormSchema>
) {
  const validatePayload = studentFormSchema.safeParse(values)

  if (!validatePayload.success) {
    return { message: 'Invalid data' }
  }
  const payload = validatePayload.data

  if (payload.password !== payload.reTypePassword) {
    return { error: 'password doesnt match' }
  }

  try {
    const data: StudentType[] = await getStudent()

    const index = data.findIndex((x) => x.id === userId)

    if (!index) {
      return { error: 'Student Not found' }
    }

    const modifiedPayload = {
      id: generateUUID,
      ...payload,
      createdAt: new Date().toISOString(),
      profile: 'https://github.com/shadcn.png',
    }

    data[index] = modifiedPayload

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
    revalidatePath('/dashboard/students')

    return { success: 'Student updated successfully' }
  } catch (error) {
    return { error: 'Internal Server Error' }
  }
}

export async function deleteStudent(id: string) {
  try {
    let data: StudentType[] = await getStudent()
    const newData = data.filter((student) => student.id !== id)

    // Write the updated data to the /tmp directory
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf-8')

    // Revalidate the path to refresh the data on the client side
    revalidatePath('/dashboard/students')

    return { success: 'Student deleted successfully' }
  } catch (error) {
    console.log(error)
    return { error: 'Internal Server error' }
  }
}
