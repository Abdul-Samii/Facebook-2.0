import React from 'react';
import StoryCard from './StoryCard';
import Image from 'next/image'
const stories = [
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    },
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    },
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    },
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    },
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v",
    },
];

const Stories = () =>{
    return(
        <div className='flex justify-center space-x-2 mx-auto'>
            
   

      {stories.map((story)=>
      
      <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
      />
      )}
    
  





                {/* for(var i=0;i<3;i++)
                {
                    
                    // <StoryCard
                    //     key={story.src}
                    //     name={story.name}
                    //     src={story.src}
                    //     profile={story.profile}
                    // />
                    <h1>hyyyyyy</h1>
                }) */}
            
}
{/* <div className="relative">
            <Image
                className="absolute opacity-0 lg:opacity-100 
                rounded-full z-50 top-10"
                src={stories[0].src}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
            />
            <Image 
                className="object-cover filter brightness-75
                rounded-full lg:rounded-3xl"
                src={stories[0].src}
                layout="fill"
            />
        </div> */}
        </div>
    )
}

export default Stories;