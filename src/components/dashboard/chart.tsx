'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { StudentType } from '@/lib/data/schema'

let chartData = [
  {},
  { class: 'Backend', person: 0 },
  { class: 'Frontend', person: 0 },
  { class: 'Quality Assurance', person: 0 },
  { class: 'UI/UX', person: 0 },
  { class: 'Fullstack Developer', person: 0 },
  { class: 'Android Developer', person: 0 },
  { class: 'IOS Developer', person: 0 },
  {},
]

const chartConfig = {
  person: {
    label: 'Person',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function Chart({ student }: { student: StudentType[] }) {
  const be = student.filter((x) => x.course === 'Backend').length
  const fe = student.filter((x) => x.course === 'Frontend').length
  const ui = student.filter((x) => x.course === 'UI/UX').length
  const qa = student.filter((x) => x.course === 'Quality Assurance').length
  const and = student.filter((x) => x.course === 'Fullstack Developer').length
  const fs = student.filter((x) => x.course === 'Android Developer').length
  const ios = student.filter((x) => x.course === 'IOS Developer').length

  const newData = [
    { class: 'Backend', person: be },
    { class: 'Frontend', person: fe },
    { class: 'Quality Assurance', person: ui },
    { class: 'UI/UX', person: qa },
    { class: 'Fullstack Developer', person: fs },
    { class: 'Android Developer', person: and },
    { class: 'IOS Developer', person: ios },
  ]

  const updateData = chartData.map((item) => {
    const newItem = newData.find((data) => data.class === item.class)
    return newItem ? { ...item, person: newItem.person } : item
  })

  return (
    <ChartContainer
      config={chartConfig}
      className='max-h-[400px] w-full bg-white'
    >
      <BarChart
        accessibilityLayer
        data={updateData}
        barGap={20}
        barSize={90}
        margin={{
          top: 20,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='class'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey='person' fill='var(--color-person)' radius={8}>
          <LabelList
            position='top'
            offset={12}
            className='fill-foreground'
            fontSize={16}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
