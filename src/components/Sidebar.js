import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCar } from 'react-icons/ai';
import { BiBusSchool } from 'react-icons/bi';
import { IoMdAirplane } from 'react-icons/io';
import { BsFillTrainLightrailFrontFill } from 'react-icons/bs';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { RiHotelLine } from 'react-icons/ri';
import { GiMicrophone } from 'react-icons/gi';
import { PiTreePalmThin } from 'react-icons/pi';

const Sidebar = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  const links = [
    { icon: BiBusSchool, link: 'Bus' },
    { icon: IoMdAirplane, link: 'Flights' },
    { icon: BsFillTrainLightrailFrontFill, link: 'Train' },
    { icon: BiSolidMoviePlay, link: 'Movies' },
    { icon: AiFillCar, link: 'Car' },
    { icon: RiHotelLine, link: 'Hotels' },
    { icon: GiMicrophone, link: 'Events' },
    { icon: PiTreePalmThin, link: 'Tours' },
  ];

  return (
    <>
      <div className='temporary-box2'></div>
      <aside
        className='pt-5 pl-3 w-[250px] border-r-2 h-[90vh]'
        id='sidebar_fixed'
      >
        {links.map((item, index) => {
          const { icon: Icon, link } = item;
          const isSelected = selectedLink === index;

          return (
            <LinkItem
              key={index}
              link={link}
              icon={Icon}
              isSelected={isSelected}
              onClick={() => handleLinkClick(index)}
            />
          );
        })}
      </aside>
    </>
  );
};

const LinkItem = ({ link, icon: Icon, isSelected, onClick }) => {
  const LinkName = link;
  return (
    <div className={`w-[200px] rounded-md ${isSelected ? 'bg-gray-100' : ''}`}>
      <ul>
        <li
          className={`cursor-pointer text-sm flex items-center pl-4 my-1 h-[45px] w-[200px] rounded-md gap-3 hover:bg-gray-100 hover:font-semibold ${
            isSelected ? 'bg-gray-100' : ''
          }`}
          onClick={onClick}
        >
          <Icon />
          <Link to={link}>{LinkName}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
