import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import ContactImage from '../../assets/img/contact-bg.jpg';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('personal-trainer-project', 'template_91qbcom', form.current, 'user_qYgoSatV1VaqrLsZ56CHw')
      .then((result) => {
        Swal.fire(
          'Good job!',
          'Your message was sent to our team!',
          'success'
        )
      }, (error) => {
        Swal.fire(
          'Ops!',
          'Something went wrong, please try again!',
          'error'
        )
      });
  };

  return (
    <div className='flex-1 mb-10 w-full relative shadow-sm shadow-slate-200 flex flex-col items-center justify-center'>
      <img
        src={ContactImage}
        alt=""
        className='object-cover absolute w-full h-full'
      />
      <div className="t-0 l-0 w-full bg-black  h-full md:h-full absolute opacity-70"></div>
      <div className='flex flex-col items-center w-full gap-4 z-[1] mt-10'>
        <h1 className='font-logo z-[2] text-slate-200 uppercase text-5xl font-bold text-center leading-tight tracking-wider sm:mt-20'>Get in touch</h1>
        <p className='text-slate-200 z-[2] text-center text-lg px-4'>Send us a message, we will get back to you as soon as we can.</p>

        <div className='md:mt-10 z-[2] mb-10'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
            <input
              className='p-4 bg-zinc-900 outline-none text-slate-200 w-[350px] md:w-[500px] rounded focus:outline-[#6833e4] '
              type="text"
              name="name"
              id="name"
              required
              placeholder='Enter your name' />

            <input
              className='p-4 bg-zinc-900 outline-none text-slate-200 w-[350px] md:w-[500px] rounded focus:outline-[#6833e4] '
              type="email"
              name="email"
              id="email"
              required
              placeholder='Enter your e-mail' />

            <input
              className='p-4 bg-zinc-900 outline-none text-slate-200 w-[350px] md:w-[500px] rounded focus:outline-[#6833e4] '
              type="text"
              name="number"
              id="number"
              placeholder='Enter your phone number' />

            <input
              className='p-4 bg-zinc-900 outline-none text-slate-200 w-[350px] md:w-[500px] rounded focus:outline-[#6833e4] '
              type="text"
              name="subject"
              id="subject"
              required
              placeholder='Subject' />

            <textarea
              className='p-4 bg-zinc-900 outline-none text-slate-200 w-[350px] md:w-[500px] rounded focus:outline-[#6833e4] resize-none h-[150px]'
              type="text"
              name="message"
              id="message"
              required
              placeholder='Type your message' />

            <input type='submit' href="/contact" className='rounded-md p-4 text-slate-200  bg-[#6833e4] hover:bg-[#3B2382] shadow-sm cursor-pointer transform ease-in-out duration-500 uppercase' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact