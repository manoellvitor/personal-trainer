import React from 'react'
import personalTrainer from "../../assets/img/personal-trainer.jpg"

function About() {
  return (
    <div className='w-full md:h-[800px] h-[700px] shadow-sm shadow-slate-200 flex flex-row items-center justify-center gap-4'>
      <img
        src={personalTrainer}
        alt="Dark background"
        className='object-cover w-full md:h-[800px] h-[700px] absolute'
      />
      <div className="t-0 l-0 w-full bg-black md:h-[800px] h-[700px] absolute opacity-70 overflow-hidden"></div>
      <div className=' flex flex-col justify-center items-center z-[2]'>
        <div className='rounded-full overflow-hidden w-[400px] h-[400px] flex justify-center items-center'>
          <img src={personalTrainer} alt="John Doe personal trainer" className='object-cover' />
        </div>
        <h1 className='mt-4 font-logo text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider px-2'>John Doe</h1>
      </div>
      <div className='flex flex-row justify-center items-center w-full h-full gap-4 md:max-w-3xl z-[1]'>
        <div className='text-slate-200  text-lg px-4 leading-10 text-justify'>

          <p className='first-letter:ml-10'>
            John Doe is a certified personal trainer with over a decade of experience helping clients achieve their fitness goals. He has a passion for health and fitness and is dedicated to helping his clients live their best lives.
          </p>
          <p className='first-letter:ml-10'>
            John's approach to personal training is holistic, focusing not just on exercise, but also on nutrition, lifestyle, and mindset. He works closely with each of his clients to develop a personalized training plan that is tailored to their individual needs and goals. Whether you're looking to lose weight, build muscle, or simply improve your overall health and fitness, John can help you get there.
          </p>
          <p className='first-letter:ml-10'>
            In addition to his personal training services, John also offers group fitness classes, nutrition coaching, and online coaching services. He believes that fitness should be fun and accessible to everyone, and he strives to create a welcoming and inclusive environment in his classes and training sessions. With John's expertise and guidance, you can achieve your fitness goals and transform your life for the better.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About


