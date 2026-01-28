import React, { useContext } from 'react';
import { AuthContext } from "../Provider/AuthContext";


const AddProperties = () => {

  const {user} = useContext(AuthContext)

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const pName = form.pName.value;
    const category = form.category.value;
    const desc = form.desc.value;
    const price = form.price.value;
    const location = form.location.value;
    const image = form.image.value;
    const name = form.UserName.value;
    const email = form.email.value;
    // console.log({ pName, category, desc, price, location, image, email, name });

    const newProperty = {
      propertyName: pName,
      description: desc,
      category,
      price,
      location,
      image,
      userName: name,
      userEmail: email,
    };

    // console.log(newProperty);

    fetch("http://localhost:3000/properties", {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newProperty)
    })
      .then(res => res.json())
      .then(data => {
        console.log('after post', data);
        form.reset();
    })

  }
  return (
    <div className="lg:min-h-screen max-w-7xl mx-auto my-15 flex flex-col items-center space-y-3.5">
      <h1 className="text-6xl font-poppins text-center">
        Add A <span className="text-primary">Property</span>
      </h1>
      <div className="lg:w-1/2">
        <form onSubmit={handleAddProduct}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box shadow-xl  border p-4">
            <legend className="fieldset-legend font-poppins">houzez</legend>

            {/* Product name and Category */}
            <div className="flex justify-between items-center gap-3">
              <div className="w-1/2">
                <label className="label text-xl">Property Name</label>
                <input
                  type="text"
                  name="pName"
                  className="input"
                  placeholder="Product Name"
                />
              </div>
              <div className="w-1/2">
                <label className="label text-xl">Category</label>

                <select
                  name="category"
                  className="select select-bordered w-full"
                  defaultValue=""
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
                />
              </div>
              <div className="w-1/2">
                <label className="label text-xl">Location</label>
                <input
                  type="text"
                  name="location"
                  className="input"
                  placeholder="Location"
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

            <button className="btn btn-primary mt-4">Add Property</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;