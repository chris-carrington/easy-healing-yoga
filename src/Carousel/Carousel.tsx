import './Carousel.css'
import man from './man.jpg'
import '@ace/carousel.styles'
import { For } from 'solid-js'
import smile from './smile.jpg'
import water from './water.png'
import buddhas from './buddhas.jpg'
import referrals from './referrals.jpg'
import { loremWords } from '@ace/lorem'
import goldBuddha from './goldBuddha.jpg'
import redFlowers from './redFlowers.jpg'
import { svg_lotus } from '@src/lib/svgs'
import mountainTour from './mountainTour.jpg'
import { Carousel as AceCarousel } from '@ace/carousel'


export function Carousel()  {
  return <>
    <div id="carousel">
      <AceCarousel items={
        <For each={offerings}>{
          (o) => <>
            <div class="offering">
              <div class="img">
                <img src={o.src} alt={o.title} />
                {svg_lotus()}
              </div>
              <div class="title">{o.title}</div>
              <div innerHTML={o.description} class="description"></div>
              {/* <button class="btn">Learn More</button> */}
            </div>
          </>
        }</For>
      }/>
    </div>
  </>
}


const offerings = [
  {
    key: 1,
    src: mountainTour,
    title: 'Healing Tours',
    description: loremWords(57),
  },
  {
    key: 3,
    src: water,
    title: 'Aquatic Therapy',
    description: loremWords(57),
  },
  {
    key: 2,
    src: smile,
    title: 'Yoga Therapy',
    description: loremWords(57),
  },
  {
    key: 4,
    src: man,
    title: 'Physical Healing Counseling',
    description: loremWords(57),
  },
  {
    key: 5,
    src: goldBuddha,
    title: 'Energy Medicine',
    description: loremWords(57),
  },
  {
    key: 6,
    src: redFlowers,
    title: 'Ayurvedic Herbs & Foods',
    description: loremWords(57),
  },
  {
    key: 7,
    src: buddhas,
    title: 'Healing Touch',
    description: loremWords(57),
  },
  {
    key: 8,
    src: referrals,
    title: 'Referrals',
    description: 'Everyone has their own unique “Healing Code”, or “Combination” of healing modalities, whether they entail physical therapies, nutritional guidance, mental/emotional counseling for trauma, etc. I help direct you both intuitively and intellectually through suggesting one or more of the healing modalities listed on this website by a consortium of trusted, proficient professionals.',
  },
]
