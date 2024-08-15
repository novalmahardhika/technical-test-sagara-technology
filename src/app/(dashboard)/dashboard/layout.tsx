import { DashboardLayout } from '@/components/dashboard/layout-dashboard'
import React, { ReactNode } from 'react'

export const dynamic = 'force-dynamic'

export default function DashboardLayoutPage({
  children,
}: {
  children: ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
