/**
* 🧚‍♀️ How to access:
*     - import { createApp } from '@ace/createApp'
*/
  
  
import { Layout } from './layout'
import { Route404 } from './route404'
import { Route as AceRoute } from './route'
import { fe, FEContextProvider } from './fe'
import { MetaProvider } from '@solidjs/meta'
import { setFEChildren } from '../feChildren'
import { FileRoutes } from '@solidjs/start/router'
import { MessagesCleanup } from '../messagesCleanup'
import { Suspense, type JSX, type ParentComponent } from 'solid-js'
import { Route, Router, type RouteSectionProps } from '@solidjs/router' // Route is used by gen3



import  route1 from '@src/app/Index'


export const routes = {
  '/': route1
}



/** 
 * @param wrappers - The first wrapper is the outermost, default is `[FEContextProvider, MetaProvider, Suspense]`
 * @returns A function that when called provided an <App /> component
 */
export function createApp(wrappers: ParentComponent<any>[] = [FEContextProvider, MetaProvider, Suspense]) {
  const Root: ParentComponent<any> = (props: RouteSectionProps) => {
    let RootAccumulator: ParentComponent<any> = (p) => <>{p.children}</> // will become our Root, starts w/ the children and with each loop adds a Wrapper

    for (let i = wrappers.length - 1; i >= 0; i--) {
      const Wrapper = wrappers[i] // get Wrapper

      if (!Wrapper) continue

      const CurrentRoot = RootAccumulator // get Wrapper children

      // place Wrapper around CurrentRoot AND update the RootAccumulator
      RootAccumulator = (p) => <>
        <Wrapper>
          <CurrentRoot>{p.children}</CurrentRoot>
        </Wrapper>
      </>
    }

    return <RootAccumulator>{props.children}</RootAccumulator> // now render RootAccumulator around props.children
  }

  return function App(): JSX.Element {
    return <>
      <Router root={Root}>
        <FileRoutes />
        <Route path="/" component={() => routeComponent(route1)} matchFilters={route1.values.filters} />
      </Router>
    </>
  }
}



function routeComponent(route: AceRoute | Route404): JSX.Element | undefined {
  const res = route.values.component?.(fe)

  return !res ? undefined : <>
    {res}
    <MessagesCleanup />
  </>
}



function layoutComponent(props: RouteSectionProps, layout: Layout): JSX.Element {
  setFEChildren(fe, props.children)
  return layout.values.component?.(fe)
}
