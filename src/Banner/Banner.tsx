import './Banner.css'
import flower from './flower.jpg'
import banner from './banner.jpg'


export function Banner () {
  return <>
    <div class="banner">
      <div class="img">
        <img src={ banner } alt="banner" />
      </div>

      <div class="content">
        <div class="main">Welcome to Easy Healing Yoga's "Blossoming"</div>
        <div class="secondary">Open your Petals of the Thousand-Petaled Lotus Inside</div>
        <button class="btn lg" type="button">Learn More</button>
      </div>

      <img src={ flower } class="flower" alt="bg" />
    </div>
  </>
}
