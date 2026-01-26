import React from 'react';
import { MdVerified } from 'react-icons/md';
import { VscSymbolProperty, VscWorkspaceTrusted } from 'react-icons/vsc';

const WhyChose = () => {
  return (
    <section className="py-16 bg-white rounded-lg mb-10">
      <div className="w-full lg:w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-poppins font-bold mb-10 text-gray-800">Why Chose Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-50 hover:scale-103 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <VscWorkspaceTrusted className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-2">
                Trusted Listings
              </h3>
              <p className="text-gray-600 font-inter">
                Only genuine, up-to-date property listings you can rely on.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 hover:scale-103 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <MdVerified className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-2">
                Verified Owners
              </h3>
              <p className="text-gray-600 font-inter">
                Connect directly with real and verified property owners.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 hover:scale-103 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex flex-col items-center">
              <VscSymbolProperty className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-poppins font-semibold mb-2">
                Easy Property Management
              </h3>
              <p className="text-gray-600 font-inter">
                Add, update, and manage properties with zero hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChose;