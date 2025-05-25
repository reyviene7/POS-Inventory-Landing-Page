import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="Testimonial" className="mt-16 px-4 sm:px-8 tracking-wide">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl text-center my-10 lg:my-20 leading-tight">
        What People are Saying
      </h2>

      <div className="flex flex-wrap justify-center gap-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4"
          >
            <div className="bg-neutral-900 rounded-xl p-6 text-sm sm:text-base border border-neutral-800 font-thin h-full shadow-sm">
              <p className="mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 mr-4 sm:mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="text-base font-medium">{testimonial.user}</h6>
                  <span className="text-sm italic text-neutral-300">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
