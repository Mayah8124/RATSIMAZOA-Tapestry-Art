import creator from '../assets/creator.png'
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="min-h-screen w-full scroll-mt-15">
            <div className=" flex pt-10 px-5 pb-5">
                <div className='w-[60vw] flex flex-col gap-6'>
                    <h1 className='title-primary text-7xl font-bold font-serif font-stretch-expanded'>
                        About us 
                    </h1>
                    <div  className='flex flex-col gap-6 text-primary text-xl font-serif pr-40 tracking-widest'>
                        <p>
                            Whether as a gift, for decoration, or simply to treat yourself, my creations are designed to bring softness and authenticity to your everyday life.
                        </p>
                        <p>
                            `I chose crochet because it's easy to do.
                            Ahhh, but also, it was just for fun, hihihi to pass the time since I'm not studying yet.
                            My goal is not to sell my creations , no, my goal is to SHARE them and say that we can beautiful things by crochet`
                            -- Ny Antsa RATSIMAZOA                       
                        </p>
                    </div>
                </div>
                <section className="bg-second-color w-[40vw] pt-5 flex flex-col items-center text-center rounded-tr-[40rem] rounded-bl-[40rem] rounded-br-[80rem] rounded-tl-[80rem]">
                    <img src={creator} alt="Creator" className='h-[70vh] rounded-4xl object-cover' />
                </section>
            </div>
        </section>
    );
});

export default About;
