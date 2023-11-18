import React, { useState } from 'react';
import Login from './Modal/Login';
import Signup from './Modal/Signup';
import Help from './Modal/Help';
import { HiBars3 } from 'react-icons/hi2';
import logo from '../assets/logo.png';

const Header = () => {
  const [openModal, setOpenModal] = useState(null); // Keeps track of the open modal

  const openLoginModal = () => {
    setOpenModal('login');
  };

  const closeLoginModal = () => {
    setOpenModal(null);
  };

  const openSignupModal = () => {
    setOpenModal('signup');
  };

  const closeSignupModal = () => {
    setOpenModal(null);
  };

  const openHelpModal = () => {
    setOpenModal('help');
  };

  const closeHelpModal = () => {
    setOpenModal(null);
  };

  return (
    <>
      <section>
        <div className=' text-center bg-[#1476D1] text-white text-[15px] py-1 z-20 fixed top-0 left-0 right-0 subscribe'>
          Become a member of <span className='font-bold'>Bookme</span> and get
          special services.
          <a href='' className='font-bold underline'>
            Subscribe Now
          </a>
        </div>
        <div className='temporary-box'></div>
        <nav
          className=' mt-8 flex justify-between pt-4 pb-4 border-b-2 z-10 bg-orange-500'
          id='navbar-fixed'
        >
          <div className='flex items-center gap-3 px-4 md:pl-5 md:pr-0 lg:pl-10'>
            <HiBars3 size={35} className='cursor-pointer mb-2' />
            <img
              src={logo}
              alt='Logo'
              srcset=''
              className='h-[48px] cursor-pointer '
            />
          </div>
          <div className='flex items-center gap-3 pr-3 text-sm'>
            <button
              onClick={openHelpModal}
              className='text-[#667085] mx-2 hover:text-blue-500'
            >
              Help
            </button>
            <button
              onClick={openLoginModal}
              className='text-[#667085] mx-2 hover:text-blue-500'
            >
              Log in
            </button>
            <button
              onClick={openSignupModal}
              className='text-white mx-2 text-sm bg-[#1476D1] rounded-lg px-4 md:px-5 py-2.5 hover:bg-blue-500'
            >
              Sign up
            </button>
            {openModal === 'help' && (
              <Help isOpen={true} onClose={closeHelpModal} />
            )}
            {openModal === 'login' && (
              <Login isOpen={true} onClose={closeLoginModal} />
            )}
            {openModal === 'signup' && (
              <Signup isOpen={true} onClose={closeSignupModal} />
            )}
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
