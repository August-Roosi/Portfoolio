import React from 'react';
import { Link } from 'react-router-dom';
import roosiProfiil from './../assets/roosi-profiil.jpg';
import { BiLinkExternal } from 'react-icons/bi';

const Home: React.FC = () => {
    return (
 

        <main 
        className=' relative runded-3xl z-[100] mb-10 p-6 flex flex-wrap gap-3 border-2 rounded-lg
        [&>*]:border-2 [&>*]:border-black [&>*]:min-w-30 [&>*]:min-h-60 [&>*]:p-4 [&>*]:bg-gray-100 [&>*]:rounded-lg
        [&>*]:transition-transform [&>*]:duration-300 [&>*]:ease-in-out [&>*]:hover:scale-110'>
            
            {/* Tutvustus */}
            <div className='grow-2 flex'>
                <h1 className='self-center m-auto'>August Roosi <br /><b className='text-[4rem]'>portfoolio</b></h1>
            </div>

            {/* Profiili pilt */}
            <div className='grow-1 bg-cover h-90 flex basis-80'  
            style={{ backgroundImage: `url(${roosiProfiil})` }}
            ></div>



            <div className='grow-2'>React, Vue, Svelte, Django</div>

            {/* Haridus */}
            <div className='flex-col basis-80 grow-3 grap-10 [&>*]:p-2 [&>*]:text-left'>
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


            {/* Vihku */}
            <Link target='_blank' className='group overflow-auto grow-3 flex justify-center' to={"https://www.vihku.ee"}> 
                <h1 className='self-center px-9 text-black underline'><span>VIH</span><span className='text-cyan-700'>KU</span></h1>
                <div className='rounded-lg self-center absolute top-5 p-4 flex-col [&>*]:p-2 text-left invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-100/80  text-black p-4 transition-all duration-300 ease-in-out  '>
                    <p>Olen osa meeskonnast, kellega asutasime firma tasuta vihikute jagamiseks gümnaasiumites. </p>
                    <p>Selle
                    jaoks lõime algelise veebilehe aastal 2023. </p>
                    <p>Tegin veebilehe täielikult ümber 2025, kasutasin selleks
                    Wordpressi ning Worpressi staatilised failid majutasin Githubpagesiga. Lisaks olin kogu disaini ning
                    piltide töötlemise ja loomise taga.</p>

                    <p className='bg-gray-500/20 w-fit rounded-lg text-[0.6rem]'>#wordpress</p>

                    <BiLinkExternal className='opacity-100 text-black absolute right-5 bottom-5' size={40}></BiLinkExternal>
                </div>
            </Link>

            <Link to={"/about-me"}>Lahedat minust veel</Link>
        </main>
    );
};

export default Home;