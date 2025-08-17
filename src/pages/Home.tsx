import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { BiLinkExternal, BiLogoReact } from 'react-icons/bi';
import { BiLogoPython } from 'react-icons/bi';
import { BiLogoDjango } from 'react-icons/bi';

// Images
import roosiProfiil from './../assets/roosi-profiil.jpg';
import portfoolioLogo from './../../public/portfoolio-logo.png';


const Home: React.FC = () => {
    return (
 

        <main 
        className='relative runded-3xl z-[100] mb-10 p-6 flex flex-wrap gap-3 border-2 rounded-lg
        [&>*]:border-2 [&>*]:border-black [&>*]:min-w-30 [&>*]:min-h-60 [&>*]:p-4 [&>*]:bg-gray-100 [&>*]:rounded-lg
        [&>*]:transition-transform [&>*]:duration-300 [&>*]:ease-in-out [&>*]:hover:scale-110'>
            
            {/* Tutvustus */}
            <div className='grow-2 flex basis-160'>
                <h1 className='self-center m-auto'>August Roosi <br /><b className='text-[4rem]'>portfoolio</b></h1>
            </div>

            {/* Profiili pilt */}
            <div className='grow-1 bg-cover h-90 flex basis-80'  
            style={{ backgroundImage: `url(${roosiProfiil})` }}
            ></div>

            {/* Haridus */}
            <div className='flex flex-col justify-center basis-80 grow-3 grap-10 [&>*]:p-2 [&>*]:text-left '>
                <div><b>Tartu Ülikool</b> <br /> 
                <div> <span className='text-purple-500'>Doktoriõpe</span>, ?? 
                <br /> ?? - ?? </div> 
                <div><span className='text-blue-500'>Magistriõpe</span>, Andmeteadus
                <br /> september 2025 - ...</div>
                <div><span className='text-yellow-500'>Bakalaureuseõpe</span>, Informaatika
                <br />september 2022 - juuni 2025</div>
                </div>
                <div> <b>Tartu Jaan Poska Gümnaasium</b> <br />
                Reaalsuund, fookussuund: Informaatika
                <br />september 2018 - juuni 2021</div>
            </div>


            {/* Tehnoloogiad */}
            <div className='grow-2 p-2'>
                <div className='text-left text-[2rem] p-4'>
                    Tehnoloogiad millega ennast väga mugavalt tunnen:
                </div>
                <div className='flex m-auto h-2/4 [&>*]:m-auto gap-5 [&>*]:flex [&>*]:no-wrap [&>*]:items-center [&>*]:font-bold'>
                    <div>React <BiLogoReact size={44} className='stroke-1' /></div>
                    <div>Django <BiLogoDjango size={44} /></div>
                    <div>Python <BiLogoPython size={44} /></div>
                </div>
            </div>


            {/* Vihku */}
            <Link id='vihku' target='_blank' className='group basis-80 overflow-auto grow-4 flex justify-center' to={"https://www.vihku.ee"}> 
                <h1 className='self-center px-8 text-black underline'><span>VIH</span><span className='text-cyan-700'>KU</span></h1>
                <div className='rounded-lg self-center absolute top-5 p-4 flex-col [&>*]:p-2 text-left invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-100/80  text-black p-4 transition-all duration-300 ease-in-out  '>
                    <p>Olen osa meeskonnast, kellega asutasime firma tasuta vihikute jagamiseks gümnaasiumites. </p>
                    <p>Selle
                    jaoks lõime algelise veebilehe aastal 2023. </p>
                    <p>Tegin veebilehe täielikult ümber 2025, kasutasin selleks
                    Wordpressi ning Worpressi staatilised failid majutasin Githubpagesiga. Lisaks olin kogu disaini ning
                    piltide töötlemise ja loomise taga.</p>




                    <div className='flex items-center'>

                        <div className='flex w-full flex-wrap gap-2'>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#wordpress</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#git</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#kliendid</p>


                        </div>

                        <BiLinkExternal className='opacity-100 text-black' size={26}></BiLinkExternal>
                    
                    </div>
                </div>
            </Link>

            {/* ArgPuu */}
            <Link id='argpuu' target='_blank' className='group basis-80 overflow-auto grow-4 flex justify-center' to={"https://www.argpuu.ee"}> 
                <h1 className='self-center px-8 text-black'>ArgPuu</h1>
                <div className='rounded-lg self-center absolute top-5 p-4 flex-col [&>*]:p-2 text-left invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-100/80  text-black p-4 transition-all duration-300 ease-in-out  '>
                    <p>Tegin enda 2025 bakalaureuse lõputööks veebirakenduse, kus saab luua argumentatsioonipuid.</p>
                    <p>Projektis kasutan Djangot koos React-iga ning PostgreSQL andmebaasis.</p>
                    <p>Lehe serveerimiseks kasutasin Heroku serveriteenust.</p>

    
                    <div className='flex items-center'>

                        <div className='flex w-full flex-wrap gap-2'>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#django</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#postgresql</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#react</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#typescript</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#heroku</p>
                        </div>

                        <BiLinkExternal className='opacity-100 text-black' size={26}></BiLinkExternal>
                    
                    </div>

                </div>
            </Link>

            {/* Portfoolio */}
            <Link id='portfoolio' target='_blank' className='group basis-80 overflow-auto grow-4 flex justify-center' to={"https://www.augustroosi.ee"}> 
                <div className='bg-cover h-25 w-25 self-center'  
                style={{ backgroundImage: `url(${portfoolioLogo})` }}
                ></div>
                <div className='rounded-lg self-center absolute top-5 p-4 flex-col [&>*]:p-2 text-left invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-100/80  text-black p-4 transition-all duration-300 ease-in-out  '>
                    <p>Tegin 2025 suvel endale portfoolio lehe, kus on näha kõiki mu projekte ning muud minuga seotud infot.</p>
                    <p>Lisaks tahtsin, et projekt näitaks, minu mugavust front-end arendusega.</p>

                    <div className='flex items-center'>

                        <div className='flex w-full flex-wrap gap-2'>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#react</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#typescript</p>
                            <p className='p-2 bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#git</p>
                        </div>

                        <BiLinkExternal className='opacity-100 text-black' size={26}></BiLinkExternal>
                    
                    </div>

                </div>
            </Link>

        </main>
    );
};

export default Home;