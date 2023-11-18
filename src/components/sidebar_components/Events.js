import React, { useState } from 'react';
import EventsData from '../../data/EventsData';
import notfound from '../../assets/notfound.jpg';

const Events = () => {
  const [searchevent, setsearchevent] = useState('');

  const filteredEvents = EventsData.filter((Singleevent) => {
    return Singleevent.text.toLowerCase().includes(searchevent.toLowerCase());
  });

  const handlesearchevent = (e) => {
    const inputText = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setsearchevent(inputText);
  };

  return (
    <section className='ml-[245px] mt-6 bg-white p-4'>
      <div className='flex items-center  lg:gap-x-20 xl:gap-x-36 '>
        <div className='mr-48 ml-2'>
          <h1 className='font-bold text-3xl pb-4'>Events</h1>
          <p className='w-72'>Book the ticket of ongoing events</p>
        </div>
        <div className='mt-2 border-2 lg:ml-48 xl:ml-64 xl:w-[26rem] px-2 py-[0.35rem] rounded-md group focus-within:border-blue-600'>
          <input
            type='text'
            placeholder='Search'
            className='outline-none'
            value={searchevent}
            onChange={handlesearchevent}
          />
        </div>
      </div>
      <section className='grid grid-cols-3 gap-x-6 gap-y-4  mt-7 cursor-pointer '>
        {filteredEvents.length === 0 ? (
          <div className='text-center mt-6 '>
            <div className='ml-[28rem]'>
              <img src={notfound} alt='' className='h-[230px] w-[450px]' />
            </div>
            <div className='ml-[10rem] mt-3'>
              <h1 className='text-3xl font-bold'>No results found</h1>
              <p className='text-gray-400 text-lg mt-2'>
                OOPS! We couldn't found any results. Please try again later.
              </p>
            </div>
          </div>
        ) : (
          filteredEvents.map((event) => {
            const { id, text, img } = event;
            return (
              <article key={id} className=''>
                <div className='box-border'>
                  <div className='md:w-[230px] md:h-[280px] xl:w-[410px] xl:h-[420px]  overflow-hidden rounded-lg'>
                    <img
                      src={img}
                      alt='tourimg'
                      className='w-full h-full rounded-lg  duration-300 ease-in-out hover:scale-105'
                    />
                  </div>

                  <div className='md:w-[230px] xl:w-[400px]'>
                    <h3 className='text-lg mt-1  mb-2 leading-6'>{text}</h3>
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

export default Events;
