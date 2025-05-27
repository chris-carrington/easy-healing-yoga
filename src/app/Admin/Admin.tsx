import './Admin.css'
import { load } from '@ace/load'
import { Route } from '@ace/route'
import { Submit } from '@ace/submit'
import { Title } from '@solidjs/meta'
import { showToast } from '@ace/toast'
import { Messages } from '@ace/messages'
import type { ContentMap } from '@src/lib/types'
import { createOnSubmit } from '@ace/createOnSubmit'
import { createSignal, createEffect, Show } from 'solid-js'
import { createContentMap } from '@src/lib/createContentMap'
import { updateAdminSchema } from '@src/schemas/UpdateAdminSchema'
import { updateContentSchema } from '@src/schemas/UpdateContentSchema'
import { apiGetAdmin, apiGetSubscribers, apiUpdateAdmin, apiUpdateContent } from '@ace/apis'


export default new Route('/admin')
  .component(() => {
    const isAdmin = load(() => apiGetAdmin(), 'admin')

    return <>
      <Title>Admin</Title>

      <main class="admin">
        <Show when={isAdmin()?.data?.isAdmin} fallback={<AuthForm />}>
          <Subscribers />
          <ContentForms />
        </Show>
      </main>
    </>
  })


function AuthForm() {
  const onSubmit = createOnSubmit(async (fd) => {
    const body = updateAdminSchema.parse({password: Number(fd('password')) })
    await apiUpdateAdmin({ bitKey: 'password', body })
    window.location.reload()
  })

  return <>
    <form onSubmit={onSubmit}>
      <label>Password</label>
      <input name="password" type="password" />
      <Submit label="Save" bitKey="password" class="btn" />
    </form>
  </>
}



function ContentForms() {
  const content = createContentMap()

  return <>
    <ContentForm contentId={1} content={content} />
    <ContentForm contentId={2} content={content} />
    <ContentForm contentId={3} content={content} />
    <ContentForm contentId={4} content={content} />
    <ContentForm contentId={5} content={content} />
    <ContentForm contentId={6} content={content} />
    <ContentForm contentId={7} content={content} />
    <ContentForm contentId={8} content={content} />
    <ContentForm contentId={9} content={content} />
    <ContentForm contentId={10} content={content} />
    <ContentForm contentId={11} content={content} />
    <ContentForm contentId={12} content={content} />
    <ContentForm contentId={13} content={content} />
    <ContentForm contentId={14} content={content} />
    <ContentForm contentId={15} content={content} />
    <ContentForm contentId={16} content={content} />
    <ContentForm contentId={17} content={content} />
    <ContentForm contentId={18} content={content} />
    <ContentForm contentId={19} content={content} />
    <ContentForm contentId={20} content={content} />
    <ContentForm contentId={21} content={content} />
    <ContentForm contentId={23} content={content} />
    <ContentForm contentId={24} content={content} />
    <ContentForm contentId={25} content={content} />
    <ContentForm contentId={26} content={content} />
    <ContentForm contentId={27} content={content} />
    <ContentForm contentId={22} content={content} />
  </>  
}


function ContentForm({ contentId, content }: { contentId: number, content: ContentMap }) {
  const onSubmit = createOnSubmit(async (fd) => {
    const body = updateContentSchema.parse({id: Number(fd('id')), content: fd('content') })
    await apiUpdateContent({ bitKey: String(body.id), body })
    showToast('success', 'Saved!')
  })
    
  return <>
    <form onSubmit={onSubmit}>
      <input name="id" value={String(contentId)} class="hide" />
      <label>{content().get(contentId)?.title}</label>
      <textarea name="content">{content().get(contentId)?.content}</textarea>
      <Messages name="content" />
      <Submit label="Save" bitKey={String(contentId)} class="btn" />
    </form>
  </>
}


function Subscribers() {
  let [subscribers, setSubscribers] = createSignal('')
  const subscribersLoad = load(() => apiGetSubscribers(), 'subscribers')

  createEffect(() => {
    const _subscribersLoad = subscribersLoad()

    if (!_subscribersLoad || !_subscribersLoad?.data?.length) return

    setSubscribers(_subscribersLoad.data.map(d => d.email).join(', '))
  })

  return <>
    <form>
      <label>Subscribers</label>
      <textarea>{subscribers()}</textarea>
    </form>
  </>
}
