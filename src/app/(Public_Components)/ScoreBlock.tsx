import React from 'react'
type ScoreBlockProps = {
  score: number
}
const ScoreBlock = ({score}:ScoreBlockProps) => {
  return (
    <div className='w-[650px] h-[200px] rounded-xl flex flex-row items-center justify-between p-5 border-[3px] border-white'>
      <div className='flex flex-col'>
        <h1 className='text-5xl font-bold text-white'>ROCK</h1>
        <h1 className='text-5xl font-bold text-white'>PAPER</h1>
        <h1 className='text-5xl font-bold text-white'>SCISSORS</h1>
      </div>
      <div className='bg-white flex flex-col items-center w-[200px] py-5 rounded-lg h-full'>
        <h1 className='text-[#727ec5] text-2xl font-bold'>SCORE</h1>
        <h1 className='text-7xl font-bold text-[#565168]'>{score}</h1>
      </div>
    </div>
  )
}

export default ScoreBlock
