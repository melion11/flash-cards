import './styles/index.scss'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { createRoot } from 'react-dom/client'

import { App } from './app'

createRoot(document.getElementById('root')!).render(<App />)
