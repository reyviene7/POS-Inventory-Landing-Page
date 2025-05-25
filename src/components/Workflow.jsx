import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/image.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div id="About" className="mt-16 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl text-center mt-6 tracking-wide leading-tight">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Business Operation.
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 mt-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" className="w-full h-auto" />
        </div>

        {/* Checklist Section */}
        <div className="w-full lg:w-1/2 space-y-10">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-green-400 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="text-lg sm:text-xl font-medium mb-1">
                  {item.title}
                </h5>
                <p className="text-sm sm:text-base text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
