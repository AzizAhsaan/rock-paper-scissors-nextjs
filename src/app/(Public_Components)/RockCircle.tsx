    import Image from 'next/image'
import React from 'react'
type RockCircleProps ={
  onClick: () => void
}
    const RockCircle = ({onClick}:RockCircleProps) => {
    return (
<div onClick={onClick} className="bg-[#d93a55] w-48 h-48 rounded-full flex items-center justify-center">
  <div className="shadow-inner  p-4 w-40 h-40 rounded-full border-t-[7px] border-[#b9bed3a9] bg-white flex items\ justify-center">
    <Image src="/icon-rock.svg" width={100} className='w-[70px] h-[70px] my-auto' height={100} alt='icon-rock.svg'/> 
  </div>
</div>
    )
    }

    export default RockCircle
