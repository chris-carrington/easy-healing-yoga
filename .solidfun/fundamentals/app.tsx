/**
* 🧚‍♀️ How to access:
*     - import { routes, App, InternalRouterRoot } from '@solidfun/app'
*     - import type { RouteComponentArgs, RouterRoot } from '@solidfun/app'
*/
  
  
import { FE } from './fe'
import type { Layout } from './layout'
import { Route as FunRoute } from './route'
import { MetaProvider } from '@solidjs/meta'
import { FileRoutes } from '@solidjs/start/router'
import { FE_Context, FE_ContextProvider } from './feContext'
import { Route, Router, type RouteSectionProps } from '@solidjs/router'
import { useContext, Suspense, ErrorBoundary, type JSX } from 'solid-js'


import route_1 from '../../src/app/Index'


export const routes = {
  '/': route_1
}


/**
 * - `<App />` takes an optional `root` prop which is a function of type `RouterRoot`. Example @ `InternalRouterRoot` and below
 * - The primary reason to pass your own root is if you'd love additional context providers
 * - As seen @ `InternalRouterRoot` and below, root children must be wrapped around `<Suspense>`, `<MetaProvider>` and `<FE_ContextProvider>`
 * - After `<FE_ContextProvider>` please feel free to continue wrapping
 * - `<ErrorBoundary /> ` is optional
 * - Simple example `app.tsx`:
        ```tsx
        import { App } from '@solidfun/app'

        export default () => <App root={root}/>
        ```
 * - Custom Example `app.tsx`:
        ```tsx
        import { Suspense } from 'solid-js'
        import { MetaProvider } from '@solidjs/meta'
        import { App, type RouterRoot } from '@solidfun/app'
        import { FE_ContextProvider } from '@solidfun/feContext'
        import type { RouteSectionProps } from '@solidjs/router'
        import { AdditionalProvider } from '@src/lib/exampleContext'

        const root: RouterRoot = (props: RouteSectionProps) => {
            return <>
                <AdditionalProvider>
                    <ErrorBoundary fallback={errorBoundaryFallback}>
                        <FE_ContextProvider>
                            <MetaProvider>
                                <Suspense>{props.children}</Suspense>
                            </MetaProvider>
                        </FE_ContextProvider>
                    </ErrorBoundary>
                </AdditionalProvider>
            </> 
        }

        export default () => <App root={root}/>
        ``` */
export const App = ({ root }: { root?: RouterRoot }) => <>
  <Router root={root || InternalRouterRoot}>
    <FileRoutes />
    <Route path={route_1.path} component={props => rc(props, route_1)} matchFilters={route_1.filters} />
  </Router>
</>



export type RouterRoot = (props: RouteSectionProps) => JSX.Element


export const InternalRouterRoot: RouterRoot = (props: RouteSectionProps) => {
  return <>
    <ErrorBoundary fallback={errorBoundaryFallback}>
      <FE_ContextProvider>
        <MetaProvider>
          <Suspense>
            {props.children}
          </Suspense>
        </MetaProvider>
      </FE_ContextProvider>
    </ErrorBoundary>
  </> 
}


/**
 * RC stands for Route Component
 * This gives each route render a FE object
 * @param props - The standard props that a component recieves when it is navigated to
 * @param component The component to render which is a function that return jsx
 * @returns The response of the call to `route.component(args)` or undefined if no route defined
 */
function rc(props: RouteSectionProps, route: FunRoute | Layout) {
  const fe = useContext(FE_Context)
  const args: RouteComponentArgs = { fe, ...props }

  if (route instanceof FunRoute) fe.messages.clearAll() // on route boot fresh messages

  return route?.component ? route.component(args) : undefined
}


/**
 * - The args that get passed to a `route` or `layout` during render include:
 *     - `fe`
 *     - `params`
 *     - `location`
 *     - `data`: `T`
 *     - `children`
 */
export type RouteComponentArgs<T = unknown> = RouteSectionProps<T> & { fe: FE }


function errorBoundaryFallback(error: any, reset: () => void) {
  return <>
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  </>
} 