import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductDesign from './Screens/ProductDesign'
import GameDevelopment from './Screens/GameDevelopment'
import Development from './Screens/Development'
import SideBar from './Components/Atoms/SideBar'
import AboutMe from './Screens/AboutMe'
import SendAMessage from './Screens/SendAMessage'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import { useState } from 'react'
import ProductDescription from './Screens/Description/ProductDescription'
import DevDescription from './Screens/Description/DevDescription'
import GameDescription from './Screens/Description/GameDescription'
import Homepage from './Screens/HomePage'



const App = () => {
  
  const isMobile = window.innerWidth <= 600;
  const styles = { 
      backgroundColor: 'transparent', 
      fontSize: isMobile ? 20 : 25 
  }
  const [navbar, setNavbar]= useState(isMobile?false:true)
  return (
    
    <div >
      <BrowserRouter>
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
      </BrowserRouter>
      

    </div>

  )
}

export default App
