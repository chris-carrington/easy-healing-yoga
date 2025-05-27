import { API } from '@ace/api'
import { getSessionData } from '@ace/session'


export const POST = new API('/api/get-admin', 'apiGetAdmin')
  .resolve(async (be) => {
    const sessionData = await getSessionData()
    return be.json({ isAdmin: sessionData?.isAdmin || false })
  })
