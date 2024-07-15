const Banner = () => {
  return (
    <div className="bg-banner-gradient space-y-7 pl-12 px-4 w-full lg:w-3/4 lg:mx-auto rounded-lg lg:px-12">
      <div className="py-12">
        <h2 className="text-xl lg:text-5xl text-gradient">
          All Events Together In One Place
        </h2>
        <h2 className="text-xl lg:text-5xl text-gradient text-center">
          Choose Your Event And
        </h2>
        <div className="flex justify-end">
          <button className="text-xl lg:text-5xl text-gradient rounded-lg px-2 py-1 w-1/3 items-end">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
