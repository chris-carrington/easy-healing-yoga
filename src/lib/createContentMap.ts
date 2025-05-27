import { load } from '@ace/load'
import { apiGetContent } from '@ace/apis'
import type { Content } from '@src/lib/types'
import { createEffect, createSignal } from 'solid-js'


export function createContentMap() {
  const contentLoad = load(() => apiGetContent(), 'content')
  const [content, setContent] = createSignal(new Map<number, Content>())

  createEffect(() => { // when we got data => set content map
    const _content = contentLoad()
    if (!Array.isArray(_content?.data)) return

    setContent(prev => { 
      const next = new Map(prev)
      if (!Array.isArray(_content?.data)) return next

      for (const row of _content.data) {
        if (typeof row.id === 'number' && typeof row.title === 'string' && typeof row.content === 'string') {
          next.set(row.id, { id: row.id, title: row.title, content: row.content })
        }
      }

      return next
    })
  })

  return content
}
