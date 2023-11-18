import React from 'react';
import { MdDownloading } from 'react-icons/md';
import { PiHeadsetLight } from 'react-icons/pi';
import { PiCalendarCheck } from 'react-icons/pi';

const Phases = () => {
  return (
    <div className='ml-[260px] mt-[50px] flex gap-x-2 mr-3'>
      <div className='w-[27rem] border-2 rounded-2xl p-2 flex items-center gap-x-4 hover:cursor-pointer transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg'>
        <div>
          <i className=''>
            <MdDownloading
              size={50}
              className='bg-blue-200 text-blue-500 border-2 rounded-full p-2'
            />
          </i>
        </div>
        <div>
          <h1 className='text-xl mb-1'>Download Bookme App</h1>
          <p>Find the best deals on our app</p>
        </div>
      </div>

      <div className='w-[27rem] border-2 rounded-2xl p-2 flex items-center gap-x-4 hover:cursor-pointer transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg'>
        <div>
          <i className=''>
            <PiHeadsetLight
              size={50}
              className='bg-blue-200 text-blue-500 border-2 rounded-full p-2  '
            />
          </i>
        </div>
        <div>
          <h1 className='text-xl mb-1'>Help Center</h1>
          <p>Connect with our support team</p>
        </div>
      </div>
      <div className='w-[27rem] border-2 rounded-2xl p-2 flex items-center gap-x-4 hover:cursor-pointer transition-transform hover:transform hover:-translate-y-1 hover:shadow-lg'>
        <div>
          <i className=''>
            <PiCalendarCheck
              size={50}
              className='bg-blue-200 text-blue-500 border-2 rounded-full p-2  '
            />
          </i>
        </div>
        <div className=''>
          <h1 className='text-lg mb-1'>Manage Bookings</h1>
          <p>View and manage your bookings</p>
        </div>
      </div>
    </div>
  );
};

export default Phases;
