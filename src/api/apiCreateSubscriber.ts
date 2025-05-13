import { API } from '@ace/api'
import { db } from '@src/lib/db'
import { createSubscriberSchema, type CreateSubscriberSchema } from '@src/schemas/CreateSubscriberSchema'


export const POST = new API('/api/create-subscriber', 'apiCreateSubscriber')
  .body<CreateSubscriberSchema>()
  .resolve(async (be) => {
    const body = createSubscriberSchema.parse(await be.getBody())

    await db().execute({ sql: 'INSERT INTO subscribers VALUES (:email)', args: body })

    return be.json({ success: true })
  })
