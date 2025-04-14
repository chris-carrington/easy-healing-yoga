import { Route } from '@solidfun/route'
import Banner from '@src/Banner/Banner'


export default new Route({
  path: '/',
  component() {
    return <Banner />
  }
})
