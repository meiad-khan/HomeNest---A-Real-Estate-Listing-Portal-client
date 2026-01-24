import { FaHome, FaBuilding, FaStore, FaTree } from "react-icons/fa";

const PropertyCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-poppins font-semibold text-center mb-10">
          <span className="text-primary">Property</span> Categories
        </h2>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white border rounded-lg p-6 text-center hover:border-primary transition">
            <FaHome className="text-3xl text-primary mx-auto mb-3" />
            <h3 className="font-medium font-inter">Rent</h3>
          </div>

          <div className="bg-white border rounded-lg p-6 text-center hover:border-primary transition">
            <FaBuilding className="text-3xl text-primary mx-auto mb-3" />
            <h3 className="font-medium font-inter">Sale</h3>
          </div>

          <div className="bg-white border rounded-lg p-6 text-center hover:border-primary transition">
            <FaStore className="text-3xl text-primary mx-auto mb-3" />
            <h3 className="font-medium font-inter">Commercial</h3>
          </div>

          <div className="bg-white border rounded-lg p-6 text-center hover:border-primary transition">
            <FaTree className="text-3xl text-primary mx-auto mb-3" />
            <h3 className="font-medium font-inter">Land</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
