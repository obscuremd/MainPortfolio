import Styles from "../../Shared/Styles";

const Category = ({click, state, number, name}) => {
    
    const isMobile = window.innerWidth <= 600;

  return (
    <button 
        onClick={click}
        className="md:py-[13.5px] py-[9px] md:px-[22.5px] px-[15px] border-[0.75px] rounded-[9.299px] font-bold hover:scale-110 capitalize" 
        style={{
            background: `${state}`==`${number}` ? 'linear-gradient(90deg, #010739 -11.47%, #9D9FB5 251.9%)' : 'transparent',
            color: `${state}`==`${number}` ? '#ffff' : '#FFFFFF80',
            fontSize: isMobile ? Styles.text.mobile.small : Styles.text.pc.small
            }}>
      {name}
    </button>
  )
}

export default Category
