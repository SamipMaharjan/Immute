export default function Home() {
  return (
    <>
      <section className="hero bg-gradient-to-r from-[#C1DEE8] via-[#F5F5F5] to-[#FBD9B9] rounded-2xl pl-25 mt-8">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 py-30 ">
            <p className="text-[20px] font-extralight leading-[1]">
              Welcome to Immute
            </p>
            <h1 className="text-[77px] font-semibold leading-[1.2] my-7">
              Manage Your <br /> Property
            </h1>

            <p className="text-[20px] font-extralight leading-[1.3]">
              Your will have everything nearby supermarket, buses, <br />{" "}
              station, the carmen neighborhood, etc
            </p>

            <div className="relative w-full mt-7 max-w-md">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full pl-6 py-3 bg-white rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-700"
              />
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black hover:bg-black-700 text-white p-3 rounded-full transition"
              >
                Get a quote
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 relative">
            <img
              src="/hero_home.png"
              className=" absolute right-30 top-0"
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </>
  );
}
