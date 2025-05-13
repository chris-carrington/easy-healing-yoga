import Nav from '@src/Nav/Nav'
import { Route } from '@ace/route'
import { About } from '@src/About/About'
import { Email } from '@src/Email/Email'
import { Banner } from '@src/Banner/Banner'
import { Footer } from '@src/Footer/Footer'
import { Meta, Title } from '@solidjs/meta'
import { apiCreateSubscriber } from '@ace/apis'
import { Carousel } from '@src/Carousel/Carousel'


export default new Route('/')
  .component(() => {
    async function onClick() {
      await apiCreateSubscriber({body: {email: 'donna@gmail.com'}})
    }

    return <>
      <Title>Easy Healing Yoga</Title>
      <Meta property="og:title" content="Easy Healing Yoga" />
      <Meta property="og:url" content="http://easy-healing-yoga.jquery-ssr.workers.dev" />
      <Meta property="og:image" content="http://easy-healing-yoga.jquery-ssr.workers.dev/ogIndex.webp" />
      <Meta name="description" content="Your Practice Begins Here with Easy Healing Yoga - Sacred Relaxing Retreats to Peru, Bolivia, Lake Titicaca, and Nicaragua" />

      <Nav />
      <Banner />
      <Carousel />
      <About />
      <Email />
      <Footer />
      <button onClick={onClick}>click</button>
    </>
  })
