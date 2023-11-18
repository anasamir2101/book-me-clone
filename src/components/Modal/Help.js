import React from 'react';
import Modal from 'react-modal';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';

Modal.setAppElement('#root');

const Help = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='w-[80vw] bg-white mx-auto p-4 my-32 rounded-md shadow-md shadow-black'
    >
      <div className='text-center'>
        <p className='text-blue-700 text-sm font-semibold'>Contact Us</p>
        <h1 className='text-3xl font-bold mt-3'>We’d love to hear from you</h1>
        <p className='text-gray-500 text-sm mt-3'>
          Our friendly team is always here to support.
        </p>
      </div>
      <div className='flex gap-4 justify-center mt-14 mb-14'>
        <div className='bg-blue-100 w-[300px] rounded-lg pl-4 pt-4'>
          <div className='flex justify-center text-white  py-3 px-2 bg-blue-600 w-12 rounded-lg'>
            <HiOutlineMail size={25} className='' />
          </div>
          <p className='mt-8 text-sm text-blue-800'>Email us</p>
          <p className=' text-sm text-blue-800'>We're here to help</p>
          <p className='mt-4 mb-8 text-sm text-blue-800'>conntact@bookme.pk</p>
        </div>
        <div className='bg-blue-100 w-[300px] rounded-lg pl-4 pt-4'>
          <div className='flex justify-center text-white  py-3 px-2 bg-blue-600 w-12 rounded-lg'>
            <AiOutlineHeart size={25} className='' />
          </div>
          <p className='mt-8 text-sm text-blue-800'>We Care</p>
          <p className=' text-sm text-blue-800'>
            We truly care about your experience
          </p>
          <p className='mt-4 mb-8 text-sm text-blue-800'>
            Let us know what you have to say
          </p>
        </div>
        <div className='bg-blue-100 w-[300px] rounded-lg pl-4 pt-4'>
          <div className='flex justify-center text-white  py-3 px-2 bg-blue-600 w-12 rounded-lg'>
            <HiOutlineLocationMarker size={25} className='' />
          </div>
          <p className='mt-8 text-sm text-blue-800'>Visit us</p>
          <p className=' text-sm text-blue-800'>
            Our team is here to serve you
          </p>
          <p className='mt-4 mb-8 text-sm text-blue-800'>
            1st Floor,Mall 1, Main Boulevard, Gulberg III,Lahore,Punjab
            54660,Pakistan
          </p>
        </div>
        <div className='bg-blue-100 w-[300px] rounded-lg pl-4 pt-4'>
          <div className='flex justify-center text-white  py-3 px-2 bg-blue-600 w-12 rounded-lg'>
            <IoCallOutline size={25} className='' />
          </div>
          <p className='mt-8 text-sm text-blue-800'>Call us</p>
          <p className=' text-sm text-blue-800'>We're here for you 24/7</p>
          <p className='mt-4 mb-8 text-sm text-blue-800'>042-111-BOOKME</p>
        </div>
      </div>
    </Modal>
  );
};

export default Help;
