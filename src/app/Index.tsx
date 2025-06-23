import Nav from '@src/Nav/Nav'
import { Route } from '@ace/route'
import { About } from '@src/About/About'
import { Email } from '@src/Email/Email'
import { Banner } from '@src/Banner/Banner'
import { Footer } from '@src/Footer/Footer'
import { Meta, Title } from '@solidjs/meta'
import { Carousel } from '@src/Carousel/Carousel'
import { Upcoming } from '@src/Upcoming/Upcoming'
import { createContentMap } from '@src/lib/createContentMap'


export default new Route('/')
  .component(() => {
    const content = createContentMap()

    return <>
      <Title>Health & Wellness Adventure Retreats</Title>
      <Meta property="og:title" content="Health & Wellness Adventure Retreats" />
      <Meta property="og:url" content="https://healthandwellnessadventureretreats.com" />
      <Meta property="og:image" content="https://healthandwellnessadventureretreats.com/ogIndex.webp" />
      <Meta name="description" content="Your Practice Begins Here with Easy Healing Yoga - Sacred Relaxing Retreats to Peru, Bolivia, Lake Titicaca, and Nicaragua" />

      <Nav />
      <Banner content={content} />
      <Carousel content={content} />
      <About content={content} />
      <Upcoming content={content} />
      <Email content={content} />
      <Footer content={content} />
    </>
  })
