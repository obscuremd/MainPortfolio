import AudioFileRoundedIcon from '@mui/icons-material/AudioFileRounded';
import Styles from '../../Shared/Styles';


const Tools = ({name, year, bar, icon}) => {
    
    const isMobile = window.innerWidth <= 600;

    const textBig={
        fontSize:isMobile ? Styles.text.mobile.small :Styles.text.pc.small,
        fontWeight: 900
    }
    const textSmall = {
        fontSize: isMobile ? 5.56 : 9.27,
        fontWeight: 900,
      };

  return (
    <div className='md:w-[200px] w-[125px]'>

        {/* tools */}
        <div className='flex md:w-full w-[120px] border-[0.75px] rounded-[9.3px] md:py-[7.3px] py-1 md:px-[10.5px] px-1 items-center '>
            {/* <AudioFileRoundedIcon style={{fontSize:isMobile? 27.662 :50, background:'transparent'}}/> */}
            <img 
                src={icon} 
                alt="" 
                className='md:p-2 p-1 bg-cover bg-white md:rounded-[9.3px] rounded-[4px] mr-[5%]' 
                style={{width:isMobile? 27 :50,}}/>

            <div className='w-full'>
                <p style={textBig} className='capitalize'>{name}</p>
                <p style={textSmall}>+{year} YEARS OF EXPERIENCE</p>
                {/* bar */}
                <div className='md:w-full w-[75px] md:h-[12px] h-[5px] border-[1px] rounded-full bg-white flex justify-center, items-center mt-[9.7px]' >
                    <div style={{width:`${bar}%`, background: 'linear-gradient(90deg, #6B77DD , #394096 251.9%)'}} className='md:h-[10px] h-[2.5px] rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools
