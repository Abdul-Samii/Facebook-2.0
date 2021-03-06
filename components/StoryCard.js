import React from "react";
import Image from "next/image";

const StoryCard = ({name,src,profile}) =>{
    return(
        <div className="relative">
            <Image
                className="absolute opacity-0 lg:opacity-100 
                rounded-full z-50 top-10 h-200"
                src={profile}
                width={100}
                height={100}
                layout="fixed"
                objectFit="cover"
            />
            <Image 
                className="object-cover filter brightness-75
                rounded-full lg:rounded-3xl"
                src={src}
                layout="fill"
            />
        </div>
    )
}

export default StoryCard;