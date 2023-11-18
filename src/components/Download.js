import React from 'react';
import AppStore from '../assets/AppStore.svg';
import Googleplay from '../assets/google-play.svg';
import Mobile from '../assets/mobile.svg';

const Download = () => {
  return (
    <>
      <div className='bg-blue-500 ml-[280px] mr-[30px] rounded-lg pt-8 px-4 mb-4 lg:ml-[257px] lg:mr-[7px] lg:flex lg:justify-between items-center lg:px-12'>
        <div>
          <div className='text-white'>
            <h1 className='text-3xl  font-bold pb-6'>Download our app</h1>
            <p className='pb-4'>
              Get amazing deals and bundles on Bookme Application
            </p>
          </div>

          <div className='flex gap-x-3 pb-6'>
            <img src={AppStore} alt='' className='cursor-pointer' />
            <img src={Googleplay} alt='' className='cursor-pointer' />
          </div>

          <div className='flex gap-x-2'>
            <div>
              <input
                type='number'
                name=''
                id=''
                placeholder='Enter your phone number'
                className='w-[350px] h-[40px] rounded-lg px-3 outline-none'
              />
            </div>
            <button className='h-[40px] lg:h-[80px] xl:h-[40px] bg-blue-400 text-white rounded-lg px-3'>
              Get Download link
            </button>
          </div>
          <p className='text-white pt-2'>Your privacy is important for us</p>
        </div>
        <div className='grid justify-center'>
          <img src={Mobile} alt='' />
        </div>
      </div>
    </>
  );
};

export default Download;
