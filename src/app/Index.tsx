import Nav from '@src/Nav/Nav'
import { Route } from '@solidfun/route'
import { About } from '@src/About/About'
import { Email } from '@src/Email/Email'
import { Banner } from '@src/Banner/Banner'
import { Footer } from '@src/Footer/Footer'
import { Meta, Title } from '@solidjs/meta'
import { Carousel } from '@src/Carousel/Carousel'


export default new Route({
  path: '/',
  component() {
    return <>
      <Title>Easy Healing Yoga</Title>
      <Meta property="og:title" content="The Rock" />
      <Meta property="og:type" content="video.movie" />
      <Meta property="og:url" content="http://easy-healing-yoga.jquery-ssr.workers.dev" />
      <Meta property="og:image" content="http://easy-healing-yoga.jquery-ssr.workers.dev/ogIndex.webp" />
      <Meta name="description" content="Your Practice Begins Here with Easy Healing Yoga - Sacred Relaxing Retreats to Peru, Bolivia, Lake Titicaca, and Nicaragua" />

      <Nav />
      <Banner />
      <Carousel />
      <About />
      <Email />
      <Footer />
    </>
  }
})
