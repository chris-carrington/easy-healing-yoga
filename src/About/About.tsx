import './About.css'
import donna from './donna.jpg'
import { svg_lotus } from '@src/lib/svgs'
import type { ContentMap } from '@src/lib/types'


export function About ({ content }: { content: ContentMap }) {
  return <>
    <div id="bio" class="about bg">
      {svg_lotus()}
      <div class="title">{content().get(20)?.content}</div>

      <div class="img-description">
        <img src={ donna } alt="donna" />
        <div class="description" innerHTML={content().get(21)?.content} />
      </div>
    </div>
  </>
}
