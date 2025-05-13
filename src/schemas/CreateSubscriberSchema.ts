import { pipe, email, string, object } from 'valibot'
import { ValibotSchema, type InferValibotSchema } from '@ace/valibotSchema'


export const createSubscriberSchema = new ValibotSchema(
  object({
    email: pipe(string(), email('Please provide a valid email')),
  })
)


export type CreateSubscriberSchema = InferValibotSchema<typeof createSubscriberSchema>
