import Styles from "../../Shared/Styles";

const ColorBox = ({text, title,color }) => {

    const colors = color
   
    const isMobile = window.innerWidth <= 600;
    const big = { 
        backgroundColor: 'transparent', 
        fontSize: isMobile ? Styles.text.mobile.large : Styles.text.pc.large,
        fontWeight: 'bold',
    }
  return (
    <div className='md:pr-[20px] pr-[15px] md:pl-[40px] pl-[15px] w-full rounded-[24.195px] border-[1px] md:py-[25px] py-[17px] flex flex-col gap-4'>
        <p style={big}>Color Pallette</p>
        <div className="flex gap-[15px] flex-wrap">
            {colors.map((item, index)=>(
                <div 
                    key={index} 
                    style={{ 
                        backgroundColor: `#${item}`, 
                        color:item === 'FFFFFF'? '#709591' : '#fff',
                        fontSize: isMobile ? Styles.text.mobile.small : Styles.text.pc.small,
                        fontWeight: 'bold',
                    }} 
                    className="border-[1px] p-[8px] rounded-[24.195px]"
                    >#{item}</div>    
            ))}
        </div>
    </div>
  )
}

export default ColorBox
