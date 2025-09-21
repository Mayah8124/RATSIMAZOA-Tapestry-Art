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
                <p className='text-title-secondary text-2xl pr-8 pl-[40vw]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odit blanditiis quo quasi provident esse ut consequuntur officiis, repellendus, ratione perferendis similique alias, saepe dolorum necessitatibus? Porro dolore tenetur officia! 
                </p>
            </div>
        </div>
    )
};