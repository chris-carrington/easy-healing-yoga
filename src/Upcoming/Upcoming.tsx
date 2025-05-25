import './Upcoming.css'
import tepotzlan from './tepoztlan.jpg'
import { svg_lotus } from '@src/lib/svgs'
import tepotzlan_rooms from './tepotzlan_rooms.jpg'
import tepotzlan_bowls from './tepotzlan_bowls.jpg'
import tepotzlan_fireplace from './tepotzlan_fireplace.jpg'


export function Upcoming() {
  return <>
    <div id="upcoming">
      {svg_lotus()}
      <div class="title">Upcoming Spiritual Retreats</div>
      <div class="event">
        <div class="img-left">
          {/* <img src={ tepotzlan } alt="tepotzlan" /> */}
          <img src={ tepotzlan_bowls } alt="tepotzlan_bowls" />
        </div>

        <div class="content">
          <div class="time">Summer 2025</div>
          <div class="primary">Tepotztlan, Mexico</div>
          <div class="secondary">Activity highlights include: Daily resotrative yoga/aquatic therapy, Guided vortex and pyramid hikes, Prehispanic meal and medicinal herb class, Guided meditation, sound healing and solfeggio frequencies, Churches, art galleries and museums, Temezcal ceremony, Artisan shopping and Nightly sharing circle!</div>
          <div class="images">
            <img src={ tepotzlan_bowls } alt="tepotzlan_bowls" id="tepotzlan_bowls" />
            <img src={ tepotzlan_rooms } alt="tepotzlan_rooms" />
            <img src={ tepotzlan } alt="tepotzlan" />
            <img src={ tepotzlan_fireplace } alt="tepotzlan_fireplace" />
          </div>
        </div>
      </div>
      {/* <button class="btn lg" type="button">See All Spiritual Retreats</button> */}
    </div>
  </>
}
