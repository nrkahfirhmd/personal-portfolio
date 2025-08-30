import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' w-full flex justify-center h-fit dark:bg-[var(--dark-bg)] bg-[var(--light-bg)] dark:text-[var(--dark-fg)] text-[var(--light-fg)]'>
      <div className='w-full flex flex-col px-4'>
        <Navbar/>
        <App />
        <Footer/>
        <Cursor/>
      </div>
    </div>
  </StrictMode>
)