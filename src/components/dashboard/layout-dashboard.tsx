import Link from 'next/link'
import { GraduationCap, LayoutDashboard, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ReactNode } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Navbar from './navbar'
import { ScrollArea } from '../ui/scroll-area'

const items = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className='h-6 w-6' />,
  },
  {
    name: 'Students',
    href: '/dashboard/students',
    icon: <GraduationCap className='h-6 w-6' />,
  },
]

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className='grid h-screen w-full grid-cols-8 '>
      <div className='hidden border-r bg-muted/40 md:block md:col-span-2 2xl:col-span-1'>
        <aside className='flex h-full flex-col bg-zinc-900 p-[25px] space-y-12'>
          {/* sidebar */}
          <Image src={'/sagara-logo.png'} alt='logo' width={178} height={64} />
          <div className='flex flex-col items-start text-sm font-normal  space-y-3 text-white'>
            <span>Menu</span>
            <div className='flex flex-col w-full'>
              {items.map((item, index) => (
                <Link
                  key={`${item.name}-${index}`}
                  href={item.href}
                  className='flex items-center justify-start space-x-3 hover:bg-rose-800 py-2 px-3 rounded w-full h-full duration-300'
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className='flex flex-col col-span-full md:col-span-6 2xl:col-span-7 '>
        <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-between md:justify-end'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='shrink-0 md:hidden'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className='flex flex-col bg-zinc-900 text-white'
            >
              <nav className='flex h-full max-h-screen flex-col  p-[25px] space-y-12'>
                {/* sidebar */}
                <Image
                  src={'/sagara-logo.png'}
                  alt='logo'
                  width={178}
                  height={64}
                />
                <div className='flex flex-col items-start text-sm font-normal  space-y-3 text-white'>
                  <span>Menu</span>
                  <div className='flex flex-col w-full'>
                    {items.map((item, index) => (
                      <Link
                        key={`${item.name}-${index}`}
                        href={item.href}
                        className='flex items-center justify-start space-x-3  hover:bg-rose-800 py-2 px-3 rounded w-full h-full duration-300'
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* navbar */}

          <Navbar />
        </header>

        {/* main */}
        <main className='p-4 lg:gap-6 lg:p-6 '>{children}</main>
      </div>
    </div>
  )
}
