const About = () => {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gradient ">
        <u>
          <span className="mb-2">About Us</span>
        </u>
      </h2>
      <div className="bg-gray-100 space-y-7 pl-12 px-4 w-full lg:w-3/4 lg:mx-auto rounded-lg lg:px-12 mt-12 mb-12 shadow-xl">
        <div className="flex flex-col-reverse lg:flex-row-reverse p-4 gap-6 items-center">
          <div className="text-sm  font-semibold w-full">
            <p className="text-gradient">
              Welcome to Evento, your go-to for exceptional event management. We
              turn your vision into unforgettable experiences with precision and
              creativity.
            
              Specializing in corporate events, weddings, social gatherings, and
              conferences, our dedicated team ensures meticulous planning and
              flawless execution.
            
              At Evento, we personalize every event to meet your unique needs,
              making your dream event a reality. Let's create lasting memories
              together.
              Welcome to Evento, your go-to for exceptional event management. We
              turn your vision into unforgettable experiences with precision and
              creativity.
            
              Specializing in corporate events, weddings, social gatherings, and
              conferences, our dedicated team ensures meticulous planning and
              flawless execution.
            
              At Evento, we personalize every event to meet your unique needs,
              making your dream event a reality. Let's create lasting memories
              together.
            </p>
          </div>
          <div className="">
            <img
              className="rounded-xl w-full"
              src="https://i.ibb.co/DLqqnK7/Screenshot-2024-07-15-083813.png"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
