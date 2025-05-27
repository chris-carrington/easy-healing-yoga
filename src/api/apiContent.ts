import { API } from '@ace/api'
import { db } from '@src/lib/db'


export const POST = new API('/api/content', 'apiContent')
  .resolve(async (be) => {
    const resultSet = await db().execute({ sql: 'SELECT * FROM content' })
    return be.json(resultSet.rows)
  })
