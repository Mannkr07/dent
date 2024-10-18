"use client"

import React from 'react'
import { useState } from 'react'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"

import { Button } from "../../components/ui/button"

import { StarIcon, ArrowUpIcon } from 'lucide-react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"

import { Separator } from "../../components/ui/separator"

export const description = "A collection of health charts."

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#2c3e50] text-white p-2 rounded shadow-lg">
        <p className="text-sm font-semibold">Total:</p>
        <p className="text-lg font-bold">SAR {payload[0].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

const data = [
  { name: 'JAN', income: 4800, expenses: 1200 },
  { name: 'FEB', income: 5800, expenses: 3200 },
  { name: 'MAR', income: 9800, expenses: 3800 },
  { name: 'APR', income: 7000, expenses: 2400 },
  { name: 'MAY', income: 6200, expenses: 4800 },
  { name: 'JUN', income: 6400, expenses: 5200 },
]

const lineChartData = [
  { name: 'JAN', value: 2000 },
  { name: 'FEB', value: 2500 },
  { name: 'MAR', value: 2000 },
  { name: 'APR', value: 4500 },
  { name: 'MAY', value: 5000 },
  { name: 'JUN', value: 11000 },
  { name: 'JUL', value: 6000 },
  { name: 'AUG', value: 7000 },
  { name: 'SEP', value: 9500 },
  { name: 'OCT', value: 10000 },
  { name: 'NOV', value: 11000 },
  { name: 'DEC', value: 11500 },
]

const Charts = () => {
  const [hoveredValue, setHoveredValue] = useState(null)
  return (
    <div className="chart-wrapper flex flex-col items-start justify-center gap-6 p-6 sm:p-8">
      <div className='space-y-2'>
        <div className='font-bold text-2xl'>
          Good Morning, Mann!
        </div>
        <div>
          Wednesday, September 20, 2024
        </div>
      </div>
      <div className='flex gap-6 w-full'>
        <div className="flex w-[65%] flex-col gap-6">
          <Card className="w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Cashflow</h2>
              <Select defaultValue="last12">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last12">Last 12 month</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-1">TOTAL CASH</p>
              <div className="flex items-center">
                <span className="text-4xl font-bold mr-2">SAR 131,232</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm flex items-center">
                  <ArrowUpIcon className="w-4 h-4 mr-1" />
                  4.51%
                </span>
              </div>
            </div>
            <div className="text-right mb-4">
              <span className="text-gray-600">January 2022 - December 2022</span>
            </div>
            <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineChartData}
                onMouseMove={(e) => {
                  if (e.activePayload) {
                    setHoveredValue(e.activePayload[0].value)
                  }
                }}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000}K`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
            </div>
          </Card>
          <div className='flex gap-6 w-full'>
            <div className="flex w-full flex-col gap-6">
            <Card className="w-full max-w-3xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">Income & Expense</CardTitle>
                <Select defaultValue="this-month">
                  <SelectTrigger className="w-[140px] border-0 bg-gray-100 text-gray-600">
                    <SelectValue placeholder="This month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="this-month">6 month</SelectItem>
                    <SelectItem value="last-month">3 month</SelectItem>
                    <SelectItem value="this-year">1 month</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                      TOTAL INCOME
                    </p>
                    <p className="text-3xl font-bold text-gray-800">SAR 1,412</p>
                    <p className="text-sm font-medium text-green-500">▲ 4.51%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                      <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                      TOTAL EXPENSES
                    </p>
                    <p className="text-3xl font-bold text-gray-800">SAR 612.34</p>
                    <p className="text-sm font-medium text-red-500">▼ 2.41%</p>
                  </div>
                </div>
                
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} margin={{ top: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${Math.floor(value / 1000)}K`} />
                    <Bar dataKey="income" fill="#86efac" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#fde047" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            </div>
            <div className='flex flex-col gap-6 w-full'>
              <Card className="w-full max-w-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-bold">Patients</CardTitle>
                  <Select defaultValue="this-month">
                    <SelectTrigger className="w-[140px] border-0 bg-gray-100 text-gray-600">
                      <SelectValue placeholder="This month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="this-month">This month</SelectItem>
                      <SelectItem value="last-month">Last month</SelectItem>
                      <SelectItem value="this-year">This year</SelectItem>
                    </SelectContent>
                  </Select>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-4xl font-bold">21</p>
                      <div>
                        <p className="text-xl font-semibold text-gray-600">36.52%</p>
                        <p className="text-sm text-gray-500">New patients</p>
                      </div>
                      <div className="h-2 w-full bg-blue-200" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-4xl font-bold">142</p>
                      <div>
                        <p className="text-xl font-semibold text-gray-600">61.41%</p>
                        <p className="text-sm text-gray-500">Returning patients</p>
                      </div>
                      <div className="flex space-x-0.5">
                        {Array(61).fill(0).map((_, i) => (
                          <div key={i} className="h-2 w-1 bg-gray-200" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#2D3648]">Popular Treatment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Scaling Teeth", rating: 4.7 },
                    { name: "Tooth Extraction", rating: 4.4 },
                    { name: "General Checkup", rating: 4.6 }
                  ].map((treatment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-1 h-6 bg-gray-300 rounded"></div>
                        <span className="text-lg text-[#4B5563]">{treatment.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="w-5 h-5 text-[#F59E0B] fill-current" />
                        <span className="text-lg font-semibold text-[#4B5563]">{treatment.rating}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
          <Card
            className="max-w-xs" x-chunk="charts-01-chunk-2"
          >
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>
                You're average more steps a day this year than last year.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid auto-rows-min gap-2">
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  12,453
                  <span className="text-sm font-normal text-muted-foreground">
                    steps/day
                  </span>
                </div>
                <ChartContainer
                  config={{
                    steps: {
                      label: "Steps",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="aspect-auto h-[32px] w-full"
                >
                  <BarChart
                    accessibilityLayer
                    layout="vertical"
                    margin={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    data={[
                      {
                        date: "2024",
                        steps: 12435,
                      },
                    ]}
                  >
                    <Bar
                      dataKey="steps"
                      fill="var(--color-steps)"
                      radius={4}
                      barSize={32}
                    >
                      <LabelList
                        position="insideLeft"
                        dataKey="date"
                        offset={8}
                        fontSize={12}
                        fill="white"
                      />
                    </Bar>
                    <YAxis dataKey="date" type="category" tickCount={1} hide />
                    <XAxis dataKey="steps" type="number" hide />
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="grid auto-rows-min gap-2">
                <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                  10,103
                  <span className="text-sm font-normal text-muted-foreground">
                    steps/day
                  </span>
                </div>
                <ChartContainer
                  config={{
                    steps: {
                      label: "Steps",
                      color: "hsl(var(--muted))",
                    },
                  }}
                  className="aspect-auto h-[32px] w-full"
                >
                  <BarChart
                    accessibilityLayer
                    layout="vertical"
                    margin={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    data={[
                      {
                        date: "2023",
                        steps: 10103,
                      },
                    ]}
                  >
                    <Bar
                      dataKey="steps"
                      fill="var(--color-steps)"
                      radius={4}
                      barSize={32}
                    >
                      <LabelList
                        position="insideLeft"
                        dataKey="date"
                        offset={8}
                        fontSize={12}
                        fill="hsl(var(--muted-foreground))"
                      />
                    </Bar>
                    <YAxis dataKey="date" type="category" tickCount={1} hide />
                    <XAxis dataKey="steps" type="number" hide />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
          <Card
            className="max-w-xs" x-chunk="charts-01-chunk-4"
          >
            <CardContent className="flex gap-4 p-4 pb-2">
              <ChartContainer
                config={{
                  move: {
                    label: "Move",
                    color: "hsl(var(--chart-1))",
                  },
                  stand: {
                    label: "Stand",
                    color: "hsl(var(--chart-2))",
                  },
                  exercise: {
                    label: "Exercise",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[140px] w-full"
              >
                <BarChart
                  margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 10,
                  }}
                  data={[
                    {
                      activity: "stand",
                      value: (8 / 12) * 100,
                      label: "8/12 hr",
                      fill: "var(--color-stand)",
                    },
                    {
                      activity: "exercise",
                      value: (46 / 60) * 100,
                      label: "46/60 min",
                      fill: "var(--color-exercise)",
                    },
                    {
                      activity: "move",
                      value: (245 / 360) * 100,
                      label: "245/360 kcal",
                      fill: "var(--color-move)",
                    },
                  ]}
                  layout="vertical"
                  barSize={32}
                  barGap={2}
                >
                  <XAxis type="number" dataKey="value" hide />
                  <YAxis
                    dataKey="activity"
                    type="category"
                    tickLine={false}
                    tickMargin={4}
                    axisLine={false}
                    className="capitalize"
                  />
                  <Bar dataKey="value" radius={5}>
                    <LabelList
                      position="insideLeft"
                      dataKey="label"
                      fill="white"
                      offset={8}
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex flex-row border-t p-4">
              <div className="flex w-full items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Move</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    562
                    <span className="text-sm font-normal text-muted-foreground">
                      kcal
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Exercise</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    73
                    <span className="text-sm font-normal text-muted-foreground">
                      min
                    </span>
                  </div>
                </div>
                <Separator orientation="vertical" className="mx-2 h-10 w-px" />
                <div className="grid flex-1 auto-rows-min gap-0.5">
                  <div className="text-xs text-muted-foreground">Stand</div>
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    14
                    <span className="text-sm font-normal text-muted-foreground">
                      hr
                    </span>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div> */}
        <div className="grid w-[35%] flex-1 gap-6">
        <Card className="w-full max-w-3xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">Expenses</CardTitle>
            <Select defaultValue="last6months">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last6months">Last 6 months</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="flex">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="5" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#a78bfa" strokeWidth="5" strokeDasharray="75.4 100" strokeDashoffset="75" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#4ade80" strokeWidth="5" strokeDasharray="55.4 100" strokeDashoffset="130" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#60a5fa" strokeWidth="5" strokeDasharray="50 100" strokeDashoffset="185" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f472b6" strokeWidth="5" strokeDasharray="45 100" strokeDashoffset="235" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#fb923c" strokeWidth="5" strokeDasharray="20 100" strokeDashoffset="280" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#fbbf24" strokeWidth="5" strokeDasharray="5 100" strokeDashoffset="300" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-sm text-gray-500">Total Expense</div>
                  <div className="text-2xl font-bold">SAR 80,832</div>
                </div>
              </div>
              <div className="flex-1 ml-8 space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#a78bfa]" />
                  <div className="ml-2 flex-1">Rental Cost</div>
                  <div className="font-medium">30%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#4ade80]" />
                  <div className="ml-2 flex-1">Wages</div>
                  <div className="font-medium">22%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#60a5fa]" />
                  <div className="ml-2 flex-1">Medical Equipment</div>
                  <div className="font-medium">20%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#f472b6]" />
                  <div className="ml-2 flex-1">Supplies</div>
                  <div className="font-medium">18%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#fb923c]" />
                  <div className="ml-2 flex-1">Promotion Costs</div>
                  <div className="font-medium">8%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                  <div className="ml-2 flex-1">Other</div>
                  <div className="font-medium">2%</div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <div className="text-lg font-semibold text-gray-500">TOP EXPENSE</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#a78bfa]" />
                    <div className="text-sm text-gray-500">Rental Cost</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold">SAR 26,000</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#60a5fa]" />
                    <div className="text-sm text-gray-500">Wages</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold">SAR 16,500</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#4ade80]" />
                    <div className="text-sm text-gray-500">Medical Equipment</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold">SAR 15,640</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#f472b6]" />
                    <div className="text-sm text-gray-500">Supplies</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold">SAR 13,564</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
         
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Stock avability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg text-gray-500">TOTAL ASSET</p>
                  <p className="text-4xl font-bold text-gray-800">SAR 53,000</p>
                </div>
                <div>
                  <p className="text-lg text-gray-500">TOTAL PRODUCT</p>
                  <p className="text-4xl font-bold text-gray-800">442</p>
                </div>
              </div>
              <div className="flex h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="w-3/5 bg-teal-400"></div>
                <div className="w-1/3 bg-yellow-400"></div>
                <div className="w-1/12 bg-pink-400"></div>
              </div>
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-teal-400 mr-2"></div>
                  Available
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
                  Low Stock
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-pink-400 mr-2"></div>
                  Out of stock
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-700">LOW STOCK</p>
                  <a href="#" className="text-blue-600 hover:underline">View all</a>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <p className="font-medium">Dental Brush</p>
                    <div className="flex items-center space-x-4">
                      <p>Qty: 3</p>
                      <Button variant="link" className="text-blue-600 p-0">Order</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                    <p className="font-medium">Charmflex Regular</p>
                    <div className="flex items-center space-x-4">
                      <p>Qty: 2</p>
                      <Button variant="link" className="text-blue-600 p-0">Order</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


const Dashboard = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
          </div>
        </div>
      </main>
  )
}

export default Charts