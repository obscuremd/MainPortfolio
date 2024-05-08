import Styles from "../../Shared/Styles";

const Research = ({text, title, title2, text2 }) => {

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
    <div className='md:pr-[20px] pr-[15px] md:pl-[40px] pl-[15px] w-full rounded-[24.195px] border-[1px] py-[25px] flex flex-col gap-4'>
        <h1 style={large}>{title}</h1>
        <p style={small}>{text}</p>
        
        <h1 style={large}>{title2}</h1>
        <p style={small}>{text2}</p>
        
    </div>
  )
}

export default Research
