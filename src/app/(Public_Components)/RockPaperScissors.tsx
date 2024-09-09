import React from 'react'
import RockCircle from './RockCircle'
import PaperCircle from './PaperCircle'
import ScissorsCircle from './ScissorsCircle'
type RockPaperScissorsProps ={
    onClick: (choice:{
        name: string;
        color: string;
        image: string;
    }) => void
}
const RockPaperScissors = ({onClick}:RockPaperScissorsProps) => {
  return (
    <div className='w-[500px] h-[300px]  flex flex-col justify-center'>
      <div className=' w-full flex flex-row justify-between mt-28'>
        <PaperCircle onClick={() => onClick({color:"#5470f2",image:"/icon-paper.svg",name:"Paper"})} />
        <ScissorsCircle  onClick={() => onClick({color:"#eba51e",image:"/icon-scissors.svg",name:"Scissor"})}/>
      </div>
      <div className='  w-full flex items-center justify-center'> 
        <RockCircle onClick={() => onClick({color:"#d93a55",image:"/icon-rock.svg",name:"Rock"})}/>
      </div>
    </div>
  )
}

export default RockPaperScissors
