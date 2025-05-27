import './Banner.css'
import { Show } from 'solid-js'
import flower from './flower.jpg'
import banner from './banner.jpg'
import { setActiveByHash } from '@ace/tabs'
import type { ContentMap } from '@src/lib/types'


export function Banner({ content }: { content: ContentMap }) {
  return <>
    <div id="banner">
      <div class="img">
        <img src={ banner } alt="banner" />
      </div>

      <div class="content">
        <Show when={content().size} fallback={<div class="load-spin"></div>}>
          <div class="main" innerHTML={content().get(1)?.content} />
          <div class="secondary" innerHTML={content().get(2)?.content} />
          <button class="btn lg" type="button" onClick={() => setActiveByHash('nav', '#carousel')} innerHTML={content().get(3)?.content} />
        </Show>
      </div>

      <img src={ flower } class="flower" alt="bg" />
    </div>
  </>
}
