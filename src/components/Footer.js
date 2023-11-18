import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/bookme.svg';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import AppStore from '../assets/AppStore.svg';
import Googleplay from '../assets/google-play.svg';

const Footer = () => {
  return (
    <>
      <div className='bg-gray-950 ml-[250px] grid justify-center px-2 pt-6 pb-6 lg:flex lg:justify-between '>
        <div className='text-white pb-6 pt-6 lg:pr-4 lg:w-1/3 xl:w-full'>
          <h1 className='text-xl lg:text-2xl font-bold pb-3'>
            Subscribe to our newsletter
          </h1>
          <p className='text-sm lg:text-base'>
            Stay up to date with the latest news, announcements, and articles
          </p>
        </div>
        <div className='lg:flex lg:gap-x-2 lg:items-center'>
          <div className='pt-2 lg:pt-0'>
            <input
              type='text'
              placeholder='Enter your email'
              className='w-[455px] lg:w-48 xl:w-96 h-10 rounded-md py-1 pl-4 outline-none'
            />
          </div>
          <div className='mt-4 lg:mt-0'>
            <button className='bg-blue-600 text-white rounded-md h-10 py-1 px-3 mb-6 lg:mb-0'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 ml-[250px] grid grid-cols-2 pt-10 lg:grid lg:grid-cols-5 pb-10 border-b-2 border-gray-500'>
        <div className='pl-8'>
          <h1 className='text-gray-600 pt-2 pb-6'>Services</h1>
          <div className='text-white flex flex-col text-xs gap-y-3'>
            <Link to='/bus'>Bus Booking</Link>
            <Link to='/flights'>Flights Booking</Link>
            <Link to='/movies'>Movie Booking</Link>
            <Link to='/events'>Event Booking</Link>
            <Link to='/train'>Train Booking</Link>
            <Link to='/car'>Car Rental Booking</Link>
            <Link to='/hotels'>Hotels Booking</Link>
            <Link to='/tours'>Tours Booking</Link>
          </div>
        </div>
        <div className='pl-8'>
          <h1 className='text-gray-600 pt-2 pb-6'>Company</h1>
          <div className='text-white flex flex-col text-xs gap-y-3'>
            <Link to='/bus'>Bus Booking</Link>
            <Link to='/flights'>Flights Booking</Link>
            <Link to='/movies'>Movie Booking</Link>
            <Link to='/events'>Event Booking</Link>
            <Link to='/train'>Train Booking</Link>
            <Link to='/car'>Car Rental Booking</Link>
            <Link to='/hotels'>Hotels Booking</Link>
            <Link to='/tours'>Tours Booking</Link>
          </div>
        </div>
        <div className='pl-8'>
          <h1 className='text-gray-600 pt-2 pb-6'>Top Flights</h1>
          <div className='text-white flex flex-col text-xs gap-y-3'>
            <Link to='/bus'>Bus Booking</Link>
            <Link to='/flights'>Flights Booking</Link>
            <Link to='/movies'>Movie Booking</Link>
            <Link to='/events'>Event Booking</Link>
            <Link to='/train'>Train Booking</Link>
            <Link to='/car'>Car Rental Booking</Link>
            <Link to='/hotels'>Hotels Booking</Link>
            <Link to='/tours'>Tours Booking</Link>
          </div>
        </div>
        <div className='pl-8'>
          <h1 className='text-gray-600 pt-2 pb-6'>Top Buses</h1>
          <div className='text-white flex flex-col text-xs gap-y-3'>
            <Link to='/bus'>Bus Booking</Link>
            <Link to='/flights'>Flights Booking</Link>
            <Link to='/movies'>Movie Booking</Link>
            <Link to='/events'>Event Booking</Link>
            <Link to='/train'>Train Booking</Link>
            <Link to='/car'>Car Rental Booking</Link>
            <Link to='/hotels'>Hotels Booking</Link>
            <Link to='/tours'>Tours Booking</Link>
          </div>
        </div>
        <div className='pl-8 mr-3'>
          <h1 className='text-gray-600 pt-2 pb-6'>Get the app</h1>
          <img src={AppStore} alt='' className='mb-2' />
          <img src={Googleplay} alt='' />
        </div>
      </div>
      <div className='bg-gray-800 ml-[250px] pt-10 pb-10 flex justify-between items-center'>
        <div className='pl-6'>
          <img src={logo} alt='' className='h-[32px] cursor-pointer' />
        </div>
        <div className='flex space-x-4 pr-6 text-gray-500'>
          <FaXTwitter
            size={20}
            className='hover:text-blue-500 cursor-pointer'
          />
          <FaLinkedin
            size={20}
            className='hover:text-blue-500 cursor-pointer'
          />
          <IoLogoFacebook
            size={20}
            className='hover:text-blue-500 cursor-pointer'
          />
          <FaYoutube size={20} className='hover:text-blue-500 cursor-pointer' />
          <FaInstagram
            size={20}
            className='hover:text-blue-500 cursor-pointer'
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
