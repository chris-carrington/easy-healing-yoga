import './Email.css'
import { Submit } from '@ace/submit'
import { showToast } from '@ace/toast'
import { Messages } from '@ace/messages'
import { ContentMap } from '@src/lib/types'
import { apiCreateSubscriber } from '@ace/apis'
import { createOnSubmit } from '@ace/createOnSubmit'
import { createSubscriberSchema } from '@src/schemas/CreateSubscriberSchema'


export function Email({ content }: { content: ContentMap }) {
  const onSubmit = createOnSubmit(async (fd) => {
    const body = createSubscriberSchema.parse({ email: fd('email') })
    await apiCreateSubscriber({ body, bitKey: 'save' })
    showToast('success', 'Thanks for subscribing!')
  })

  return <>
    <div id="newsletter" class="bg">
      <div class="title" innerHTML={content().get(27)?.content}/>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Please enter email" />
        <Submit label="Sign Up" class="btn white" bitKey="save" />
      </form>
      <Messages name="email" />
    </div>
  </>
}
