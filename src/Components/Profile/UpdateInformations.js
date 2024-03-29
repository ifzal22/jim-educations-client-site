import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
const UpdateInformations = () => {
  const onSubmit = (e) => {
    // e.status = 'pending';

    console.log(e);

    axios.put("http://localhost:5000/User/updated", e).then((res) => {
      if (res.data.acknowledged) {
        console.log(res.data);
        alert("added successfully");
        reset();
      }
    });
  };

  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  return (
    <div>
      {/* <!-- comment form --> */}
      <div className="comment-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center display-1 secondary-title py-2">
            Update Your informations
          </h3>
          <div className="d-flex justify-content-between flex-wrap">
            <input
              {...register("photoURl", {})}
              defaultValue={user?.photoURL}
              type="text"
              className="form-control"
              placeholder="Enter Your profile image link"
            />

            <input
              {...register("displayName", {})}
              defaultValue={user.displayName}
              type="name"
              className="form-control"
              placeholder="Enter your new Name
        "
            />

            <input
              {...register("email", {})}
              defaultValue={user.email}
              type="email"
              className="form-control"
              placeholder="Enter your new Email "
            />

            <textarea
              {...register("about", {})}
              type="text"
              className="form-control"
              placeholder="Enter about your self"
            />

            <input
              {...register("number", {})}
              type="number"
              className="form-control"
              placeholder="Enter  your NUMBER"
            />

            <select
              {...register("className", {})}
              className="form-select box form-control"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option className="text-prymari" selected>
                Select Your Class
              </option>
              <option value="Class One">Class One</option>
              <option value="Class Two">Class Two</option>
              <option value="Class Tree">Class Tree</option>

              <option value="Class Four">Class Four</option>
              <option value="Class Five">Class Five</option>
              <option value="Class Six">Class Six</option>
              <option value="Class Seven">Class Seven</option>
              <option value="Class Eight">Class Eight</option>
              <option value="Class Nine">Class Nine</option>
              <option value="Class Ten">Class Ten</option>
              <option value="Class Alim">Class Alim</option>
            </select>

            <input
              {...register("rollNumber", {})}
              type="number"
              className="form-control"
              placeholder="Enter  your Roll Number "
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary display-2 text-light mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInformations;
