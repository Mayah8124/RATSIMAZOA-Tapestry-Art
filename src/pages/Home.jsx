export default function Home() {
    return (
        <div className={`w-full h-[95vh] bg-[url('/images/bg1.png')] bg-cover bg-center`}>
            <div className='absolute flex flex-col gap-4 top-1/5 right-0 pr-4 text-right'>
                <h1 className="text-title-primary text-4xl font-serif font-bold">
                    Tapestry Art and Crochet 
                </h1>
                <h3 className='text-title-primary text-7xl font-serif font-bold'>
                    by RATSIMAZOA
                </h3>
                <p className='text-title-secondary text-md pr-3 pl-[58vw] text-white-var'>
                    a small personal project created by a lovely girl who wants to share her passion and her art
                </p>
            </div>
        </div>
    )
};