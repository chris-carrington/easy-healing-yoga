import { Title } from '@solidjs/meta'
import { HttpStatusCode } from '@solidjs/start'


export default () => <>
  <main>
    <Title>Not Found</Title>
    <HttpStatusCode code={404} />
    <h1>Page Not Found</h1>
    <a href='/'>Sign In</a>
    {' - '}
    <a href='/contracts'>Contracts</a>
  </main>
</>
