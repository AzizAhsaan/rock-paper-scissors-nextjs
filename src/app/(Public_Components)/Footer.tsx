import { Button } from '@/components/ui/button';
import ParentDialog from '@/components/ui/ParentDialog';
import Image from 'next/image';
import React from 'react'


const Footer = () => {
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <footer className="w-full flex items-center justify-end">
    <ParentDialog  DialogTriggerComponent={
      <Button className="bg-transparent border border-white  px-8 py-3">
        RULES
      </Button>
    } title="RULES" setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className='h-[300px] w-full flex items-center justify-center'>
        <Image src="/image-rules.svg" width={300} height={300} alt='Image rulres' /> 

        </div>
    </ParentDialog>
  </footer>
  )
}

export default Footer