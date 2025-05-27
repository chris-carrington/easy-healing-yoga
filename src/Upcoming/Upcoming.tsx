import './Upcoming.css'
import tepotzlan from './tepoztlan.jpg'
import { svg_lotus } from '@src/lib/svgs'
import type { ContentMap } from '@src/lib/types'
import tepotzlan_rooms from './tepotzlan_rooms.jpg'
import tepotzlan_bowls from './tepotzlan_bowls.jpg'
import tepotzlan_fireplace from './tepotzlan_fireplace.jpg'


export function Upcoming({ content }: { content: ContentMap }) {
  return <>
    <div id="upcoming">
      {svg_lotus()}
      <div class="title">{content().get(23)?.content}</div>
      <div class="event">
        <div class="img-left">
          <img src={ tepotzlan_bowls } alt="tepotzlan_bowls" />
        </div>

        <div class="content">
          <div class="time">{content().get(26)?.content}</div>
          <div class="primary">{content().get(24)?.content}</div>
          <div class="secondary" innerHTML={content().get(25)?.content}/>
          <div class="images">
            <img src={ tepotzlan_bowls } alt="tepotzlan_bowls" id="tepotzlan_bowls" />
            <img src={ tepotzlan_rooms } alt="tepotzlan_rooms" />
            <img src={ tepotzlan } alt="tepotzlan" />
            <img src={ tepotzlan_fireplace } alt="tepotzlan_fireplace" />
          </div>
        </div>
      </div>
    </div>
  </>
}
