import { z } from 'zod'

export const studentsSchema = z.object({
  id: z.string(),
  name: z.string(),
  password: z.string(),
  profile: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  instance: z.string(),
  createdAt: z.string(),
  course: z.string(),
  score: z.string(),
  reTypePassword: z.string().optional(),
})

export const studentFormSchema = z.object({
  name: z.string().trim().min(1),
  password: z.string().trim().min(1),
  email: z.string().trim().min(1),
  phoneNumber: z.string().trim().min(1),
  instance: z.string().trim().min(1),
  reTypePassword: z.string().trim().min(1),
})

export type StudentType = z.infer<typeof studentsSchema>

export type StudentFormSchemaType = z.infer<typeof studentFormSchema>
