import creator from '../assets/creator.jpeg'

export default function About() {
    return (
        <div className=" flex pt-10 px-5 pb-5">
            <div className='w-[70vw] flex flex-col gap-6'>
                <h1 className='text-title-primary text-7xl font-bold font-serif font-stretch-expanded'>
                    About us ?
                </h1>
                <div  className='flex flex-col gap-6 text-white-var text-xl font-serif pr-40 tracking-widest'>
                    <p>
                        Whether as a gift, for decoration, or simply to treat yourself, my creations are designed to bring softness and authenticity to your everyday life.
                    </p>
                    <p>
                        Here, it's not just about selling products, but above all about passing on a passion and expertise. From a passion to a small business, crochet is a way of bringing colorful and warm ideas to life.
                    </p>
                </div>
            </div>
            <section className="bg-second-color w-[30vw] pt-5 px-2 flex flex-col items-center text-center gap-2 rounded-lg">
                <img src={creator} alt="Creator" className='h-[40vh] w-[40vh] rounded-xl object-cover' />
                <p className="text-title-primary font-serif p-5">
                    `I chose crochet because it's easy to do.
                     Ahhh, but also, it was just for fun, hihi to pass the time since I'm not studying yet.
                     My goal is not to sell my creations , no, my goal is to SHARE them and say that we can beautiful things by crochet`
                </p>
                <p className="text-random">

                </p>
            </section>
        </div>
    )
}