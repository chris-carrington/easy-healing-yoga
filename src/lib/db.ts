import { env } from 'node:process'
import { createClient } from '@libsql/client'


export function db() { // deferring access to process.env until runtime
  if (!env.TURSO_AUTH_TOKEN) throw new Error('!process.env.TURSO_AUTH_TOKEN')
  if (!env.TURSO_DATABASE_URL) throw new Error('!process.env.TURSO_DATABASE_URL')

  return createClient({
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  })
}
