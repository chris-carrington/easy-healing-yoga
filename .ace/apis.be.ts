import { createAPIFunction } from './createAPIFunction' 

import  * as POST1 from '@src/api/apiContent'
import  * as POST2 from '@src/api/apiCreateSubscriber'


export const gets = {

}


export const posts = {
  '/api/content': POST1.POST,
  '/api/create-subscriber': POST2.POST,
}

export const apiContent = createAPIFunction(POST1.POST)
export const apiCreateSubscriber = createAPIFunction(POST2.POST)

