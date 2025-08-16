import React from 'react';
import roosiChilli from './../assets/EFF-2019-3.jpg';
import roosiWalksMono from './../assets/EFF-2023-1.jpg';
import roosiWalks from './../assets/EFF-2023-2.jpg';
import roosiClaps from './../assets/EFF-2025-3.jpg';
import roosiOogaBooga from './../assets/EFF-2025-4.jpg';



import TextType from '../components/TextType';
import DayCounter from '../components/DayCounter';


const AboutMe: React.FC = () => {
    return (
 

        <main 
        className='mb-10 relative runded-3xl z-[100] p-6 flex flex-wrap gap-3 border-2 rounded-lg
        [&>*]:border-2 [&>*]:border-black [&>*]:min-w-30 [&>*]:min-h-60 [&>*]:p-4 [&>*]:bg-gray-100 [&>*]:rounded-lg
        [&>*]:transition-transform [&>*]:duration-300 [&>*]:ease-in-out [&>*]:hover:scale-110'>
            
            {/* Vabatahtlik */}
            <div className='grow-2 basis-120 flex'>
                <h1 className='self-center m-auto'> 
                    <span className='text-[5rem] '>
                         Ma olen 
                    </span> 
                    <br />
                    <b className='text-[4rem]'>
                        <TextType 
                        text={["Vabatahtlik", "Sportlane", "Botaanik"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        variableSpeed={false}
                        onSentenceComplete={() => {}}
                        />
                    </b>
                </h1>
            </div>

            <div className='grow-1 bg-cover h-90 flex basis-80'  
            style={{ backgroundImage: `url(${roosiChilli})` }}
            ></div>

            {/* Aastaid moeetendustel */}
            <div className='grow-1 flex'>
                <div className='m-auto text-[2rem] flex gap-2'>Ma olen käinud moeetendustel
                    <div className='text-[2rem] px-2 text-white bg-gray-500 rounded-lg'>
                        <DayCounter startDate="2019-05-16" />
                    </div>
                    aastat
                </div>
            </div>



            <div className='grow-2 bg-cover h-120 w-80'  
            style={{ backgroundImage: `url(${roosiOogaBooga})` }}
            ></div>


            <div className='grow-2 bg-cover h-120 w-80'  
            style={{ backgroundImage: `url(${roosiWalks})` }}
            ></div>

            <div className='grow-3 text-[1.3rem] justify-center px-2 w-20 flex flex-col gap-3 text-left w-80'>
                <div>
                    Modellinduses on kõik väga omanäolised ning kogu mõte on nendega koostööd teha, et anda inimestele show.
                </div>
                <div>
                    Otsustavaks osaks on alati enda mugavtsoonist ja normaalsusest väljumine, et olla teistsugune, isegi, et imelik, kõik, et sulanduda enda karakterisse.
                </div>
            </div>

            <div className='grow-1 bg-cover h-120 w-80'  
            style={{ backgroundImage: `url(${roosiWalksMono})` }}
            ></div>
            <div className='grow-1 bg-cover h-120 w-180'  
            style={{ backgroundImage: `url(${roosiClaps})` }}
            ></div>




            {/* Aastaid sportlane */}
            <div className='grow-2 flex'>
                <div className='m-auto text-[2rem] flex gap-2'>Ma olen käinud jõusaalis
                    <div className='text-[2rem] px-2 text-white bg-gray-500 rounded-lg'>
                        <DayCounter startDate="2018-08-16" />
                    </div>
                    aastat
                </div>
            </div>
        </main>
    );
};

export default AboutMe;