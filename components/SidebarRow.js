import Image from 'next/image';
import React from 'react'

const SidebarRow = ({src, Icon, title}) =>{
    return(
        <div className='flex items-center p-4 space-x-2 bg-gray-100
            hover:bg-gray-200 cursor-pointer rounded-xl
        '>
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                />
            )}
            {Icon && <Icon className="h-8 w-8 text-blue-500"/>}
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    )
}

export default SidebarRow;