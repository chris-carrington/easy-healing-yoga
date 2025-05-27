import { API } from '@ace/api'
import { db } from '@src/lib/db'


export const POST = new API('/api/get-subscribers', 'apiGetSubscribers')
  .resolve(async (be) => {
    const resultSet = await db().execute({ sql: 'SELECT email FROM subscribers' })
    return be.json(resultSet.rows)
  })
