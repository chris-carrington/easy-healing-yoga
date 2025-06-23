import './Nav.css'
import logo from './logo.webp'
import { svg_menu, svg_close } from '@src/lib/svgs'
import { createSignal, For, type Accessor } from 'solid-js'
import { Tabs, setActiveByHash, setActiveByTabIndex, HashTab } from '@ace/tabs'


export default () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = createSignal(false)

  let navItems = [
    new HashTab('Home', '#banner'),
    new HashTab('Offerings', '#carousel'),
    new HashTab('Donna\'s Bio', '#bio'),
    new HashTab('Spiritual Retreats', '#upcoming'),
    new HashTab('Newsletter', '#newsletter'),
  ]

  function onLogoClick() {
    setActiveByHash('nav', '#banner')
  }

  function onMobileAnchorClick(e: MouseEvent, i: Accessor<number>) {
    e.preventDefault()
    setActiveByTabIndex('nav', i())
    setIsMobileNavVisible(false)
  }

  return <>
    <div class="nav">
      <button class="logo-btn" onClick={onLogoClick} aria-label="Go to Home section">
        <img src={ logo }  alt="logo" aria-hidden="true" />
      </button>

      <nav class="top" role="navigation" aria-label="Main site navigation">
        <Tabs name="nav" mode="scroll" variant="underline" scrollMargin={74} tabs={navItems} />
      </nav>

      <nav id="mobile-menu" classList={{mobile: true, visible: isMobileNavVisible()}} role="navigation" aria-label="Mobile menu" aria-hidden={!isMobileNavVisible()}>
        <button class="close" onclick={ () => setIsMobileNavVisible(v => !v) } aria-label="Close menu">
          {svg_close()}
        </button>

        <img src={ logo }  alt="logo" />

        <ul role="menu">
          <For each={navItems}>{
            (item, i) => <>
              <li role="none">
                <a href={item.hash} onClick={(e) => onMobileAnchorClick(e, i)} class="mobile-nav-item" role="menuitem">
                  {item.label}
                </a>
              </li>
            </>
          }</For>
        </ul>
      </nav>

      <button class="menu" onclick={() => setIsMobileNavVisible(v => !v)} aria-label="Toggle mobile menu" aria-controls="mobile-menu" aria-expanded={isMobileNavVisible()}>
        {svg_menu()}
      </button>
    </div>
  </>
}
