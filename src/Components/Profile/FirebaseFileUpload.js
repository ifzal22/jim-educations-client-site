import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
const FirebaseFileUpload = () => {
  const storage = getStorage();

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  console.log("====================================");
  console.log(imageUrls);
  console.log("====================================");

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("successfully");
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className="modal-content">
      <div className="modal-body">
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button className="btn" onClick={uploadFile}>
          {" "}
          Upload Image
        </button>

        {/*     {imageUrls.map((url) => {
        return <image src={url} />;
      })} */}
      </div>
    </div>
  );
};

export default FirebaseFileUpload;
