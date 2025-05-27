import { createAPIFunction } from './createAPIFunction' 

import  * as POST1 from '@src/api/apiCreateSubscriber'
import  * as POST2 from '@src/api/apiGetAdmin'
import  * as POST3 from '@src/api/apiGetContent'
import  * as POST4 from '@src/api/apiGetSubscribers'
import  * as POST5 from '@src/api/apiUpdateAdmin'
import  * as POST6 from '@src/api/apiUpdateContent'


export const gets = {

}


export const posts = {
  '/api/create-subscriber': POST1.POST,
  '/api/get-admin': POST2.POST,
  '/api/get-content': POST3.POST,
  '/api/get-subscribers': POST4.POST,
  '/api/update-admin': POST5.POST,
  '/api/update-content': POST6.POST,
}

export const apiCreateSubscriber = createAPIFunction(POST1.POST)
export const apiGetAdmin = createAPIFunction(POST2.POST)
export const apiGetContent = createAPIFunction(POST3.POST)
export const apiGetSubscribers = createAPIFunction(POST4.POST)
export const apiUpdateAdmin = createAPIFunction(POST5.POST)
export const apiUpdateContent = createAPIFunction(POST6.POST)

