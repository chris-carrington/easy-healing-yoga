import './Footer.css'
import type { ContentMap } from '@src/lib/types'


export function Footer({ content }: { content: ContentMap }) {
  return <div class="footer">{content().get(22)?.content}</div>
}
