import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Rating } from '@smastrom/react-rating';
import Loading from '../Components/Loading';

const MyRatings = () => {
  const { user, loading } = useContext(AuthContext);
  const [ratings, setRings] = useState([]);

  
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log('ratings are ', data);
          setRings(data);
      })
    }
  }, [user])
  
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="pt-5 lg:py-10">
      <h1 className="text-6xl font-poppins text-center mb-10">
        My <span className="text-primary">Ratings</span>
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ratings.length > 0 ? (
          ratings.map((rating) => (
            <div className="card bg-base-100 shadow-md">
              <figure>
                <img
                  src={rating.propertyImage}
                  alt={rating.propertyName}
                  className="h-40 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                {/* Property name */}
                <h2 className="card-title">{rating.propertyName}</h2>

                {/* Reviewer */}
                <p className="text-sm text-gray-500">
                  Reviewer: {rating.reviewerName}
                </p>

                {/* Star rating */}
                <Rating
                  style={{ maxWidth: 120 }}
                  value={rating.rating}
                  readOnly
                />

                {/* Review text */}
                <p className="text-sm italic">“{rating.reviewText}”</p>

                {/* Date */}
                <p className="text-xs text-gray-400">
                  Review Date: {new Date(rating.reviewDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-40">
            <h2 className="text-[48px] font-poppins font-bold text-center">
              Oops, You Have No Ratings yet!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRatings;