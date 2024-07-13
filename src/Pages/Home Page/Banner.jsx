const Banner = () => {
  return (
    <div className="bg-banner-gradient space-y-7 pl-12 px-4 w-full lg:w-3/4 lg:mx-auto rounded-lg lg:px-12">
      <h2 className="text-xl lg:text-5xl text-white">All Events Together In One Place</h2>
      <h2 className="text-xl lg:text-5xl text-white text-center">Choose Your Event And</h2>
      <div className="flex justify-end">
      <button className="bg-indigo-600 text-xl lg:text-5xl text-white rounded-lg px-2 py-1 w-1/3 items-end">Explore</button>
      </div>
    </div>
  );
};

export default Banner;
