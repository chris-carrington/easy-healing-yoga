import { createClient } from '@libsql/client'


if (!process.env.TURSO_AUTH_TOKEN) throw new Error('!process.env.TURSO_AUTH_TOKEN')
if (!process.env.TURSO_DATABASE_URL) throw new Error('!process.env.TURSO_DATABASE_URL')


export const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
})
