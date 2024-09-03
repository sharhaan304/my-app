import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { educationDetails } from '@/data';

const educationItems = [
  {
    quote:
      "I completed my GCE Advanced Level (A/L) at T/R.K.M Hindu College, an institution known for its commitment to academic excellence and cultural values. During my time there, I specialized in subjects that challenged and expanded my intellectual boundaries, preparing me for the next steps in my academic and professional journey.",
    name: "T/R.K.M Sri Koneswara Hindu College",
    title: "G.C.E A/L -> Grade 12-13",
    logo: "/hindu.svg", // Update the path to your logo image
  },
  {
    quote:
      "I am currently pursuing a Bachelor's degree in Artificial Intelligence at the University of Moratuwa, where I am gaining deep expertise in machine learning, data science, and intelligent systems.",
    name: "University of Moratuwa",
    title: "BSc(hons) in Artificial Intelligence -> Reading",
    logo: "/University_of_Moratuwa_logo.svg", // Update the path to your logo image
  },
  {
    quote:
      "I attended KCC for my primary and secondary education, which laid a solid foundation for my academic journey.",
    name: "KCC",
    title: "Grade 1-11",
    logo: "kcc.svg", // Update the path to your logo image
  },
];

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