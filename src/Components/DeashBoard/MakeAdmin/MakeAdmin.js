import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = useAuth();
  const onSubmit = (e) => {
    // console.log(e)

    axios
      .put("http://localhost:5000/User/users/admin", e, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          console.log(res.data);
          alert("Admin add successfully");
          reset();
        }
      });
  };
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>ADD Admin</h3>
        <input
          required
          type="email"
          className="box"
          {...register("email", { required: true, maxLength: 50 })}
          placeholder="enter your email"
        />

        <input className="btn" type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
