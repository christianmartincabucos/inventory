import Image from 'next/image';
import React from 'react'

type Props = {
    icon: string;
    cardName: string;
    cardValue: number;
    cardClass: string;
}

const CardAverage = (props: Props) => {
  return (
    <>
      <div className="block max-w-sm p-6 bg-white rounded-xl drop-shadow-xl sm:rounded-lg hover:bg-gray-100 dark:bg-gray-800">
        <h6 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Total {props.cardName}</h6>
        <div className='flex justify-between items-center'>
          <h6 className="text-4xl font-medium">
            ${props.cardValue}
          </h6>
          <span>{props.icon}</span>
        </div>
      </div>
    </>
  )
}

export default CardAverage