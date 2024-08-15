import crypto from 'crypto'

export const generateUUID = crypto.randomBytes(20).toString('hex')
