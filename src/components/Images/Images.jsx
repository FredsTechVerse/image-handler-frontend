import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Image from "../Image/Image";
import "./Images.css";
const Images = () => {
  const [imageAddress, setImageAddress] = useState([]);

  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  useEffect(() => {
    const greetings = async () => {
      let message = await axios.get("./images");
      let images = message.data;
      setImageAddress(images);
      console.log(images);
    };

    greetings();
  }, []);

  return (
    <div className="container">
      <h1>CONSUMING IMAGES FROM MONGODB</h1>
      <p>
        This application demonstrates consumption of images uploaded to mongodb
        via multer.
      </p>

      <h3>Images in MongoDB</h3>
      <div className="imagesContainer">
        {imageAddress.map((image) => {
          let image_Data = image.img.data.data;
          let binary64String = arrayBufferToBase64(image_Data);
          let base64Flag = "data:image/jpeg;base64,";
          let combined = base64Flag + binary64String;
          return <Image src={combined} />;
        })}
      </div>
    </div>
  );
};

export default Images;
