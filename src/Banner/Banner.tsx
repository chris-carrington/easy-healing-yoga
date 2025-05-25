import './Banner.css'
import flower from './flower.jpg'
import banner from './banner.jpg'
import { setActiveByHash } from '@ace/tabs'


export function Banner () {
  return <>
    <div id="banner">
      <div class="img">
        <img src={ banner } alt="banner" />
      </div>

      <div class="content">
        <div class="main">Discover your Life's<br/>Harmony & Joy with Donna's</div>
        <div class="secondary">Health and Wellness Adventure Retreats!</div>
        <button class="btn lg" type="button" onClick={() => setActiveByHash('nav', '#carousel')}>Learn More</button>
      </div>

      <img src={ flower } class="flower" alt="bg" />
    </div>
  </>
}
