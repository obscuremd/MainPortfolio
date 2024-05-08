import Styles from "../../Shared/Styles"


const Slider = ({hero,image, description,title, details,link, text, important, important_link}) => {

    const isMobile = window.innerWidth <= 600;
    const textClass = isMobile ? Styles.text.mobile : Styles.text.pc;
    const textLarge = { backgroundColor: 'transparent', fontSize: textClass.large };
    const textSmall = { backgroundColor: 'transparent', fontSize: textClass.small };


  return (
    <div>
        {/* hero */}
        <div style={{   backgroundImage: `url(${hero})`,
                        backgroundSize: 'cover', // This will make the background image cover the entire container
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: isMobile ? 'right' : 'center',
                    }} 
            className="w-full h-[535px]">
            <div style={{ background: 'linear-gradient(to top, #121D31, #121D31BF)'}} className="w-full h-[535px] md:pt-0 pt-[87px] md:pl-[54px] md:pr-[227px] px-[20px] md:px-0 flex flex-col md:flex-row items-center md:items-start md:gap-[69.75px] gap-[29px]">
                {/* image */}
                <img src={image} className="w-[175px] md:w-[300.75px] h-[179px] md:h-[306px] object-cover rounded-[24.195px]"/>
                {/* text */}
                <div className="flex flex-col" style={{background:'none'}}>
                    <p style={textLarge} className="font-bold capitalize" >{title}</p>
                    <p style={textSmall} className="font-bold , md:mt-3 mt-[10px]">{details}</p>
                    <p style={textSmall} className="font-bold , md:mt-5 mt-[10px] h-[10em] overflow-scroll">{description}</p>
                    <div className="md:mt-[24.25px] mt-[19px] flex gap-[10px]" style={{background:'none'}}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <button className="md:px-[22.5px] px-[14px] md:py-[13.5px] py-[9px] border-[2.25px] bg-white text-[#121D31] rounded-[9.299px] font-bold text-[9px] md:text-[15px]">{text}</button>
                        </a>
                        <a href={important_link} target="_blank" rel="noopener noreferrer" style={{background:'none'}}>
                            <button className="md:px-[22.5px] px-[14px] md:py-[13.5px] py-[9px] border-[2.25px] rounded-[9.299px] font-bold text-[9px] md:text-[15px]">{important}</button>
                        </a>
                        
                    </div>
                </div>
            </div>         
        </div>
      
    </div>
  )
}



export default Slider
