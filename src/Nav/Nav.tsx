import './Nav.css'
import logo from './logo.png'
import { createSignal, For } from 'solid-js'
import { svg_menu, svg_close } from '@src/lib/svgs'

export default () => {
  let underline: HTMLDivElement | undefined  = undefined
  const [isMobileNavVisible, setIsMobileNavVisible] = createSignal(false)

  let navItems = [
    {
      id: 'home',
      name: 'Home',
      href: '/',
      underlineWidth: '8.3rem',
      underlineTransform: 'translateX(0)'
    },
    {
      id: 'bio',
      name: 'Donna\'s Bio',
      href: '/',
      underlineWidth: '14rem',
      underlineTransform: 'translateX(8.2rem)'
    },
    {
      id: 'retreats',
      name: 'Spiritual Retreats',
      href: '/',
      underlineWidth: '19.4rem',
      underlineTransform: 'translateX(22.2rem)'
    },
    {
      id: 'yoga',
      name: 'Yoga',
      href: '/',
      underlineWidth: '7.3rem',
      underlineTransform: 'translateX(42rem)'
    },
    {
      id: 'redding',
      name: 'Redding',
      href: '/',
      underlineWidth: '10.5rem',
      underlineTransform: 'translateX(49.5rem)'
    },
  ]

  function linkMouseEnter (id: string) {
    const navItem = navItems.find(item => item.id === id)
  
    if (navItem && underline) {
      underline.style.width = navItem.underlineWidth
      underline.style.transform = navItem.underlineTransform
    }
  }
  
  function isActive (id: string) {
    if (id === 'home') return true
    else false
  }
  
  function linkMouseLeave () {
    if (underline) {
      underline.style.width = '8.3rem'
      underline.style.transform = 'translateX(0)'
    }
  }

  return <>
    <div class="nav">
      <img src={ logo }  alt="logo" />
      <nav class="top">
        <For each={navItems}>{
          (item) => <a href={ item.href } onmouseenter={ () => linkMouseEnter(item.id) } onmouseleave={ () => linkMouseLeave() } class={ isActive(item.id) ? 'active' : '' }>{ item.name }</a>
        }</For>
        <div ref={ underline } class="underline one"></div>
      </nav>

      <nav classList={{mobile: true, visible: isMobileNavVisible()}}>
        <button class="close" onclick={ () => setIsMobileNavVisible(v => !v) }>
          {svg_close()}
        </button>

        <img src={ logo }  alt="logo" />

        <For each={navItems}>{
          (item) => <a href={ item.href }>{ item.name }</a>
        }</For>
      </nav>

      <button class="menu" onclick={ () => setIsMobileNavVisible(v => !v) }>
        {svg_menu()}
      </button>
    </div>
  </>
}
