import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
const Train = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section className='ml-[250px] mt-2 bg-blue-600 py-4 px-5 h-100vh'>
      <p className='text-white text-3xl font-bold pt-2'>Search for Train</p>
      <p className='text-white text-xl pt-2'>
        Find the best and most affordable train routes in Pakistan
      </p>
      <div className='flex gap-2 mt-6 mb-2'>
        <div className='bg-white md:w-[270px] lg:w-[300px] xl:w-[365px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
          <div className='bg-white w-[325px] h-10 rounded-md flex items-center gap-2 pl-2'>
            <AiOutlineArrowUp className='' />

            <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
              <option value='' style={{ display: 'none' }}>
                Departure
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

        <div className='bg-white md:w-[200px] lg:w-[250px] xl:w-[365px] h-[2.80rem] rounded-md flex items-center gap-2 pl-2'>
          <span className='mr-2'>
            <AiOutlineArrowDown />
          </span>
          <select className='flex w-full outline-none border-none appearance-none bg-transparent text-sm p-2.5'>
            <option value='' style={{ display: 'none' }}>
              Arrival
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
        <div className='bg-white md:w-[200px] lg:w-[250px] xl:w-[365px] rounded-md flex items-center gap-4'>
          <span className='ml-2'>
            <BsCalendarDate />
          </span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat='dd/MM/yyyy'
            placeholderText='Date'
            className='outline-none border-none w-full  '
          />
        </div>
        <div className='bg-yellow-300 md:w-[120px] lg:w-[180px] xl:w-[220px] rounded-md flex items-center gap-2 justify-center text-white'>
          <span>
            <AiOutlineSearch />
          </span>
          Search
        </div>
      </div>
    </section>
  );
};

export default Train;
