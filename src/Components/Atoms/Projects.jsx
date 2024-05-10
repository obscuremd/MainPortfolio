import { motion } from "framer-motion";
import Styles from "../../Shared/Styles";


const Projects = ({image,stack,stack1,stack2,title }) => {

  // const navigate = useNavigation()
  const isMobile = window.innerWidth <= 600;
  const styles = { 
      backgroundColor: 'transparent', 
      fontSize: isMobile ? Styles.text.mobile.small : Styles.text.pc.small,
      fontWeight: 'bold', 
  }
  const style2 = { 
      backgroundColor: 'transparent', 
      fontSize: isMobile ? Styles.text.mobile.large : Styles.text.pc.large,
      fontWeight: 'bold', 
  }

  return (
    <motion.button
      whileHover={{scale:1.05}}
      initial={{x:'100%', opacity:0}}
      whileInView={{x:0, opacity:1, transition:{delay:1}}}
      className="flex flex-col md:w-[451px] w-[160px] md:h-[433px] h-[164px] bg-[#9D9FB540] border-[0.75px] md:rounded-[24.195px] rounded-[12.4px]">
      <img src={image} alt="" className="w-full h-[109px] md:h-[286.5px] md:rounded-[24.195px] rounded-[12.4px]" style={{objectFit:'cover', objectPosition:'center'}}/>
      <div style={{background:'transparent'}} className="h-full w-full flex flex-col justify-center items-start md:gap-[9.75px] gap-[2px] md:px-[24.5px] px-[5px]">    
        <p style={style2}>{title}</p>
        <div style={{background:'transparent'}} className=" flex gap-[2px] md:gap-[8.25px] ">
          <p style={styles} className="md:h-[51px] h-[19px] leading-[8px] px-[6px] md:px-[24px] md:border-[2.25px] border-[1px] flex justify-center items-center rounded-[9.299px] capitalize text-nowrap">{stack}</p>
          <p style={styles} className="md:h-[51px] h-[19px] leading-[8px] px-[6px] md:px-[24px] md:border-[2.25px] border-[1px] flex justify-center items-center rounded-[9.299px] capitalize text-nowrap">{stack1}</p>
          <p style={styles} className="md:h-[51px] h-[19px] leading-[8px] px-[6px] md:px-[24px] md:border-[2.25px] border-[1px] flex justify-center items-center rounded-[9.299px] capitalize text-nowrap">{stack2}</p>
        </div>
      </div>
      
    </motion.button>
  )
}

export default Projects

