import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
const UpdateInformations = () => {
  const onSubmit = (e) => {
    // e.status = 'pending';

    console.log(e);

    axios
      .put("https://hidden-crag-71902.herokuapp.com/User/updated", e)
      .then((res) => {
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
      <div class="comment-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 class="text-center display-1 secondary-title py-2">
            Update Your informations
          </h3>
          <div class="d-flex justify-content-between flex-wrap">
            <input
              {...register("photoURl", {})}
              defaultValue={user?.photoURL}
              type="text"
              class="form-control"
              placeholder="Enter Your profile image link"
            />

            <input
              {...register("displayName", {})}
              defaultValue={user.displayName}
              type="name"
              class="form-control"
              placeholder="Enter your new Name
        "
            />

            <input
              {...register("email", {})}
              defaultValue={user.email}
              type="email"
              class="form-control"
              placeholder="Enter your new Email "
            />

            <textarea
              {...register("about", {})}
              type="text"
              class="form-control"
              placeholder="Enter about your self"
            />

            <input
              {...register("number", {})}
              type="number"
              class="form-control"
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
              class="form-control"
              placeholder="Enter  your Roll Number "
            />
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary display-2 text-light mt-2"
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
