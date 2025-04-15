import './Carousel.css'
import man from './man.jpg'
import { For } from 'solid-js'
import smile from './smile.jpg'
import water from './water.png'
import buddhas from './buddhas.jpg'
import referrals from './referrals.jpg'
import goldBuddha from './goldBuddha.jpg'
import redFlowers from './redFlowers.jpg'
import { svg_lotus } from '@src/lib/svgs'
import mountainTour from './mountainTour.jpg'
import { Carousel as FunCarousel } from '@solidfun/carousel'


export function Carousel()  {
  return <>
    <FunCarousel items={
      <For each={offerings}>{
        (o) => <>
          <div class="offering">
            <div class="img">
              <img src={o.src} alt={o.title} />
              {svg_lotus()}
            </div>
            <div class="title">{o.title}</div>
            <div class="description">{o.description}</div>
            <button class="btn">Learn More</button>
          </div>
        </>
      }</For>
    }/>
  </>
}


function lorem() {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}


const offerings = [
  {
    key: 1,
    src: mountainTour,
    title: 'Healing Tours',
    description: lorem(),
  },
  {
    key: 3,
    src: water,
    title: 'Aquatic Therapy',
    description: lorem(),
  },
  {
    key: 2,
    src: smile,
    title: 'Yoga Therapy',
    description: lorem(),
  },
  {
    key: 4,
    src: man,
    title: 'Physical Healing Counseling',
    description: lorem(),
  },
  {
    key: 5,
    src: goldBuddha,
    title: 'Energy Medicine',
    description: lorem(),
  },
  {
    key: 6,
    src: redFlowers,
    title: 'Ayurvedic Herbs & Foods',
    description: lorem(),
  },
  {
    key: 7,
    src: buddhas,
    title: 'Healing Touch',
    description: lorem(),
  },
  {
    key: 8,
    src: referrals,
    title: 'Referrals',
    description: 'Everyone has their own unique “Healing Code”, or “Combination” of healing modalities, whether they entail physical therapies, nutritional guidance, mental/emotional counseling for trauma, etc. I help direct you both intuitively and intellectually through suggesting one or more of the healing modalities listed on this website by a consortium of trusted, proficient professionals.',
  },
]
