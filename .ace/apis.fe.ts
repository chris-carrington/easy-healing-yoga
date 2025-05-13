import { fe } from './fundamentals/fe'
import type { APIFunction } from './fundamentals/types' 

import type * as POST1 from '@src/api/apiCreateSubscriber'


export const gets = {} as const
export const posts = {} as const


export const apiCreateSubscriber: APIFunction<typeof POST1.POST> = async (o) => {
  return fe.POST('/api/create-subscriber', o)
}
