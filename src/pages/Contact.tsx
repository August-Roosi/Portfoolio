import React from 'react';


const Contact: React.FC = () => {
    return (
 

        <main 
         className='relative runded-3xl z-[100] mb-10 p-6 flex flex-wrap gap-3 border-2 rounded-lg
        [&>*]:border-2 [&>*]:border-black [&>*]:min-w-30 [&>*]:min-h-60 [&>*]:p-4 [&>*]:bg-gray-100 [&>*]:rounded-lg
        [&>*]:transition-transform [&>*]:duration-300 [&>*]:ease-in-out [&>*]:hover:scale-110'>
           
            <div className='grow-2 basis-full flex items-center'>
                <h1 className='px-4'>Võta minuga julgelt ühendust telefoni või meili teel.</h1>
            </div>
            <div className='grow-1 flex items-center text-left text-[2rem]'>
                <div className='px-4'>

                Telefon: <br /> 5366 8726
                </div>
            </div>
            <div className='grow-1 text-left flex items-center text-[2rem]'>
                <div className='px-4'>
                    Meil: <br /> augustroosi@gmail.com
                </div>
            </div>
        </main>
    );
};

export default Contact;