import Nav from '@src/Nav/Nav'
import { load } from '@ace/load'
import { Route } from '@ace/route'
import { apiContent } from '@ace/apis'
import { About } from '@src/About/About'
import { Email } from '@src/Email/Email'
import { Banner } from '@src/Banner/Banner'
import { Footer } from '@src/Footer/Footer'
import { Meta, Title } from '@solidjs/meta'
import type { Content } from '@src/lib/types'
import { Carousel } from '@src/Carousel/Carousel'
import { Upcoming } from '@src/Upcoming/Upcoming'
import { createEffect, createSignal } from 'solid-js'


export default new Route('/')
  .component(() => {
    const contentLoad = load(() => apiContent(), 'content')
    const [content, setContent] = createSignal(new Map<number, Content>())

    createEffect(() => { // when we got data => set content map
      const _content = contentLoad()
      if (!Array.isArray(_content?.data)) return

      setContent(prev => { 
        const next = new Map(prev)
        if (!Array.isArray(_content?.data)) return next

        for (const row of _content.data) {
          if (typeof row.id === 'number' && typeof row.title === 'string' && typeof row.content === 'string') {
            next.set(row.id, { id: row.id, title: row.title, content: row.content })
          }
        }

        return next
      })
    })

    return <>
      <Title>Health & Wellness Adventure Retreats</Title>
      <Meta property="og:title" content="Health & Wellness Adventure Retreats" />
      <Meta property="og:url" content="http://easy-healing-yoga.jquery-ssr.workers.dev" />
      <Meta property="og:image" content="http://easy-healing-yoga.jquery-ssr.workers.dev/ogIndex.webp" />
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
