import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../Components/Loading";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [myPropertyLoading, setMyPropertyLoading] = useState(false);
  const [myProperty, setMyProperty] = useState([]);
  const [editProperty, setEditProperty] = useState({
    propertyName: "",
    category: "",
    description: "",
    price: "",
    location: "",
    image: "",
  });

  const modalRef = useRef();
  /**useEffect(() => {
  if (!user) return;
  const fetchProperties = async () => {
    setMyPropertyLoading(true);
    try {
      const res = await fetch(
        `https://real-estate-server-khaki-eight.vercel.app/properties?email=${user.email}`
      );
      const data = await res.json();
      setMyProperties(data);
    } catch (error) {
      console.error(error);
    } finally {
      setMyPropertyLoading(false);
    }
  };
  fetchProperties();
}, [user]);
 */

  useEffect(() => {
    if (!user) return;
    const fetchProperties = async () => {
      setMyPropertyLoading(true);
      try {
        const res = await fetch(`https://real-estate-server-khaki-eight.vercel.app/properties?email=${user.email}`);
        const data = await res.json();
        // console.log('data is ', data);
        setMyProperty(data.result);
      }
      catch (error) {
        console.error(error);
      }
      finally {
        setMyPropertyLoading(false);
      }
    }
    fetchProperties(); 
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const { _id, ...updateData } = editProperty;
    // console.log('consoling update data',updateData);

    fetch(
      `https://real-estate-server-khaki-eight.vercel.app/properties/${_id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateData),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        //start from here......
        if (data.modifiedCount) {
          setMyProperty((prev) =>
            prev.map((item) =>
              item._id === editProperty._id
                ? { ...item, ...editProperty }
                : item,
            ),
          );
          // console.log("after updating", data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Property Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          modalRef.current.close();
        }
      });
  };

  const handleDelete = (id) => {
    // console.log('delete the id ', id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://real-estate-server-khaki-eight.vercel.app/properties/${id}`,
          {
            method: "delete",
            headers: { "content-type": "application/json" },
          },
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              // Swal.fire({
              //   position: "top-end",
              //   icon: "success",
              //   title: "Property Deleted Successfully",
              //   showConfirmButton: false,
              //   timer: 1500,
              // });
              const remaimingProperties = myProperty.filter(
                (property) => property._id !== id,
              );
              setMyProperty(remaimingProperties);
              // console.log('my property', myProperty);
              // console.log('remaining ', remaimingProperties);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Property has been deleted.",
          icon: "success",
        });
      }
    });
  };

  // console.log('my property', myProperty);

  return (
    <div className="max-w-7xl mx-auto lg:p-4 mt-15 mb-20 shadow-md">
      <h1 className="text-6xl font-poppins text-center mb-10">
        My <span className="text-primary">Properties</span>
      </h1>

      {/* my property here */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`}
      >
        {myPropertyLoading ? (
          <div className="col-span-full">
            <Loading></Loading>
          </div>
        ) : !myPropertyLoading && myProperty.length > 0 ? (
          myProperty.map((p) => (
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
                  <p className="font-inter">
                    Posted Date: {new Date(p.createdAt).toLocaleDateString()}
                  </p>
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

                {/* update and delete button */}
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      setEditProperty({
                        _id: p._id,
                        propertyName: p.propertyName ?? "",
                        category: p.category ?? "",
                        description: p.description ?? "",
                        price: p.price ?? "",
                        location: p.location ?? "",
                        image: p.image ?? "",
                      });
                      modalRef.current.showModal();
                    }}
                    className="btn bg-gray-300"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn bg-gray-300"
                  >
                    Delete
                  </button>
                </div>

                <div className="card-actions justify-end">
                  <Link
                    to={`/property-details/${p._id}`}
                    className="btn w-full btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-40">
            <h2 className="text-[48px] font-poppins font-bold text-center">
              Oops, You Have No Property!
            </h2>
          </div>
        )}
      </div>
      {/* modal... */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold font-poppins text-2xl">
                Update <span className="text-primary">Property!</span>
              </h3>
            </div>
            <div className="modal-action -mt-2 -mr-2">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
          {/* <p className="py-4">
            Press ESC key or click the button below to close
          </p> */}
          <div>
            <form onSubmit={handleUpdate}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box shadow-xl  border p-4">
                <legend className="fieldset-legend font-poppins">houzez</legend>

                {/* Product name and Category */}
                <div className="flex justify-between items-center gap-3">
                  <div className="w-1/2">
                    <label className="label text-xl">Property Name</label>
                    {/* <input
  value={editProperty.propertyName}
  onChange={e =>
    setEditProperty({ ...editProperty, propertyName: e.target.value })
  }
/>
 */}
                    <input
                      type="text"
                      name="pName"
                      className="input"
                      placeholder="Product Name"
                      value={editProperty.propertyName}
                      onChange={(e) =>
                        setEditProperty({
                          ...editProperty,
                          propertyName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="label text-xl">Category</label>

                    <select
                      name="category"
                      className="select select-bordered w-full"
                      value={editProperty.category}
                      onChange={(e) =>
                        setEditProperty({
                          ...editProperty,
                          category: e.target.value,
                        })
                      }
                    >
                      <option className="" value="" disabled>
                        Select category
                      </option>
                      <option value="Rent">Rent</option>
                      <option value="Sale">Sale</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Land">Land</option>
                    </select>
                  </div>
                </div>

                {/* description */}
                <div className="w-full flex flex-col">
                  <label className="label text-xl">Description</label>
                  <input
                    type="text"
                    name="desc"
                    className="input w-full"
                    placeholder="Description"
                    value={editProperty.description}
                    onChange={(e) =>
                      setEditProperty({
                        ...editProperty,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Price and location */}
                <div className="flex justify-between items-center gap-3">
                  <div className="w-1/2">
                    <label className="label text-xl">Price</label>
                    <input
                      type="number"
                      name="price"
                      className="input"
                      placeholder="Price"
                      value={editProperty.price}
                      onChange={(e) =>
                        setEditProperty({
                          ...editProperty,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="label text-xl">Location</label>
                    <input
                      type="text"
                      name="location"
                      className="input"
                      placeholder="Location"
                      value={editProperty.location}
                      onChange={(e) =>
                        setEditProperty({
                          ...editProperty,
                          location: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Product image url */}
                <div className="w-full flex flex-col">
                  <label className="label text-xl">Property Image</label>
                  <input
                    type="text"
                    name="image"
                    className="input w-full"
                    placeholder="photoURL"
                    value={editProperty.image}
                    onChange={(e) =>
                      setEditProperty({
                        ...editProperty,
                        image: e.target.value,
                      })
                    }
                  />
                </div>

                {/* UserEmail and UserName*/}
                <div className="flex justify-between items-center gap-3">
                  <div className="w-1/2">
                    <label className="label text-xl">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                      defaultValue={user.email}
                      readOnly
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="label text-xl">Name</label>
                    <input
                      type="text"
                      name="UserName"
                      className="input"
                      placeholder="Name"
                      defaultValue={user.displayName}
                      readOnly
                    />
                  </div>
                </div>

                <button className="btn btn-primary mt-4">
                  Update Property
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProperties;
