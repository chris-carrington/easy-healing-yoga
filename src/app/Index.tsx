import Nav from '@src/Nav/Nav'
import { Route } from '@solidfun/route'
import Banner from '@src/Banner/Banner'
import Carousel from '@src/Carousel/Carousel'


export default new Route({
  path: '/',
  component() {
    return <>
      <Nav />
      <Banner />
      <Carousel />
    </>
  }
})
