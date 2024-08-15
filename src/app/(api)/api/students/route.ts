import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const filePath =
  process.env.NODE_ENV === 'production'
    ? path.join(process.cwd(), 'tmp', 'store-data.json')
    : path.join(process.cwd(), '/tmp', 'store-data.json')

export async function GET() {
  try {
    const data = await fs.readFile(filePath)

    return Response.json(
      { message: 'Success', data: JSON.parse(data.toString() || '[]') },
      { status: 200 }
    )
  } catch (error) {
    console.log('ERROR GET LIST IN BANNER', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
