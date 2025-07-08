import { API } from '@ace/api'
import { env } from 'node:process'
import type { JWTPayload } from 'ace.config'
import { ttlDay } from '@ace/jwtCreate'
import { jwtCookieSet } from '@ace/jwtCookieSet'
import { updateAdminSchema, type UpdateAdminSchema } from '@src/schemas/UpdateAdminSchema'


export const POST = new API('/api/update-admin', 'apiUpdateAdmin')
  .body<UpdateAdminSchema>()
  .resolve(async (be) => {
    if (!env.AUTH_PASSWORD) return be.error('!process.env.AUTH_PASSWORD')

    const body = updateAdminSchema.parse(await be.getBody())

    if (body.password !== Number(env.AUTH_PASSWORD)) return be.error('Invalid authentication')

    const payload: JWTPayload = { isAdmin: true }

    await jwtCookieSet({ jwtCreateProps: {ttl: ttlDay, payload} })

    return be.success('success')
  })
