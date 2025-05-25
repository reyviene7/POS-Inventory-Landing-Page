import video1 from "../assets/video1.mp4";
import pilot from "../assets/pilot_test.mp4";
import pilot_test from "../assets/pilot.mp4";
import pos from "../assets/pos.png"; 

const HeroSection = () => {
  return (
    <div id="Hero" className="flex flex-col items-center mt-6 lg:mt-15 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row w-full items-center">
        <div className="lg:w-1/2 w-full text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl tracking-wide leading-tight">
            Effortlessly Craft your{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              sales and inventory{" "}
            </span>
            solution
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl">
            Designed with Filipino businesses in mind, The POS Wizard has become
            the go-to solution for SMEs and MSMEs across the country. Your ultimate
            partner for success in every negosyo!
          </p>
          <div className="flex mt-8 space-x-4">
            <a
              href="https://www.facebook.com/ThePosWizard"
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-white py-3 px-6 rounded-md shadow-md hover:opacity-90"
            >
              Buy Now!
            </a>
            <a
              href="https://messenger.com//t/396998146827478"
              className="py-3 px-6 rounded-md border border-neutral-300 hover:bg-neutral-800 text-white"
            >
              Request a Demo
            </a>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center">
          <img
            src={pos}
            alt="POS System"
          />
        </div>
      </div>

      {/* LOWER SECTION: Videos */}
      <div className="flex justify-center mt-16 w-full">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/4 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={pilot} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/4 border border-blue-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={pilot_test} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
