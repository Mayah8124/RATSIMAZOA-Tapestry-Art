import summer_bag from '../assets/done_art/summer_bag.png'
import flower_bag from '../assets/done_art/flower_bag.png'
import heart_bag from '../assets/done_art/heart_bag.png'
import the_weeknd from '../assets/done_art/the_weeknd.png'

import cat_with_yarn from '../assets/pictures/cat_with_yarn.png'
import basket_yarn_ball from '../assets/pictures/basket_yarn_ball.png'

import SlideShow from '../Components/HomeComponents/SlideShow.jsx'

export default function Product() {
    const images = [
        summer_bag , flower_bag , heart_bag , the_weeknd
    ]

    return (
        <div className='py-5'>
            <div className='flex flex-col gap-2 text-center font-serif font-stretch-expanded py-5'>
                <h3 className='text-title-primary text-7xl font-bold'>
                    Our Products
                </h3>
                <p className='text-white-var'>
                    Small projet for a big dream
                </p>
            </div>
            <div>
                <div className='grid grid-cols-4 gap-1 px-3'>
                    <img src={summer_bag} alt="summer_bag" className='w-[20vw] h-[60vh] border-b-fuchsia-300 bg-third-color rounded-md shadow-lg object-cover
                                                            transition-transform duration-200 hover:scale-110' />
                    <img src={flower_bag} alt="flower_bag" className='w-[20vw] h-[60vh] border-b-fuchsia-300 bg-third-color rounded-md shadow-lg object-cover
                                                            transition-transform duration-200 hover:scale-110' />
                    <img src={heart_bag} alt="heart_bag" className='w-[20vw] h-[60vh] border-b-fuchsia-300 bg-third-color rounded-md shadow-lg object-cover
                                                            transition-transform duration-200 hover:scale-110' />
                    <img src={the_weeknd} alt="the_weeknd" className='w-[20vw] h-[60vh] border-b-fuchsia-300 bg-third-color rounded-md shadow-lg object-cover
                                                            transition-transform duration-200 hover:scale-110' />
                </div>
            </div>
        </div>
    )
}