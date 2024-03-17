import React, {useState} from "react";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center max-w-[1240px] h-24 mx-auto text-white px-5'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Rana.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>About</li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <CiMenuBurger size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Rana.</h1>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Projects</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Header;