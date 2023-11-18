import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const Hotels = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <section className='ml-[250px] mt-2 bg-blue-600 py-4 px-5 '>
        <div className='md:grid  md:justify-center lg:justify-start lg:mr-0 md:mr-16'>
          <p className='text-white text-3xl font-bold pt-4'>
            Search for Hotels
          </p>
          <p className='text-white text-xl pt-2'>
            Find the best and most affordable hotel rooms across Pakistan
          </p>
        </div>

        <div className='flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-4 mt-6 mb-2'>
          <div className='bg-white md:w-[300px] xl:w-[410px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
            <div className='bg-white w-[325px] h-10 rounded-md flex items-center gap-2 pl-2'>
              <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
                <option value='' style={{ display: 'none' }}>
                  City
                </option>
                <option value=''>Lahore</option>
                <option value=''>Karachi</option>
                <option value=''>Peshawar</option>
                <option value=''>Multan</option>
                <option value=''>Sargodha</option>
                <option value=''>Islamabad</option>
                <option value=''>Peshawar</option>
                <option value=''>Peshawar</option>
                <option value=''>Bahawalpur</option>
                <option value=''>Peshawar</option>
                <option value=''>Mianwali</option>
              </select>
            </div>
          </div>
          <div className='bg-white md:w-[300px] xl:w-[410px] rounded-md flex items-center gap-4'>
            <span className='ml-2'>
              <BsCalendarDate />
            </span>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat='dd/MM/yyyy'
              placeholderText='Check In'
              className='outline-none border-none w-full  '
            />
          </div>
          <div className='bg-white md:w-[300px] xl:w-[410px] rounded-md flex items-center gap-4'>
            <span className='ml-2'>
              <BsCalendarDate />
            </span>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat='dd/MM/yyyy'
              placeholderText='Check Out'
              className='outline-none border-none w-full  '
            />
          </div>

          <div className='bg-white md:w-[300px] xl:w-[500px] h-[2.80rem] rounded-md flex items-center gap-2'>
            <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
              <option value='' style={{ display: 'none' }}>
                Rooms
              </option>
              <option value=''>1</option>
              <option value=''>2</option>
              <option value=''>3</option>
              <option value=''>4</option>
            </select>
          </div>

          <div className='bg-white md:w-[300px] xl:w-[500px] h-[2.80rem] rounded-md flex items-center gap-2'>
            <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
              <option value='' style={{ display: 'none' }}>
                No of Persons
              </option>
              <option value=''>1</option>
              <option value=''>2</option>
              <option value=''>3</option>
              <option value=''>4</option>
            </select>
          </div>
          <div className='bg-yellow-400 md:w-[300px] xl:w-[230px] rounded-md flex items-center gap-2 justify-center text-white'>
            <span>
              <AiOutlineSearch />
            </span>
            Search
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotels;
