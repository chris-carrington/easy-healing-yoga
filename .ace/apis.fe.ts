import { fe } from './fundamentals/fe'
import type { APIFunction } from './fundamentals/types' 

import type * as POST1 from '@src/api/apiCreateSubscriber'
import type * as POST2 from '@src/api/apiGetAdmin'
import type * as POST3 from '@src/api/apiGetContent'
import type * as POST4 from '@src/api/apiGetSubscribers'
import type * as POST5 from '@src/api/apiUpdateAdmin'
import type * as POST6 from '@src/api/apiUpdateContent'


export const gets = {} as const
export const posts = {} as const


export const apiCreateSubscriber: APIFunction<typeof POST1.POST> = async (o) => {
  return fe.POST('/api/create-subscriber', o)
}

export const apiGetAdmin: APIFunction<typeof POST2.POST> = async (o) => {
  return fe.POST('/api/get-admin', o)
}

export const apiGetContent: APIFunction<typeof POST3.POST> = async (o) => {
  return fe.POST('/api/get-content', o)
}

export const apiGetSubscribers: APIFunction<typeof POST4.POST> = async (o) => {
  return fe.POST('/api/get-subscribers', o)
}

export const apiUpdateAdmin: APIFunction<typeof POST5.POST> = async (o) => {
  return fe.POST('/api/update-admin', o)
}

export const apiUpdateContent: APIFunction<typeof POST6.POST> = async (o) => {
  return fe.POST('/api/update-content', o)
}
