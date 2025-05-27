import { pipe, number, string, object } from 'valibot'
import { ValibotSchema, type InferValibotSchema } from '@ace/valibotSchema'


export const updateContentSchema = new ValibotSchema(
  object({
    id: pipe(number()),
    content: pipe(string()),
  })
)


export type UpdateContentSchema = InferValibotSchema<typeof updateContentSchema>
