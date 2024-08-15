import path from 'path'

export const filePath =
  process.env.NODE_ENV !== 'production'
    ? path.join(process.cwd(), '/tmp', 'store-data.json')
    : path.join('/tmp', 'store-data.json')
