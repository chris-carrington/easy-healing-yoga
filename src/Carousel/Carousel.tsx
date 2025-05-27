import './Carousel.css'
import man from './man.jpg'
import '@ace/carousel.styles'
import smile from './smile.jpg'
import water from './water.png'
import buddhas from './buddhas.jpg'
import referrals from './referrals.jpg'
import goldBuddha from './goldBuddha.jpg'
import redFlowers from './redFlowers.jpg'
import { svg_lotus } from '@src/lib/svgs'
import { createMemo, For } from 'solid-js'
import mountainTour from './mountainTour.jpg'
import type { ContentMap } from '@src/lib/types'
import { Carousel as AceCarousel } from '@ace/carousel'


export function Carousel({ content }: { content: ContentMap })  {
  const offerings = createMemo(() => [
    {
      key: 1,
      src: mountainTour,
      title: content().get(4)?.content,
      description:  content().get(5)?.content,
    },
    {
      key: 3,
      src: water,
      title: content().get(6)?.content,
      description:  content().get(7)?.content,
    },
    {
      key: 2,
      src: smile,
      title: content().get(8)?.content,
      description:  content().get(9)?.content,
    },
    {
      key: 4,
      src: man,
      title: content().get(10)?.content,
      description:  content().get(11)?.content,
    },
    {
      key: 5,
      src: goldBuddha,
      title: content().get(12)?.content,
      description:  content().get(13)?.content,
    },
    {
      key: 6,
      src: redFlowers,
      title: content().get(14)?.content,
      description:  content().get(15)?.content,
    },
    {
      key: 7,
      src: buddhas,
      title: content().get(16)?.content,
      description:  content().get(17)?.content,
    },
    {
      key: 8,
      src: referrals,
      title: content().get(18)?.content,
      description:  content().get(19)?.content,
    },
  ])

  return <>
    <AceCarousel id="carousel" items={() =>
      <For each={offerings()}>{
        (o) => <>
          <div class="offering">
            <div class="img">
              <img src={o.src} alt={o.title} />
              {svg_lotus()}
            </div>
            <div class="title">{o.title}</div>
            <div innerHTML={o.description} class="description"></div>
          </div>
        </>
      }</For>
    }/>
  </>
}
