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
    <div class="container">
      <h1>THE IMAGES IN THE DATABASE.</h1>
      <div class="imagesContainer">
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
