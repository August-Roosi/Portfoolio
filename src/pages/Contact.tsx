import React from 'react';


const Contact: React.FC = () => {
    return (
 

        <main className='flex flex-wrap rounded-lg gap-2 border-2 relative runded-3xl z-[100] p-6
        [&>*]:border-2 [&>*]:bg-gray-100 [&>*]:p-4  '>

            <div className='basis-80'>
                <h1>Võta minuga ühendust</h1>
                <p>
                    This is the home page. Explore my projects, skills, and experience.
                </p>
            </div>
            <div>
                Telefon: 5366 8726
            </div>
            <div>
                Meil: <br /> augustroosi@gmail.com
            </div>
        </main>
    );
};

export default Contact;