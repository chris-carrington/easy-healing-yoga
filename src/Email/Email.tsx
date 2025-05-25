import './Email.css'
import { Submit } from '@ace/submit'
import { showToast } from '@ace/toast'
import { Messages } from '@ace/messages'
import { apiCreateSubscriber } from '@ace/apis'
import { createOnSubmit } from '@ace/createOnSubmit'
import { createSubscriberSchema } from '@src/schemas/CreateSubscriberSchema'


export function Email() {
  const onSubmit = createOnSubmit(async (fd) => {
    const body = createSubscriberSchema.parse({ email: fd('email') })
    await apiCreateSubscriber({ body, bitKey: 'save' })
    showToast('success', 'Thanks for subscribing!')
  })

  return <>
    <div id="newsletter" class="bg">
      <div class="title">Keep up-to-date with Health & Wellness Adventure Retreats</div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Please enter email address" />
        <Submit label="Sign Up" class="btn white" bitKey="save" />
      </form>
      <Messages name="email" />
    </div>
  </>
}
