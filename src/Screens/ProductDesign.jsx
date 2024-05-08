import MainScreen from "../Components/page/MainScreen"

const tools=[
  {
    icon:'https://www.svgrepo.com/show/361494/figma-logo.svg',
    name:'figma',
    years: '7',
    bar: 90
  },
  {
    icon:'https://www.svgrepo.com/show/508752/photoshop.svg',
    name:'photoshop',
    years: '12',
    bar: 75
  },
  {
    icon:'https://www.svgrepo.com/show/508747/indesign.svg',
    name:'InDesign',
    years: '5',
    bar: 50
  },
  {
    icon:'https://www.svgrepo.com/show/503151/adobe-xd.svg',
    name:'Adobe XD',
    years: '10',
    bar: 95
  },
  {
    icon:'https://www.svgrepo.com/show/510354/wordpress.svg',
    name:'WordPress',
    years: '3',
    bar: 65
  },
  {
    icon:'https://www.svgrepo.com/show/369706/adobe-illustrator.svg',
    name:'Illustrator',
    years: '3',
    bar: 65
  },
  {
    icon:'https://www.svgrepo.com/show/394569/wix.svg',
    name:'Wix',
    years: '3',
    bar: 65
  },

]

function ProductDesign() {
  return (
    <div className="w-full">
      <MainScreen 
        details={'Product Designer'} 
        stack={'Product'} 
        collections={'Product design'}
        cat={[
          'web design',
          'mobile design',
          'web 3 design', 
          'product design',
          'logo design'
          ]}
          tool={tools}/>
    </div>
  )
}

export default ProductDesign