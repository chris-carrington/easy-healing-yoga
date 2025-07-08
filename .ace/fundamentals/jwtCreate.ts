/**
 * 🧚‍♀️ How to access:
 *     - import { jwtCreate, ttlMinute, ttlHour, ttlDay, ttlWeek } from '@ace/jwtCreate'
 *     - import type { JwtCreateProps } from '@ace/jwtCreate'
 */


import { base64UrlEncode } from './base64UrlEncode'


/**
 * ### Create a JWT in node or on the Edge (Cloudflare Workers)
 * - Uses the HS512 algorithm which is fast and quantum-resistant (so long as secret ≥ 64 bytes)  
 * - Adds iat (issued at) & exp (expired at) props to the jwt payload to align w/ `JWT spec (RFC 7519)`
 * @example
  ```ts
  import { jwtCreate, ttlWeek } from '@ace/jwtCreate'

  const jwt = await jwtCreate({ ttl: ttlWeek, payload: { userId: 42 } })
  ```
 * @param props.payload - The JSON-serializable payload for the jwt token
 * @param props.ttl - Time-to-live in milliseconds
 * @returns A signed JWT string using HS512
 */
export async function jwtCreate({ payload, ttl }: JwtCreateProps): Promise<string> {
  if (!process.env.JWT_SECRET) throw new Error('!process.env.JWT_SECRET')

  if (ttl <= 0)  throw new Error('Please include a TTL > 0')

  const encoder = new TextEncoder()

  const header = { alg: 'HS512', typ: 'JWT' }

  const iat = Math.floor(Date.now() / 1000) // current time in seconds

  const exp = iat + Math.floor(ttl / 1000) // expiration time in seconds

  const body = { ...payload, iat, exp }

  const headerB64 = base64UrlEncode(encoder.encode(JSON.stringify(header)))
  const bodyB64 = base64UrlEncode(encoder.encode(JSON.stringify(body)))

  const headerBodyBinary = encoder.encode(`${headerB64}.${bodyB64}`) // will be signed soon

  const secretBinary = encoder.encode(process.env.JWT_SECRET) // will turn this into a key
  const cryptoKey = await crypto.subtle.importKey('raw', secretBinary, { name: 'HMAC', hash: 'SHA-512' }, false, ['sign'])    

  const sigBinary = await crypto.subtle.sign('HMAC', cryptoKey, headerBodyBinary)
  const sigB64 = base64UrlEncode(sigBinary)

  return `${headerB64}.${bodyB64}.${sigB64}` // final JWT
}



export const ttlMinute = 1000 * 60
export const ttlHour = 60 * ttlMinute
export const ttlDay = 24 * ttlHour
export const ttlWeek = 7 * ttlDay



export type JwtCreateProps = {
  /** The JSON-serializable payload for the jwt token */
  payload: Record<string, unknown>
  /** Time-to-live in milliseconds */
  ttl: number
}
