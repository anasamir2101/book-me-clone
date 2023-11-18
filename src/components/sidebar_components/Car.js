import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const Car = () => {
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
      <section className='ml-[250px] bg-blue-600 p-4'>
        <p className='text-white text-4xl font-bold pt-4'>Search for Cars</p>
        <p className='text-white pt-2 text-lg'>
          Find the best and most affordable cars
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
              <span className='text-white'>Within City</span>
            </label>

            <label className='flex items-center'>
              <input
                type='checkbox'
                name='checkbox2'
                checked={roundTripSelected}
                onChange={handleRoundTripChange}
                className='rounded-full mr-2 custom-checkbox'
              />
              <span className='text-white'>Out of City</span>
            </label>
          </div>

          {oneWaySelected && (
            <div className='flex gap-2 mt-6 mb-2'>
              <div className='bg-white w-[215px] h-[2.8rem] rounded-md  flex justify-center items-center'>
                <select
                  className=' outline-none border-none w-full text-sm bg-transparent p-2.5  ml-2 mr-2.5'
                  name=''
                  id=''
                >
                  <option value=''>City</option>
                  <option value=''>Lahore</option>
                  <option value=''>Islamabad</option>
                  <option value=''>Karachi</option>
                  <option value=''>Multan</option>
                  <option value=''>Rawalpindi</option>
                  <option value=''>Sargodha</option>
                </select>
              </div>
              <div className='bg-white w-[215px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Pickup Date'
                  className='outline-none border-none w-full  '
                />
              </div>

              <div className='bg-white w-[210px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Pickup Time</option>
                  <option value=''>06:00 AM</option>
                  <option value=''>07:00 AM</option>
                  <option value=''>08:00 AM</option>
                  <option value=''>09:00 AM</option>
                  <option value=''>10:00 AM</option>
                  <option value=''>11:00 AM</option>
                  <option value=''>Noon</option>
                  <option value=''>01:00 PM</option>
                  <option value=''>02:00 PM</option>
                </select>
              </div>

              <div className='bg-white w-[210px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Dropoff Date'
                  className='outline-none border-none w-full  '
                />
              </div>
              <div className='bg-white w-[210px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Dropoff Time</option>
                  <option value=''>06:00 AM</option>
                  <option value=''>07:00 AM</option>
                  <option value=''>08:00 AM</option>
                  <option value=''>09:00 AM</option>
                  <option value=''>10:00 AM</option>
                  <option value=''>11:00 AM</option>
                  <option value=''>Noon</option>
                  <option value=''>01:00 PM</option>
                  <option value=''>02:00 PM</option>
                </select>
              </div>
              <div className='bg-yellow-400 w-[210px] rounded-md flex items-center gap-2 justify-center text-white'>
                <span>
                  <AiOutlineSearch />
                </span>
                Search
              </div>
            </div>
          )}
          {roundTripSelected && (
            <div className='flex gap-2 mt-6 mb-2'>
              <div className='bg-white w-[215px] h-[2.8rem] rounded-md  flex justify-center items-center'>
                <select
                  className=' outline-none border-none w-full text-sm bg-transparent p-2.5  ml-2 mr-2.5'
                  name=''
                  id=''
                >
                  <option value=''>City</option>
                  <option value=''>Lahore</option>
                  <option value=''>Islamabad</option>
                  <option value=''>Karachi</option>
                  <option value=''>Multan</option>
                  <option value=''>Rawalpindi</option>
                  <option value=''>Sargodha</option>
                </select>
              </div>
              <div className='bg-white w-[215px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Pickup Date'
                  className='outline-none border-none w-full  '
                />
              </div>

              <div className='bg-white w-[210px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Pickup Time</option>
                  <option value=''>06:00 AM</option>
                  <option value=''>07:00 AM</option>
                  <option value=''>08:00 AM</option>
                  <option value=''>09:00 AM</option>
                  <option value=''>10:00 AM</option>
                  <option value=''>11:00 AM</option>
                  <option value=''>Noon</option>
                  <option value=''>01:00 PM</option>
                  <option value=''>02:00 PM</option>
                </select>
              </div>

              <div className='bg-white w-[210px] rounded-md flex items-center gap-4 justify-center'>
                <span className='ml-2'>
                  <BsCalendarDate />
                </span>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Dropoff Date'
                  className='outline-none border-none w-full  '
                />
              </div>
              <div className='bg-white w-[210px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
                <span className='mr-2'>
                  <AiOutlineArrowUp />
                </span>
                <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                  <option value=''>Dropoff Time</option>
                  <option value=''>06:00 AM</option>
                  <option value=''>07:00 AM</option>
                  <option value=''>08:00 AM</option>
                  <option value=''>09:00 AM</option>
                  <option value=''>10:00 AM</option>
                  <option value=''>11:00 AM</option>
                  <option value=''>Noon</option>
                  <option value=''>01:00 PM</option>
                  <option value=''>02:00 PM</option>
                </select>
              </div>
              <div className='bg-yellow-400 w-[210px] rounded-md flex items-center gap-2 justify-center text-white'>
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

export default Car;
