'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  studentFormSchema,
  studentsSchema,
  StudentType,
} from '@/lib/data/schema'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import AddImage from '../ui/add-image'
import { Separator } from '../ui/separator'
import { Pen } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { instances } from '@/lib/data/instance'
import { toast } from 'sonner'
import { useTransition } from 'react'
import { updateStudent } from '@/action/user-action'

export default function UpdateModal(student: StudentType) {
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof studentFormSchema>>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: student.name,
      email: student.email,
      password: '',
      instance: student.instance,
      reTypePassword: '',
      phoneNumber: student.phoneNumber,
    },
  })

  function onSubmit(values: z.infer<typeof studentFormSchema>) {
    startTransition(async () => {
      try {
        const data = await updateStudent(student.id, values)

        if (data.success) {
          toast.success(data.success)
          return
        }

        if (data.error) {
          toast.error(data.error)
          return
        }
      } catch (error) {
        toast.error('Something went wrong')
      }
    })
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className='text-yellow-500 hover:text-yellow-600'>
          <Pen className='w-5 h-5' />
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[612px]'>
        <DialogHeader>
          <DialogTitle className='font-semibold '>
            Edit Data Student
          </DialogTitle>
          <Separator />
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid grid-cols-2 gap-4 '
          >
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder='johndoe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='john@doe.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phoneNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder='(+62) 123456789' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='instance'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instance</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={student.instance}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select a Instance' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select Instance</SelectLabel>
                          {instances.map((instance, index) => (
                            <SelectItem
                              value={instance.name}
                              key={`${instance.name}-${index}`}
                            >
                              {instance.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='reTypePassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Re-type Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Re-type Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem className='col-span-full'>
              <FormLabel>Add Image</FormLabel>
              <AddImage />
            </FormItem>

            <div className='flex justify-end col-span-full'>
              <Button type='submit' className='bg-rose-700 hover:bg-rose-800'>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
