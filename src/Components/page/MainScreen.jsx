import Slider from "../Atoms/Slider"

import Category from "../Atoms/Category"
import { useEffect, useState } from "react"
import Tools from "../Atoms/Tools"
import Projects from "../Atoms/Projects"
import Styles from "../../Shared/Styles"
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from "../../../Config/firebaseConfig"
import resume from '../../assets/resume.pdf'
import loader from '../../assets/spinner2.svg'



const MainScreen = ({details,stack, collections, cat, tool}) => {

  const category = cat
  const isMobile = window.innerWidth <= 600;
  const styles = { 
      backgroundColor: 'transparent', 
      fontSize: isMobile ? Styles.text.mobile.large : Styles.text.pc.large,
      fontWeight: 'bold', 
  }
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const tools= tool

  const [active, setActive] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)
  const currentDataImage = data[imageIndex]


  const db = getFirestore(app);

  

  useEffect(() => {
    const getData = async () => {
      try {
        const datas = await getDocs(collection(db, `${collections}`));
        const newData = datas.docs.map((doc) => doc.data());
        setData(newData);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [collections]); // Refetch data when collections change
  
  

  


  // image change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevImageIndex) => (prevImageIndex + 1) % data.length); // Adjust the modulo based on your array length
    }, 5000); // 1000 milliseconds = 1 second

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [data.length]); // Empty dependency array ensures the effect runs once on mount



    // Render loading spinner if data is still loading
    if (loading) {
      return (
      <div className="h-screen flex justify-center items-center">
        <img src={loader} alt="" className="w-[25%]"/>
      </div>
      )
    }

  return (
    <div className="md:mb-20 mb-10">
      
      {/* image slider */}
      <Slider 
        image={currentDataImage.card} 
        hero={currentDataImage.long} 
        description={currentDataImage.overview} 
        title={'Erhenede Mudiaga Daniel'} 
        details={details} link={"mailto:md.erhenede@gmail.com"} 
        text={'Contact Me'}
        important={'Resume'}
        important_link={resume}/>

      {/*content  */}
      <div className="md:pl-[54px] pl-[20px]">
        
        {/* category */}
        <div className="flex flex-wrap md:gap-[22.5px] gap-[12px]">
          {category.map((item, index)=>(
            <Category 
              name={item} 
              key={index} 
              click={()=>setActive(index)} 
              state={index} number={active}/>
          ))}
        </div>
        
        {/* tools */}
        <div className="md:mt-[59.8px] mt-[41px] flex flex-col gap-[30.45px]">
          <p style={styles}>Tools</p>
          <div className="flex overflow-auto md:flex-wrap md:gap-11 gap-3 w-[90vw] md:w-full">
            {tools.map((item, index)=>(
              <Tools key={index} icon={item.icon} name={item.name} year={item.years} bar={item.bar}/>
            ))}
          </div>
        </div>
        
        
        {/* Projects */}
        <div className="mt-[33px] md:mt-[96.55px]">
          <p style={styles}>Projects</p>
          <div className="flex flex-wrap gap-[10px] md:gap-[50.25px] mt-[30.45px]"> 
            {data.map((item, index)=>(
              <Link 
                key={index} 
                to={`/${stack}Description/${item.title}`}>
                <Projects 
                  key={index} 
                  image={item.card} 
                  title={item.title} 
                  stack={item.tools[0].name} 
                  stack1={item.tools[1].name} 
                  stack2={item.tools[2].name}
                  />
              </Link>
            ))}       
          </div>
        </div>
      
      
      </div>
    </div>
  )
}

export default MainScreen
