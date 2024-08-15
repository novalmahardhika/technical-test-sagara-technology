import { getStudent } from '@/action/user-action'
import CardStatistic from '@/components/dashboard/card-statistic'
import React from 'react'

export default async function DashboardPage() {
  const student = await getStudent()

  return <CardStatistic student={student} />
}
