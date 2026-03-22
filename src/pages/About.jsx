import creator from '../assets/creator.png'
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="min-h-screen w-full scroll-mt-15">
            <div className="flex flex-col lg:flex-row pt-10 px-4 sm:px-8 lg:px-16 pb-8 gap-8 lg:gap-12">
                {/* Left Column - Text */}
                <div className="flex flex-col gap-6 lg:w-3/5">
                    <h1 className="title-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif font-stretch-expanded">
                        About us
                    </h1>
                    <div className="flex flex-col gap-6 text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-serif pr-0 lg:pr-16 tracking-widest">
                        <p>
                            Whether as a gift, for decoration, or simply to treat yourself, my creations are designed to bring softness and authenticity to your everyday life.
                        </p>
                        <p>
                            `I chose crochet because it's easy to do.
                            Ahhh, but also, it was just for fun, hihihi to pass the time since I'm not studying yet.
                            My goal is not to sell my creations , no, my goal is to SHARE them and say that we can beautiful things by crochet`
                                                   
                        </p>
                        <p>
                            -- Ny Antsa RATSIMAZOA
                        </p>
                    </div>
                </div>

                {/* Right Column - Image */}
                <section className="bg-third-color w-full lg:w-2/5 pt-5 flex flex-col items-center text-center rounded-tr-[40rem] rounded-bl-[40rem] rounded-tl-[60rem]">
                    <img 
                        src={creator} 
                        alt="Creator" 
                        className='h-[50vh] sm:h-[60vh] lg:h-[80vh] w-auto max-w-full rounded-4xl object-cover'
                    />
                </section>
            </div>
        </section>
    );
});

export default About;
