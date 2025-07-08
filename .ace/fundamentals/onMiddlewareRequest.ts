
/**
 * 🧚‍♀️ How to access:
 *     - import { onMiddlewareRequest } from '@ace/onMiddlewareRequest'
 */


import { API } from './api'
import { Route } from './route'
import { callB4 } from '../callB4'
import { routes } from './createApp'
import { gets, posts } from './apis'
import { AceError } from './aceError'
import type { FetchEvent } from './types'
import { GoResponse } from './goResponse'
import { redirect } from '@solidjs/router'
import { jwtCookieGet } from './jwtCookieGet'
import { validateParams } from '../validateParams'
import { eventToPathname } from '../eventToPathname'
import { pathnameToMatch, type RouteMatch } from '../pathnameToMatch'
import { getSearchParams } from '../getSearchParams'


/**
 * - Typically called by `getMiddleware()`
 * - Adds session data to `event.locals.sessionData`
 * - Matches a `FetchEvent` w/ the proper route or api
 * - If match has a `b4()`, calls it & returns its response
 * - If you would love to call this function, please see `getMiddleware()` for guidance, but it'd looks something like this:
  ```tsx
  export function getMiddleware() {
    return createMiddleware({
      async onRequest (e) {
        const res = await onMiddlewareRequest(e)
        // custom logic here
        if (res) return res
      }
    })
  }
  ```
 */
export async function onMiddlewareRequest(event: FetchEvent): Promise<any> {
  try {
    event.locals.jwtResponse = await jwtCookieGet(event.nativeEvent)

    const pathname = eventToPathname(event)

    switch(event.request.method) {
      case 'POST': return await onAPIMatched(event, pathname, posts)
      case 'GET':
        const routeMatch = pathnameToMatch(pathname, routes)
 
        if (routeMatch?.handler instanceof Route) return await onRouteMatched(event, routeMatch)
        else return await onAPIMatched(event, pathname, gets)
    }
  } catch (error) {
    return new Response(JSON.stringify(AceError.catch({ error }), null, 2), { status: 401 }) // Only Response objects can be returned from middleware functions. Returning any other value will result in an error. source: https://docs.solidjs.com/solid-start/advanced/middleware#middleware
  }
}
 

async function onRouteMatched<T extends API | Route>(event: FetchEvent, routeMatch: RouteMatch<T>) {
  try {
    const { pathParams, searchParams } = validateParams({
      rawParams: routeMatch.params,
      rawSearch: getSearchParams(event),
      pathParamsSchema: routeMatch.handler.values.pathParamsSchema,
      searchParamsSchema: routeMatch.handler.values.searchParamsSchema
    })

    if (routeMatch.handler.values.b4) {
      const b4Response = await callB4(routeMatch.handler, event.locals.jwtResponse, { pathParams, searchParams })
      if (b4Response) return b4Response
    }
  } catch (error) {
    if (error instanceof GoResponse) return redirect(error.url)
    else throw error
  }
}


async function onAPIMatched(event: FetchEvent, pathname: string, apis: Record<string, API<any>>) {
  const match = pathnameToMatch(pathname, apis)

  if (match?.handler instanceof API) {
    return await onRouteMatched(event, match)
  }
}
