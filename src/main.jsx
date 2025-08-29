import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-full flex justify-center h-fit dark:bg-[#242424] bg-[#ffffff]'>
      <div className='w-full md:max-w-2xl flex flex-col px-4 md:px-0'>
        <Navbar/>
        <App />
        <Footer/>
        <Cursor/>
      </div>
    </div>
  </StrictMode>
)