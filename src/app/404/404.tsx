import './404.css'
import { A } from '@ace/a'
import Nav from '@src/Nav/Nav'
import { Title } from '@solidjs/meta'
import { Route404 } from '@ace/route404'


export default new Route404()
  .component((fe) => {
    return <>
      <Title>😅 404</Title>
      <Nav />

      <main class="not-found">
        <div class="main-content">
          <div class="code">404 😅</div>
          <div class="message">We don't have a page called:</div>
          <div class="path">{fe.getLocation().pathname}</div>
          <A path="/" solidAProps={{class: 'brand'}}>🏡 Go Back Home</A>
        </div>
      </main>
    </>
  })
