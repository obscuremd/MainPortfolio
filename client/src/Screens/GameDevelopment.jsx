import MainScreen from "../Components/page/MainScreen"

const tools=[
  {
    icon:'https://cdn.worldvectorlogo.com/logos/unity-69.svg',
    name:'Unity',
    years: '10',
    bar: 70
  },
  {
    icon:'https://www.svgrepo.com/show/508771/blender.svg',
    name:'Blender',
    years: '10',
    bar: 75
  },
  {
    icon:'https://www.svgrepo.com/show/508752/photoshop.svg',
    name:'Photoshop',
    years: '9',
    bar: 80
  },
  {
    icon:'https://www.svgrepo.com/show/341856/godot-engine.svg',
    name:'Godot',
    years: '5',
    bar: 80
  },
  {
    icon:'https://cdn.worldvectorlogo.com/logos/c--4.svg',
    name:'C#',
    years: '5',
    bar: 80
  },
  {
    icon:'https://cdn.worldvectorlogo.com/logos/substance-painter.svg',
    name:'Substance 3d',
    years: '5',
    bar: 80
  },
]

function GameDevelopment() {
  return (
    <div>
      <MainScreen 
        details={'Game developer'} 
        stack={'Game'} 
        collections={'Game development'} 
        cat={[
          'concept artist', 
          '3d modeler',
          'animator'
          ]}
        tool={tools}/>
      
    </div>
  )
}

export default GameDevelopment
