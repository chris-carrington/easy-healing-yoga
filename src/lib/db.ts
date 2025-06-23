import { env } from 'node:process'
import { createClient, type Config, type Client } from '@libsql/client'

/**
 * Initializes a libsql client using provided config or environment variables
 * @param config Optional config overrides. `url` and `authToken` can be passed here or through environment variables
 * @throws Error if neither config.url nor env.TURSO_DATABASE_URL is set, or neither config.authToken nor env.TURSO_AUTH_TOKEN is set
 */
export function db(config?: Config): Client {
  const url = config?.url || env.TURSO_DATABASE_URL
  if (!url) throw new Error('Please provide database url via config.url or TURSO_DATABASE_URL environment variable')

  const authToken = config?.authToken || env.TURSO_AUTH_TOKEN
  if (!authToken) throw new Error('Please provide auth token via config.authToken or TURSO_AUTH_TOKEN environment variable')

  return createClient({
    ...(config || {}),
    url,
    authToken,
  })
}
