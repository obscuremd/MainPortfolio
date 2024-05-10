import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { lazy, Suspense, useState } from 'react'
import Loader from './assets/spinner2.svg'

const Homepage = lazy(()=> import('./Screens/HomePage'))
const ProductDesign = lazy(()=> import('./Screens/ProductDesign'))
const GameDevelopment = lazy(()=> import('./Screens/GameDevelopment'))
const Development = lazy(()=> import('./Screens/Development'))
const SideBar = lazy(()=> import('./Components/Atoms/SideBar'))
const AboutMe = lazy(()=> import('./Screens/AboutMe'))
const SendAMessage = lazy(()=> import('./Screens/SendAMessage'))
const ProductDescription = lazy(()=> import('./Screens/Description/ProductDescription'))
const DevDescription = lazy(()=> import('./Screens/Description/DevDescription'))
const GameDescription = lazy(()=> import('./Screens/Description/GameDescription'))



const App = () => {
  
  const isMobile = window.innerWidth <= 600;
  const styles = { 
      backgroundColor: 'transparent', 
      fontSize: isMobile ? 20 : 25 
  }
  const [navbar, setNavbar]= useState(isMobile?false:true)
  return (
    
    <div className='bg-[#121D31]'  >
      <BrowserRouter>
        <Suspense fallback={<div className='container h-screen flex justify-center items-center'><img src={Loader} className='w-8'/></div>}>
          <div className='flex relative w-full'>
            {navbar && 
              <div className='fixed z-10'>
                <SideBar/>
              </div>
                }        
              <button onClick={()=>setNavbar(!navbar)} className='fixed md:top-[33px] md:left-[14px] z-20' >
                <MenuOpenRoundedIcon style={styles}/>
              </button>
              <div style={{marginLeft: navbar === true && !isMobile ? 221 : 0}} className='w-full h-full'>
                
                  <Routes>
                      <Route path='/' element={<Homepage/>}/>
                      <Route path='/Product design' element={<ProductDesign/>}/>
                      <Route path='/Game development' element={<GameDevelopment/>}/>
                      <Route path='/Development' element={<Development/>}/>
                      <Route path='/About Me' element={<AboutMe/>}/>
                      <Route path='/Send a Message' element={<SendAMessage/>}/>
                      <Route path='/ProductDescription' element={<ProductDescription/>}/>
                      <Route path='/ProductDescription/:name' element={<ProductDescription/>}/>
                      <Route path='/DevDescription' element={<DevDescription/>}/>
                      <Route path='/DevDescription/:name' element={<DevDescription/>}/>
                      <Route path='/GameDescription' element={<GameDescription/>}/>
                      <Route path='/GameDescription/:name' element={<GameDescription/>}/>
                  </Routes>
              </div>
          </div>
        </Suspense>
      </BrowserRouter>
      

    </div>

  )
}

export default App
