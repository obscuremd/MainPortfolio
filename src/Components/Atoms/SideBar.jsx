import { Link } from "react-router-dom"
import Styles from "../../Shared/Styles"
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useState } from "react";
import Button from "../Sidebar/Button";
import { motion } from "framer-motion";

const SideBar = () => {

    const isMobile = window.innerWidth <= 600;
    const [active, setActive] = useState(0)
    const styles = { 
        backgroundColor: 'transparent', 
        fontSize: isMobile ? 10 : 25 
    }
    
  return (
    <div className="md:w-[220px] h-screen flex flex-col justify-between items-center py-[27.56px] border-r-[0.1px] backdrop-blur-md border-[#9d9fb534]">
        {/* header */}
        <Link to={'/'}>
            <button onClick={[()=>setActive(0), window.scrollTo({ top: 0, behavior: 'smooth' })]} className="font-bold md:w-[210px] w-[120px]" style={{fontSize: isMobile ? Styles.text.mobile.large : Styles.text.pc.large,}}>My Portfolio</button>
        </Link>

        {/* buttons: projects */}
        <div className="w-full flex flex-col items-start pl-[15px] gap-[46px]">
            
            {/* product Design */}
            <Link to={'/Product design'}>
                <Button name={'Product Design'} click={()=>setActive((1))} number={1} state={active} icon={<BrushRoundedIcon style={styles}/>}/>
            </Link>
            
            {/* Development */}
            <Link to={'/Development'}>
                <Button name={'Development'} click={()=>setActive((2))} number={2} state={active} icon={<LanguageRoundedIcon style={styles}/>}/>
            </Link>
            
            {/* Web Development */}
            <Link to={'/Game development'}>
                <Button name={'Game Dev'} click={()=>setActive((3))} number={3} state={active} icon={<SportsEsportsRoundedIcon style={styles}/>}/>
            </Link>

        </div>
        
        {/* buttons: profile */}
        <div className="w-full flex flex-col items-start pl-[15px] gap-[23px]">
            
            {/* Send a message */}
            <Link to={'/Send a Message'}>
                <Button name={'Send A Message'} click={()=>setActive((4))} number={4} state={active} icon={<MessageRoundedIcon style={styles}/>}/>
            </Link>
            
            {/* About Me */}
            <Link to={'/About Me    '}>
                <Button name={'About Me'} click={()=>setActive((5))} number={5} state={active} icon={<PersonRoundedIcon style={styles}/>}/>
            </Link>

        </div>


    </div>
  )
}

export default SideBar
