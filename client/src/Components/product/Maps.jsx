import Styles from '../../Shared/Styles'

const Maps = ({text, title}) => {
    const isMobile = window.innerWidth <= 600;

    const small = { 
        backgroundColor: 'transparent', 
        fontSize: isMobile ? Styles.text.mobile.small : Styles.text.pc.small,
        fontWeight: 'bold', 
    }
    
  return (
    <div style={small} className="border-[1px] p-4 rounded-[24.195px] w-[48%] h-[17em] overflow-scroll flex flex-col md:gap-[22px] gap-2">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  )
}

export default Maps
