import { motion } from 'framer-motion';
import Styles from '../../Shared/Styles'

const Button = ({click, number, icon, state, name, styles}) => {

    const isMobile = window.innerWidth <= 600;

  return (
    <motion.button 
        initial={{x:'100%', opacity:0}}
        animate={{x:0, opacity:1}}
        whileHover={{backgroundColor:'#9D9FB540'}}
        onClick={click}
        style={{
            backgroundColor: `${state}` === `${number}` ? '#9D9FB580' :'#D9D9D900', 
            borderWidth: `${state}` ===`${number}` ? 0.75 : 0,
            fontSize: isMobile ? Styles.text.mobile.small : Styles.text.pc.small,
        }} 
        className="flex font-bold  md:py-[13.5px] py-1 md:px-[23.25px] px-1 rounded-[9.3px] gap-[8.25px] items-center ">
        {icon}{name}
    </motion.button>
  )
}

export default Button
