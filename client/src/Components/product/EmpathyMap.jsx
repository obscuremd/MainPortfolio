import Styles from "../../Shared/Styles";
import Maps from "./Maps";

const EmpathyMap = ({ title, data }) => {


    const imports = data

    console.log(imports);


    const isMobile = window.innerWidth <= 600;
    
    const small = { 
        backgroundColor: 'transparent', 
        fontSize: isMobile ? Styles.text.mobile.small : Styles.text.pc.small,
        fontWeight: 'bold', 
    }
    const large = { 
        backgroundColor: 'transparent', 
        fontSize: isMobile ? Styles.text.mobile.large : Styles.text.pc.large,
        fontWeight: 'bold', 
        textTransform: 'capitalize',
    }
  return (
    <div className=' w-full rounded-[24.195px] border-[1px] p-[15px] md:p-[20px] flex flex-col gap-[22.9px]'>
        <h1 style={large}>{title}</h1>
        <div className="flex flex-wrap md:gap-[9.75px] gap-[6px] items-center justify-center">

            {imports.map((item, index)=>(
                <Maps key={index} text={item} title={index}/>
            ))}
            
        </div>

    </div>
  )
}

export default EmpathyMap
