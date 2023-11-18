import React, { useState } from 'react';
import TourData from '../../data/TourData';

const Tours = () => {
  const [searchInput, setSearchInput] = useState('');

  const filteredTours = TourData.filter((tour) => {
    return tour.desc.toLowerCase().includes(searchInput.toLowerCase());
  });

  const handleSearchInput = (e) => {
    const inputText = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setSearchInput(inputText);
  };

  return (
    <section className='md:ml-[260px] xl:ml-[245px] md:mr-[15px] xl:mr-0 mt-3 bg-white p-4'>
      <div className='flex items-center justify-between pt-6'>
        <div className=''>
          <h1 className='font-bold text-3xl pb-4'>Tours</h1>
          <p className='text-xl w-72'>Book the ticket of ongoing tour.</p>
        </div>
        <div className=' mt-2 border-2 md:w-[17rem] lg:mr-8 xl:mr-0 xl:w-[27rem] px-2 py-2 rounded-md group focus-within:border-blue-600'>
          <input
            type='text'
            placeholder='Search'
            className='outline-none'
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>
      </div>
      <section className='grid grid-cols-3 gap-y-7 gap-x-6 mt-14 cursor-pointer'>
        {filteredTours.length === 0 ? (
          <div className='ml-[10rem] mt-6 grid mx-auto justify-center content-center'>
            <h1 className='text-3xl font-bold'>No results found</h1>
            <p className='text-gray-400 text-lg mt-2'>
              OOPS! We couldn't found any results. Please try again later.
            </p>
          </div>
        ) : (
          filteredTours.map((tour) => {
            const { id, desc, pack, price, img } = tour;
            return (
              <article key={id} className=''>
                <div className='box-border'>
                  <div className='md:w-[230px] md:h-[280px] lg:w-[260px] lg:h-[300px] xl:w-[420px] xl:h-[420px] overflow-x-hidden rounded-lg'>
                    <img
                      src={img}
                      alt='tourimg'
                      className='w-full h-full rounded-lg  duration-300 ease-in-out hover:scale-105'
                    />
                  </div>

                  <div className='md:w-[230px] lg:w-[260px] xl:w-[400px]'>
                    <h3 className='text-lg mt-2 leading-6'>{desc}</h3>
                    <div className='flex justify-between items-center'>
                      <h4 className='text-sm text-gray-500'>{pack}</h4>
                      <h4 className='text-blue-800 font-semibold'>{price}</h4>
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </section>
    </section>
  );
};

export default Tours;
