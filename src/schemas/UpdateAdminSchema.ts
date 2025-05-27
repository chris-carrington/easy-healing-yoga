import { pipe, number, object } from 'valibot'
import { ValibotSchema, type InferValibotSchema } from '@ace/valibotSchema'


export const updateAdminSchema = new ValibotSchema(
  object({
    password: pipe(number()),
  })
)


export type UpdateAdminSchema = InferValibotSchema<typeof updateAdminSchema>
