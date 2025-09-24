import { customers } from "../data/customers"

export default function Review() {
    return (
        <div>
            <div className='flex flex-col gap-2 text-center font-serif font-stretch-expanded py-5'>
                <h1 className="text-title-primary text-7xl font-bold">
                    Reviews
                </h1>
                <p className="text-white-var">
                    More the client are satisfied more I am proud of myself
                </p>
            </div>
            <div className="mt-10">
                {
                    customers.map((c) => {
                        <div>
                            <div>
                                <img src={c.picture} alt="customer_picture" />
                            </div>
                            <div>
                                <h1>
                                    {c.name}
                                </h1>
                                <p>
                                    {c.review}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}