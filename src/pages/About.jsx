import creator from '../assets/creator.png'
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const About = forwardRef((props, ref) => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <motion.section
            ref={ref}
            className="min-h-screen w-full scroll-mt-15"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
        >
            <div className="flex flex-col lg:flex-row pt-10 px-4 sm:px-8 lg:px-16 pb-8 gap-8 lg:gap-12">
                {/* Left Column - Text */}
                <motion.div
                    className="flex flex-col gap-6 lg:w-3/5"
                    variants={textVariants}
                >
                    <motion.h1 
                        className="title-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif font-stretch-expanded"
                        variants={textVariants}
                    >
                        About us
                    </motion.h1>
                    <motion.div 
                        className="flex flex-col gap-6 text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-serif pr-0 lg:pr-16 tracking-widest"
                        variants={textVariants}
                        transition={{ delay: 0.1 }}
                    >
                        <motion.p
                            variants={textVariants}
                            transition={{ delay: 0.2 }}
                        >
                            Whether as a gift, for decoration, or simply to treat yourself, my creations are designed to bring softness and authenticity to your everyday life.
                        </motion.p>
                        <motion.p
                            variants={textVariants}
                            transition={{ delay: 0.3 }}
                        >
                            `I chose crochet because it's easy to do.
                            Ahhh, but also, it was just for fun, hihihi to pass the time since I'm not studying yet.
                            My goal is not to sell my creations , no, my goal is to SHARE them and say that we can beautiful things by crochet`
                        </motion.p>
                        <motion.p
                            variants={textVariants}
                            transition={{ delay: 0.4 }}
                        >
                            -- Ny Antsa RATSIMAZOA
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Right Column - Image */}
                <motion.section
                    className="bg-third-color w-full lg:w-2/5 pt-5 flex flex-col items-center text-center rounded-tr-[40rem] rounded-bl-[40rem] rounded-tl-[60rem]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.img 
                        src={creator} 
                        alt="Creator" 
                        className='h-[50vh] sm:h-[60vh] lg:h-[70vh] w-auto max-w-full rounded-4xl object-cover'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </motion.section>
            </div>
        </motion.section>
    );
});

export default About;
