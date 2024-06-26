import { motion } from 'framer-motion'
import pro from '../assets/pro.jpg'
import res from '../assets/resume.pdf'
motion

const AboutMe = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-full h-screen md:p-10 p-5 items-center justify-between">
        {/* text */}
        <div className='flex flex-col gap-5 md:w-[50%] justify-center text-center md:text-start'>
          <motion.p initial={{x:'50%', opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.1}} className='md:text-5xl text-xl'>Erhenede Mudiaga Daniel</motion.p>
          <motion.p initial={{x:'50%', opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.2}} className='md:text-2xl text-sm'>Creative Engineer</motion.p>
          <motion.p initial={{x:'50%', opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.3}} className='md:text-base text-xs'>As a dedicated creative engineer, I am fueled by a profound passion for the craft and an extensive skill set that encompasses React.js, React Native Expo, Node.js, Solidity, Unity, Figma, and beyond. With years of hands-on experience in these cutting-edge technologies, I have honed my abilities to deliver innovative solutions that push the boundaries of possibility. My relentless pursuit of excellence in the realms of creativity and innovation is what motivates me to continually explore new avenues of learning and growth. I firmly believe that my diverse background and unwavering commitment to staying at the forefront of emerging trends make me a valuable asset to any team or project.</motion.p>

          <div className='flex gap-5 self-center md:self-start'>
            
            <motion.a 
              initial={{x:'50%', opacity:0}} 
              animate={{x:0, opacity:1}} 
              transition={{delay:0.4}}
              href="mailto:md.erhenede@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer">
               <button className="md:px-[22.5px] px-[14px] md:py-[13.5px] py-[9px] border-[2.25px] bg-white text-[#121D31] rounded-[9.299px] font-bold text-xs md:text-[15px]">Contact Me</button>
            </motion.a>


            <motion.a 
              initial={{x:'50%', opacity:0}} 
              animate={{x:0, opacity:1}} 
              transition={{delay:0.5}}
              href={res} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{background:'none'}}>
                <button className="md:px-[22.5px] px-[14px] md:py-[13.5px] py-[9px] border-[2.25px] rounded-[9.299px] font-bold text-xs md:text-[15px]">Resume</button>
            </motion.a>
          
          </div>
        </div>
        
        {/* image */}
        <motion.div initial={{x:'50%', opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.6}} className='md:w-[30%] w-[50%]'>
          <img src={pro} alt="" className=' rounded-full' />
        </motion.div>
      
    </div>
  )
}

export default AboutMe
