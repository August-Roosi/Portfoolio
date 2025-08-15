import React from 'react';
import roosiTulnukas from './../assets/roosi-tulnukas.jpeg';


const AboutMe: React.FC = () => {
    return (
 

        <main 
        className=' relative runded-3xl z-[100] p-6 flex flex-wrap gap-3 border-2 rounded-lg
        [&>*]:border-2 [&>*]:border-black [&>*]:min-w-30 [&>*]:min-h-60 [&>*]:p-4 [&>*]:bg-gray-100 [&>*]:rounded-lg
        [&>*]:transition-transform [&>*]:duration-300 [&>*]:ease-in-out [&>*]:hover:scale-110'>
            
            {/* Vabatahtlik */}
            <div className='grow-2 flex'>
                <h1 className='self-center m-auto'>Ma olen <br /><b className='text-[4rem]'>Vabatahtlik</b></h1>
            </div>

            <div className='grow-1 bg-cover h-90 flex basis-80'  
            style={{ backgroundImage: `url(${roosiTulnukas})` }}
            ></div>


            <div className='grow-2'>React, Vue, Svelte, Django</div>

            {/* Sportlane */}
            <div className='grow-2 flex w-full'>
                <h1 className='self-center m-auto'>Ma olen <br /><b className='text-[4rem]'>Sportlane</b></h1>
            </div>

            <div className='grow-1 bg-cover h-90 flex basis-80'  
            style={{ backgroundImage: `url(${roosiTulnukas})` }}
            ></div>


            <div className='grow-2'>React, Vue, Svelte, Django</div>


        </main>
    );
};

export default AboutMe;