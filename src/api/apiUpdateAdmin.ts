import { API } from '@ace/api'
import { env } from 'node:process'
import { setSessionData } from '@ace/session'
import { updateAdminSchema, type UpdateAdminSchema } from '@src/schemas/UpdateAdminSchema'


export const POST = new API('/api/update-admin', 'apiUpdateAdmin')
  .body<UpdateAdminSchema>()
  .resolve(async (be) => {
    let success: undefined | boolean

    if (!env.AUTH_PASSWORD) throw new Error('!process.env.AUTH_PASSWORD')

    const body = updateAdminSchema.parse(await be.getBody())

    if (String(body.password) !== env.AUTH_PASSWORD) success = false
    else {
      success = true
      await setSessionData({ isAdmin: true })
    }

    return be.json({ success })
  })
