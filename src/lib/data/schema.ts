import { z } from 'zod'

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export const studentsSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  profile: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  instance: z.string(),
  createdAt: z.string(),
})

export type StudentType = z.infer<typeof studentsSchema>

export type Task = z.infer<typeof taskSchema>
