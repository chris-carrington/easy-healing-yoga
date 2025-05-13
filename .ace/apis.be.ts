import { createAPIFunction } from './createAPIFunction' 

import  * as POST1 from '@src/api/apiCreateSubscriber'


export const gets = {

}


export const posts = {
  '/api/create-subscriber': POST1.POST,
}

export const apiCreateSubscriber = createAPIFunction(POST1.POST)

