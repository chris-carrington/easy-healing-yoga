import type { Accessor } from 'solid-js'


type Content = {
  id: number
  title: string
  content: string
}


type ContentMap = Accessor<Map<number, Content>>
