import { FaUserPlus, FaHome, FaStar } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-semibold font-poppins text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-3">1</div>
            <FaUserPlus className="text-3xl text-primary mx-auto mb-3" />
            <h3 className="font-medium font-inter">Create an Account</h3>
            <p className="text-sm font-inter text-gray-500 mt-1">
              Sign up to get started
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-3">2</div>
            <FaHome className="text-3xl text-primary mx-auto mb-3" />
            <h3 className="font-medium font-inter">Add or Browse Properties</h3>
            <p className="text-sm font-inter text-gray-500 mt-1">
              List or explore properties
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-3">3</div>
            <FaStar className="text-3xl text-primary mx-auto mb-3" />
            <h3 className="font-medium font-inter">Rate & Review Listings</h3>
            <p className="text-sm font-inter text-gray-500 mt-1">
              Share your experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
