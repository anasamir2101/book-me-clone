import React from 'react';
import { LuSettings } from 'react-icons/lu';
const Use = () => {
  return (
    <>
      <div className='mt-[50px] ml-[250px] bg-gray-900 text-white'>
        <div className='pl-6 pt-10'>
          <h1 className='text-2xl font-bold'>Why Use Bookme?</h1>
          <p className='text-xl'>We provide the best deals in Pakistan</p>
        </div>
        <div className='main'>
          <div className='flex pt-8 pl-8 gap-x-4'>
            <div>
              <i>
                <LuSettings
                  size={30}
                  className='bg-gray-600 border-2 rounded-full p-2 mt-3 '
                />
              </i>
            </div>
            <div>
              <h1 className='text-xl pb-2'>More for Less</h1>
              <p>
                We offer e-tickets with exceptional discounted deals across the
                country
              </p>
            </div>
          </div>
          <div className='flex pt-8 pl-8 gap-x-4'>
            <div>
              <i>
                <LuSettings
                  size={30}
                  className='bg-gray-600 border-2 rounded-full p-2 mt-3 '
                />
              </i>
            </div>
            <div>
              <h1 className='text-xl pb-2'>Lowest Fares</h1>
              <p>We provide afforadble tickets to save upto 50%</p>
            </div>
          </div>
          <div className='flex pt-8 pl-8 gap-x-4 pb-10'>
            <div>
              <i>
                <LuSettings
                  size={30}
                  className='bg-gray-600 border-2 rounded-full p-2 mt-3 '
                />
              </i>
            </div>
            <div>
              <h1 className='text-xl pb-2'>Discover</h1>
              <p>
                We make travelling easy across Pakistan by providing easy
                e-ticket
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Use;
