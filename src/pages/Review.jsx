import { customers } from "../data/customers"

export default function Review() {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-2 text-center font-serif font-stretch-expanded py-5">
        <h1 className="text-title-primary text-7xl font-bold">
          Reviews
        </h1>
        <p className="text-white-var">
          More the client are satisfied more I am proud of myself
        </p>
      </div>

      <div className="mt-10 px-5 grid grid-cols-4 justify-around">
        {customers.map((c) => (
          <div
            key={c.id ?? c.name}
            className="w-[21vw] h-[48vh] bg-fourth-color rounded-xl rounded-xl shadow-md m-3
                       transition-transform duration-200 hover:scale-110"
          >
            <div className="rounded-t-xl bg-third-color p-2 flex justify-center items-center">
              <img
                src={c.picture}
                alt="customer_picture"
                className="w-[50%] object-cover rounded-full"
              />
            </div>

            <div className="bg-fourth-color flex flex-col gap-2 font-serif font-stretch-condensed text-center p-4 rounded-b-xl">
              <h1 className="text-xl text-title-secondary font-semibold">
                {c.name}
              </h1>
              <p>"{c.review}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}