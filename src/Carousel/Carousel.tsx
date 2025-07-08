import './Carousel.css'
import man from './man.jpg'
import smile from './smile.jpg'
import water from './water.png'
import buddhas from './buddhas.jpg'
import referrals from './referrals.jpg'
import goldBuddha from './goldBuddha.jpg'
import redFlowers from './redFlowers.jpg'
import { svg_lotus } from '@src/lib/svgs'
import mountainTour from './mountainTour.jpg'
import type { ContentMap } from '@src/lib/types'
import { Carousel as AceCarousel } from '@ace/carousel'


export function Carousel({ content }: { content: ContentMap })  {
  const offerings = () => [
    {
      src: mountainTour,
      title: content().get(4)?.content,
      description:  content().get(5)?.content,
    },
    {
      src: water,
      title: content().get(6)?.content,
      description:  content().get(7)?.content,
    },
    {
      src: smile,
      title: content().get(8)?.content,
      description:  content().get(9)?.content,
    },
    {
      src: man,
      title: content().get(10)?.content,
      description:  content().get(11)?.content,
    },
    {
      src: goldBuddha,
      title: content().get(12)?.content,
      description:  content().get(13)?.content,
    },
    {
      src: redFlowers,
      title: content().get(14)?.content,
      description:  content().get(15)?.content,
    },
    {
      src: buddhas,
      title: content().get(16)?.content,
      description:  content().get(17)?.content,
    },
    {
      src: referrals,
      title: content().get(18)?.content,
      description:  content().get(19)?.content,
    },
  ]

  return <>
    <AceCarousel items={offerings} duration={24} sectionProps={{id: 'carousel'}} render={(o) => <>
      <div class="offering">
        <div class="img">
          <img src={o.src} alt={o.title} />
          {svg_lotus()}
        </div>
        <div class="title">{o.title}</div>
        <div innerHTML={o.description} class="description"></div>
      </div>
    </>} />
  </>
}
