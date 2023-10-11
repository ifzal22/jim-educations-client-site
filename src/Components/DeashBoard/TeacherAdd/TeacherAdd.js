import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TeacherAdd = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const [prigress, setprigress] = useState();
  //   const [image, setImage] = useState(null);

  // IMAGE HANDLE

  const fileInput = React.createRef();

  const onSubmitFn = (data) => {
    console.log(
      "onSubmitFn:",
      data,
      "  imageFile: ",
      fileInput.current.files[0].name
    );
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }
    console.log(fd);
    fd.append(
      "image",
      fileInput.current.files[0],
      fileInput.current.files[0].name
    );

    axios
      .post("http://localhost:5000/teacher/AddTeacher", fd, {
        onUploadProgress: (ProgressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%"
          );
          const prigress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total
          );
          setprigress(prigress * 100);
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          console.log(res);
          alert("added successfully");
          reset();
        }
        console.log("response from server: ", res);
      });
  };
  return (
    <div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmitFn)}>
          <h3>ADD Teacher</h3>
          <input
            required
            className="box"
            {...register("title", { required: true, maxLength: 100 })}
            placeholder="Teacher Name"
          />
          <input
            required
            className="box"
            {...register("number", { required: true, maxLength: 20 })}
            placeholder="add your number"
          />

          <textarea
            className="box"
            {...register("about")}
            placeholder="About"
          />

          {/* <input
            className="box"
            {...register("image1")}
            placeholder="image url"
          /> */}
          <div className="input-group mb-3 ">
            <select
              className="form-select box"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              {...register("position")}
            >
              <p>Select Your Position</p>
              <option value="principal">principal</option>
              <option value="vice-principal">vice-principal</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <label htmlFor="avatar">Select a Photo</label>
          <input
            className="box"
            type="file"
            id="avatar"
            name="avatar"
            multiple
            ref={fileInput}
          />

          <progress value={prigress} />

          <input className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default TeacherAdd;
