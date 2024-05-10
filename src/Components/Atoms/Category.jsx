import { motion } from "framer-motion";
import Styles from "../../Shared/Styles";

const Category = ({click, state, number, name}) => {
    
    const isMobile = window.innerWidth <= 600;

  return (
    <motion.button
        initial={{x:'50%', opacity:0}}
        whileInView={{x:0, opacity:1, transition:{delay:0.6}}} 
        whileHover={{scale:1.05,boxShadow:'0 0 10px rgba(255,255,255,0.25)'}}
        onClick={click}
        className="md:py-[13.5px] py-[9px] md:px-[22.5px] px-[15px] border-[0.75px] rounded-[9.299px] font-bold capitalize" 
        style={{
            background: `${state}`==`${number}` ? 'linear-gradient(90deg, #010739 -11.47%, #9D9FB5 251.9%)' : 'transparent',
            color: `${state}`==`${number}` ? '#ffff' : '#FFFFFF80',
            fontSize: isMobile ? Styles.text.mobile.small : Styles.text.pc.small
            }}>
      {name}
    </motion.button>
  )
}

export default Category
