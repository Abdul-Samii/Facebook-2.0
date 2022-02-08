import Image from 'next/image';
import React from 'react'
import { ICONS, IMAGES } from './constants';
import {SearchIcon} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon';
const Header = () =>{
    return(
        <div className='flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>

{/* Left */}
        <div className='flex items-center'>
            <Image
                src={IMAGES.logo}
                width={50}
                height={50}
                layout="fixed"
            />

            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <ICONS.SearchIconS className="h-6 text-gray-600"/>
                <input
                    placeholder="Search Facebook"
                    type="text"
                    className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none 
                    placeholder-gray-500 flex-shrink'
                />
            </div>
        </div>




{/* Center */}
<div className='flex justify-center flex-grow'>
    <div className='flex space-x-6 md:space-x-2'>
         <HeaderIcon active Icon={ICONS.HomeIconO}/>
         <HeaderIcon Icon={ICONS.FlagIconS}/>
         <HeaderIcon Icon={ICONS.PlayIconS}/>
         <HeaderIcon Icon={ICONS.ShoppingCartIconS}/>
         <HeaderIcon Icon={ICONS.UserGroupIconO}/>
    </div>
</div>



{/* Right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
            <p className='font-semibold whitespace-nowrap pr-5'>Sammy Dev</p>
            <ICONS.ViewGridIconO className="icon"/>
            <ICONS.ChatIconO className="icon"/>
            <ICONS.BellIconO className="icon"/>
            <ICONS.ChevronDownIconO className="icon"/>
        </div>


        </div>
    )
}

export default Header;