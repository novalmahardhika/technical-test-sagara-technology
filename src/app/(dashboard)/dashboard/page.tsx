import { getStudent } from '@/action/user-action'
import Statistic from '@/components/dashboard/statistic'

import React from 'react'

export default async function DashboardPage() {
  const student = await getStudent()

  return <Statistic student={student} />
}
