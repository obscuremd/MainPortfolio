import MainScreen from "../Components/page/MainScreen"

function Development() {
  const tools=[
    {
      icon:'https://www.svgrepo.com/show/361494/figma-logo.svg',
      name:'figma',
      years: '7',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/503536/react.svg',
      name:'ReactJs',
      years: '5',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/353723/expo-icon.svg',
      name:'React Native',
      years: '5',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/508935/nodejs02.svg',
      name:'NodeJs',
      years: '4',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/369594/tailwind.svg',
      name:'TailWind',
      years: '7',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/378410/django-fill.svg',
      name:'DJango',
      years: '7',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/473729/mongodb.svg',
      name:'MongoDb',
      years: '7',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/394296/mysql.svg',
      name:'MySQL',
      years: '7',
      bar: 70
    },
    {
      icon:'https://www.svgrepo.com/show/374088/solidity.svg',
      name:'Solidity',
      years: '7',
      bar: 70
    },
    
  ]
  return (
    <div>
      <MainScreen 
        details={'Full stack developer'} 
        collections={'Development'}
        toolUsed={tools} 
        stack={'Dev'} 
        cat={[
          'fullstack development',
          'web development', 
          'mobile development',
          'blockchain development'
          ]}
        tool={tools}/>
          
      
    </div>
  )
}

export default Development
