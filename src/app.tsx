import './app.css'
import '@ace/toast.styles'
import '@ace/loadSpin.styles'
import { Suspense } from 'solid-js'
import { createApp } from '@ace/createApp'
import { ToastProvider } from '@ace/toast'
import { FEContextProvider } from '@ace/fe'
import { MetaProvider } from '@solidjs/meta'


export default createApp([ToastProvider, FEContextProvider, MetaProvider, Suspense])
