import React, { use } from "react";
import { Link, useNavigate } from "react-router";

const FeaturedProducts = ({ featurePromise }) => {
  const featureProperty = use(featurePromise);
  const navigate = useNavigate();
  // const { propertyName, category, description, location, price } = featureProperty;
  // console.log('feature property ', featureProperty);
  return (
    <div className="space-y-5 lg:p-4">
      <h1 className="font-poppins font-bold text-6xl text-center">
        Featured <span className="text-primary">Properties</span>
      </h1>
      <p className="font-inter font-semibold text-2xl text-center text-gray-500">
        Explore our latest listed homes and rentals
      </p>

      {/* products here */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {featureProperty.map((property) => (
          <div
            key={property._id}
            className=" w-full max-h-120 card bg-base-100 shadow-sm hover:scale-102"
          >
            <figure>
              <img
                src={property.image}
                alt="Property"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              {/* name + category */}
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">{property.propertyName}</h2>
                </div>
                <div>
                  <h2>{property.category}</h2>
                </div>
              </div>

              {/* description */}
              <div>
                <p>{property.description}</p>
              </div>

              {/* location + price  */}
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">{property.location}</h2>
                </div>
                <div>
                  <h2>Price: ৳{property.price}</h2>
                </div>
              </div>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">View Details</button> */}
                <Link
                  to={`/property-details/${property._id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1
          onClick={() => navigate("/all-properties")}
          className="text-end underline text-primary cursor-pointer"
        >
          All Properties
        </h1>
      </div>
    </div>
  );
};

export default FeaturedProducts;
