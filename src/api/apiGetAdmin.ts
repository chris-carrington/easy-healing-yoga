import { API } from '@ace/api'
import { jwtCookieGet } from '@ace/jwtCookieGet'


export const POST = new API('/api/get-admin', 'apiGetAdmin')
  .resolve(async (be) => {
    const jwt = await jwtCookieGet()
    return be.success({ isAdmin: jwt.payload?.isAdmin || false })
  })
