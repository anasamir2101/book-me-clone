import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const Flights = () => {
  const [oneWaySelected, setOneWaySelected] = useState(true);
  const [roundTripSelected, setRoundTripSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOneWayChange = () => {
    setOneWaySelected(true);
    setRoundTripSelected(false);
  };

  const handleRoundTripChange = () => {
    setOneWaySelected(false);
    setRoundTripSelected(true);
  };

  return (
    <>
      <section className='ml-[250px]  bg-blue-600 py-4 px-5'>
        <p className='text-white text-3xl font-semibold pt-4'>
          Search for Flights
        </p>
        <p className='text-white text-xl pt-2'>
          Find the best and most affordable flights across the globe
        </p>
        <form>
          <div className='pt-4 text-sm flex items-center gap-4 pb-2'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                name='checkbox1'
                checked={oneWaySelected}
                onChange={handleOneWayChange}
                className='rounded-full mr-2 custom-checkbox'
              />
              <span className='text-white'>One Way</span>
            </label>

            <label className='flex items-center'>
              <input
                type='checkbox'
                name='checkbox2'
                checked={roundTripSelected}
                onChange={handleRoundTripChange}
                className='rounded-full mr-2 custom-checkbox'
              />
              <span className='text-white'>Round Trip</span>
            </label>
          </div>

          {oneWaySelected && (
            <div className='flex gap-2 mt-6 mb-2'>
              <div className='bg-white md:w-[150px] lg:w-[170px] xl:w-[260px] h-[2.8rem] rounded-md  flex justify-center items-center'>
                <select
                  className='outline-none border-none w-full text-sm bg-transparent p-2.5  ml-2 mr-2.5'
                  name=''
                  id=''
                >
                  <option value=''>All Flight Services</option>
                  <option value=''>Road Master - upto 40% off</option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>Skyways -upto 20% off</option>
                  <option value=''>Daewoo Express -upto 20% off</option>
                  <option value=''>Bala Gujjar -upto 20% off</option>
                  <option value=''>Shahid Coach -upto 20% off</option>
                  <option value=''>Shaheen Express -upto 20% off</option>
                  <option value=''>Karachi Express -upto 20% off</option>
                </select>
              </div>
              <div className='bg-white md:w-[150px] lg:w-[170px] xl:w-[260px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Departure</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>

              <div className='bg-white md:w-[150px] lg:w-[170px] xl:w-[260px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowDown />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Arrival</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>
              <div className='bg-white md:w-[150px] lg:w-[170px] xl:w-[260px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Departure Date'
                  className='outline-none border-none w-full  '
                />
              </div>
              <div className='bg-yellow-300 md:w-[120px] lg:w-[150px] xl:w-[240px] rounded-md flex items-center gap-2 justify-center text-white'>
                <span>
                  <AiOutlineSearch />
                </span>
                Search
              </div>
            </div>
          )}
          {roundTripSelected && (
            <div className='flex gap-2 mt-6 mb-2'>
              <div className='bg-white md:w-[130px] lg:w-[150px] xl:w-[210px] h-[2.80rem] rounded-md  flex justify-center items-center'>
                <select
                  className='outline-none border-none w-full text-sm bg-transparent p-3   mr-2.5'
                  name=''
                  id=''
                >
                  <option value=''>All Flight Services</option>
                  <option value=''>Road Master - upto 40% off</option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                  <option value=''>
                    Al Makkah President Coaches -upto 20% off
                  </option>{' '}
                </select>
              </div>
              <div className='bg-white md:w-[130px] lg:w-[150px] xl:w-[210px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='box-selection outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Departure</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>

              <div className='bg-white md:w-[130px] lg:w-[150px] xl:w-[210px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowDown />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Arrival</option>
                  <option value=''>Lahore</option>
                  <option value=''>Karachi</option>
                  <option value=''>Peshawar</option>
                  <option value=''>Multan</option>
                  <option value=''>Sargodha</option>
                  <option value=''>Islamabad</option>
                </select>
              </div>
              <div className='bg-white md:w-[130px] lg:w-[150px] xl:w-[210px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Departure Date'
                  className='outline-none border-none w-full  '
                />
              </div>
              <div className='bg-white md:w-[130px] lg:w-[150px] xl:w-[210px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Arrival Date'
                  className='outline-none border-none w-full'
                />
              </div>
              <div className='bg-yellow-300 md:w-[130px] lg:w-[150px] xl:w-[220px] rounded-md flex items-center gap-2 justify-center text-white'>
                <span>
                  <AiOutlineSearch />
                </span>
                Search
              </div>
            </div>
          )}
        </form>
      </section>
    </>
  );
};

export default Flights;
