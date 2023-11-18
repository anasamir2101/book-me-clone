import React, { useState } from 'react';
import MoviesData from '../../data/MoviesData';
import notfound from '../../assets/notfound.jpg';

const Events = () => {
  const [searchmovie, setsearchmovie] = useState('');

  const filteredMovies = MoviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(searchmovie.toLowerCase());
  });

  const handlesearchmovie = (e) => {
    const inputText = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setsearchmovie(inputText);
  };
  return (
    <section className='ml-[245px] mt-6 bg-white p-4'>
      <div className='flex items-center'>
        <div className='w-72'>
          <h1 className='font-bold text-3xl pb-4'>Movies</h1>
          <p>Book the ticket of ongoing movies</p>
        </div>

        <div className='mt-2 border-2 md:w-[17rem] lg:mr-8 xl:mr-0 xl:w-[27rem] ml-[40rem] px-2 py-[0.35rem] rounded-md group focus-within:border-blue-600'>
          <input
            type='text'
            placeholder='Search'
            className='w-full outline-none'
            value={searchmovie}
            onChange={handlesearchmovie}
          />
        </div>
      </div>
      <section className='grid grid-cols-4 gap-6  mt-9 cursor-pointer '>
        {filteredMovies.length === 0 ? (
          <div className='text-center w-[1180px] mt-6 '>
            <div className='ml-[30rem]'>
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
          filteredMovies.map((movie) => {
            const { id, img, title, type } = movie;
            return (
              <article key={id} className=''>
                <div className='box-border'>
                  <div className='lg:w-[200px] lg:h-[420px] xl:w-[310px] xl:h-[500px] overflow-hidden rounded-lg'>
                    <img
                      src={img}
                      alt='tourimg'
                      className='w-full h-full rounded-lg  duration-300 ease-in-out hover:scale-105'
                    />
                  </div>

                  <div className='lg:w-[200px] xl:w-[310px]'>
                    <h3 className='text-lg mt-2 leading-6'>{title}</h3>
                    <p>{type}</p>
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
