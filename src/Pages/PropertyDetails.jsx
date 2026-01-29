import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Rating } from "@smastrom/react-rating";


const PropertyDetails = () => {
  const property = useLoaderData();
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  // console.log('id is ', id);
  // console.log('data is ', property);
  // className="max-w-7xl mx-auto lg:p-4 mt-15 mb-20 shadow-md"

  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log('after getting reviews ', data);
        setReviews(data);
      })
  }, [id]);
  // console.log('review are ', reviews);

  return (
    <div className="bg-base-200">
      <h1 className="text-5xl text-center font-bold py-8 font-poppins">
        <span className="text-primary">Property</span> Details
      </h1>

      {/* details card */}
      <div className="flex flex-col gap-5 lg:flex-row max-w-7xl mx-auto lg:p-4 rounded-lg mb-8 ">
        {/* image */}
        <div className="bg-base-100 w-full lg:w-1/2 p-4 rounded-xl">
          <figure className="h-115">
            <img
              src={property.image}
              alt="Property"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <p className="font-inter text-[18px] font-semibold my-2.5">
            {property.description}
          </p>
        </div>

        {/* product- seller related */}
        <div className="w-full lg:w-1/2 space-y-4  pt-7">
          <h2 className="text-4xl font-poppins font-bold">
            {property.propertyName}
          </h2>
          <div className="bg-base-100 shadow-md p-4 rounded-lg w-full space-y-2.5">
            <h2 className="font-poppins font-semibold text-xl">
              Product Details
            </h2>
            <p className="text-sm font-inter">
              <span className="font-medium">Price:</span> ৳{property.price}
            </p>
            <p className="text-sm font-inter">
              <span className="font-medium">Posted Date:</span>{" "}
              {new Date(property.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm font-inter">
              <span className="font-medium">Category:</span> {property.category}
            </p>
            <p className="text-sm font-inter">
              <span className="font-medium">Location:</span> {property.location}
            </p>
          </div>

          {/* owner info */}
          <div className="bg-base-100 shadow-md p-4 rounded-lg w-full space-y-2.5">
            <p className="font-poppins font-bold text-xl">Owner Information</p>
            <p className="text-sm font-inter">
              <span className="font-medium">Name: </span>
              {property.userName}
            </p>
            <p className="text-sm font-inter">
              <span className="font-medium">Email: </span>
              {property.userEmail}
            </p>
          </div>

          {/* btn */}
          <div>
            <button className="btn btn-primary w-full">Add to Cart</button>
          </div>
        </div>
      </div>

      {/* ratings and reviews */}
      <div className="bg-base-200 max-w-7xl mx-auto border-2 border-base-100 rounded-md hover:border-primary">
        <h1 className="text-5xl text-center font-bold py-8 font-poppins">
          <span className="text-primary">Ratings &</span> Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:p-4">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div
                key={r._id}
                className="bg-base-100 shadow-md p-5 rounded-lg space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={r.rating || 0}
                    readOnly
                  />
                  <span className="text-sm text-gray-500">
                    ({r.rating || "No rating"})
                  </span>
                </div>

                <p className="font-inter">{r.reviewText}</p>
                <p className="text-end font-poppins font-bold">
                  {r.reviewerName}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center h-40">
              <h2 className="text-[48px] font-poppins font-bold text-center">
                No Reviews and Ratings
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;