import { API } from '@ace/api'
import { db } from '@src/lib/db'
import { updateContentSchema, type UpdateContentSchema } from '@src/schemas/UpdateContentSchema'


export const POST = new API('/api/update-content', 'apiUpdateContent')
  .body<UpdateContentSchema>()
  .resolve(async (be) => {
    const body = updateContentSchema.parse(await be.getBody())

    await db().execute({ sql: 'UPDATE content SET content = (:content) WHERE id = (:id)', args: body })

    return be.json({ success: true })
  })
