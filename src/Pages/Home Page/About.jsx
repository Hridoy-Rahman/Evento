const About = () => {
  return (
    <section className="mt-10">
      <h2 className="text-5xl font-bold text-center mb-8 text-gradient ">
        <u>
          <span className="mb-2">About Us</span>
        </u>
      </h2>
      <div className="bg-banner-gradient space-y-7 pl-12 px-4 w-full lg:w-3/4 lg:mx-auto rounded-lg lg:px-12 mt-12 mb-12">
        <div className="flex flex-col-reverse lg:flex-row-reverse p-4 gap-6 items-center">
          <div className="text-lg lg:text-xl font-semibold">
            <p className="text-gradient">
              Welcome to Evento, your go-to for exceptional event management. We
              turn your vision into unforgettable experiences with precision and
              creativity.
            </p>
            <p className="text-gradient">
              Specializing in corporate events, weddings, social gatherings, and
              conferences, our dedicated team ensures meticulous planning and
              flawless execution.
            </p>
            <p className="text-gradient">
              At Evento, we personalize every event to meet your unique needs,
              making your dream event a reality. Let's create lasting memories
              together.
            </p>
          </div>
          <div className="h-full">
            <img
              className="rounded-xl"
              src="/public/about us.png"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
