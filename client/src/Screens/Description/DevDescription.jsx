import {useParams} from 'react-router-dom'
import Slider from '../../Components/Atoms/Slider';
import { useEffect, useState } from 'react';
import DescriptionBox from '../../Components/product/DescriptionBox';
import Tools from '../../Components/Atoms/Tools';
import Styles from '../../Shared/Styles';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../../../Config/firebaseConfig';
import EmpathyMap from '../../Components/product/EmpathyMap';
import List from '../../Components/product/List';
import loader from '../../assets/spinner2.svg'

const DevDescription = () => {
    
  const { name } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const db = getFirestore(app);


    const isMobile = window.innerWidth <= 600;
    const styles = { 
      backgroundColor: 'transparent', 
      fontSize: isMobile ? Styles.text.mobile.large : Styles.text.pc.large,
      fontWeight: 'bold', 
    }


    useEffect(() => {
      const getData = async () => {
          try {
              const datas = await getDocs(collection(db, 'Development'));
              const newData = datas.docs.map((doc) => doc.data());
              setData(newData);
              setLoading(false);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      getData();
  }, []); // Refetch data when collections change


    const openPreview = (imageUrl) => {
      setSelectedImage(imageUrl);
    };
  
    const closePreview = () => {
      setSelectedImage(null);
    };
    

    const selectedItem = data.find(item => item.title === name);

    // Render loading spinner if data is still loading
    if (loading) {
      return (
      <div className="h-screen flex justify-center items-center">
        <img src={loader} alt="" className="w-[25%]"/>
      </div>
      )
    }



  return (
    <div>
        {/* hero */}
        <Slider 
          hero={selectedItem.long} 
          image={selectedItem.card} 
          description={selectedItem.overview} 
          title={name} 
          text={'Check it Out'}
          link={selectedItem.link}
          important={'GitHub'}
          important_link={selectedItem.git}/>
        
        <div className='px-5 md:px-16 flex flex-col gap-[35px] md:gap-[68.05px]'>
        
            {/* gallary */}
            <div className='flex w-full overflow-scroll md:gap-[34.5px] gap-[12px] '>     
                    {selectedItem.gallery.map((item, index) =>(     
                        <img src={item} key={index} alt="" className='md:w-[450px] w-[150px] md:h-[450px] h-[150px] object-cover rounded-[24.195px]' onClick={()=>openPreview(item)}/>
                    ))}
            </div>
                 {/* full image */}
                 {selectedImage && 
                        <button className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center' onClick={closePreview}>
                            <div className='max-w-full max-h-full flex justify-center items-center bg-black bg-opacity-0'>
                              <img
                                  src={selectedImage}
                                  alt=''
                                  className='max-w-[70%] max-h-[70%] '
                              />
                              <button
                                  onClick={closePreview}
                                  className='absolute top-0 right-0 m-4 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75'
                              >
                                  Close
                              </button>
                            </div>
                        </button>
                }
        
            {/* tools */}
            <div className=" flex flex-col md:gap-[30.45px] ">
                <p style={styles}>Tools</p>
                <div className="flex overflow-auto md:flex-wrap md:gap-11 gap-3 w-[90vw] md:w-full">
                    {selectedItem.tools.map((item, index)=>(
                    <Tools key={index} icon={item.icon} name={item.name} bar={item.bar} year={item.experience}/>
                    ))}
                </div>
            </div>
            
            {/* project details */}
            <div className='flex flex-col gap-[24.75px]'>
              {/* grid */}
              <div className='md:grid flex flex-wrap md:grid-cols-2 gap-[24.75px]' >
                
                {/* column 1 */}
                <div className='flex flex-col gap-[24.75px]'>
                  <DescriptionBox title={'Description'} text={selectedItem.description}/>
                  <EmpathyMap title={'Features'} data={selectedItem.features} />
                </div>
                
                {/* column 2 */}
                <div className='flex flex-col gap-[24.75px]'>
                  <List title={'Challenges Faced'} data={selectedItem.challenges}/>
                  <List title={'solutions implemented'} data={selectedItem.solutions}/>
                </div>
              
              </div>
              
              <List title={'Lessons Learned'} data={selectedItem.lessons}/>
            </div>
        </div>
    </div>
  )
}

export default DevDescription
