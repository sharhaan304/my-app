import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { educationDetails } from '@/data';



const Education = () => {
  return (
    <div className='py-20' id='education'>
      <h1 className='heading'>
        My path on {''}
        <span className='text-purple'>Education</span>
      </h1>
      <br></br>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards
          items={educationDetails}
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  );
};

export default Education;