import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const AllProperties = () => {

  const { user, loading } = useContext(AuthContext);
  
 
  const [property, setProperty] = useState([]);
  const [totalProperty, setTotalProperty] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState("price");
  const [order, setOrder] = useState('');
  const [searchText, setSearchText] = useState("");
  const limit = 6;

  useEffect(() => {
    fetch(`http://localhost:3000/properties?limit=${limit}&skip=${currentPage * limit}&sort=${sort}&order=${order}&search=${searchText}`)
      .then(res => res.json())
      .then(data => {
        // console.log('all product hrere', data);
        setProperty(data.result);
        setTotalProperty(data.total);
        const page = Math.ceil(data.total / limit);
        setTotalPage(page);
      })
  }, [limit, sort, order, searchText, currentPage]);

  // console.log('checking', property);
  
  const handleSort = (e) => {
    console.log(e.target.value);
  }

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex justify-center items-center">
          <span className="text-8xl loading loading-bars loading-xl"></span>
        </div>
      </>
    );
  }
  

  return (
    <div className="max-w-7xl mx-auto lg:p-4 mt-15 border-2 mb-20 shadow-md border-red-700">
      <h1 className="text-5xl text-center font-bold font-poppins">
        All <span className="text-primary">Properties</span>
      </h1>

      {/* search and sort here */}
      <div className="flex flex-wrap justify-between my-5">
        <div>
          <h2 className="text-3xl font-inter">({totalProperty}) Properties</h2>
        </div>
        {/* search */}
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>

        {/* sort */}
        <div>
          <select
            onChange={handleSort}
            defaultValue="Sort"
            className="select select-md"
          >
            <option disabled={true}>Sort</option>
            <option>Medium Apple</option>
            <option>Medium Orange</option>
            <option>Medium Tomato</option>
          </select>
        </div>
      </div>

      {/* all properties here */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {property &&
          property.map((p) => (
            <div
              key={p._id}
              className=" w-full max-h-120 card bg-base-100 shadow-sm hover:scale-102"
            >
              <figure>
                <img
                  src={p.image}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                {/* name + category */}
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title">{p.propertyName}</h2>
                  </div>
                  <div>
                    <h2>{p.category}</h2>
                  </div>
                </div>

                {/* description */}
                <div>
                  <p className="font-inter">Posted By: {p.userName}</p>
                </div>

                {/* location + price  */}
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title">{p.location}</h2>
                  </div>
                  <div>
                    <h2>Price: ৳{p.price}</h2>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-wrap justify-end gap-3.5 my-5">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn"
          >
            <FaArrowLeft />
            Prev
          </button>
        )}
        {[...Array(totalPage).keys()].map((i) => (
          <button
            onClick={() => setCurrentPage(i)}
            key={i}
            className={`btn ${i == currentPage && "btn-primary"}`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPage - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn"
          >
            Next
            <FaArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProperties;