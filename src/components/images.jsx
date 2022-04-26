import React, { useState, useEffect } from "react";
import axios from "../axios";
const Images = () => {
  const [imageAddress, setImageAddress] = useState();
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
      images.forEach((image) => {
        let image_Data = image.img.data.data;
        let binary64String = arrayBufferToBase64(image_Data);
        let base64Flag = "data:image/jpeg;base64,";
        console.log(image_Data);
        console.log(binary64String);
        setImageAddress(base64Flag + binary64String);

        console.log(typeof image_Data);
        console.log(typeof binary64String);
      });
      // message = message.data.img.data.data;

      // console.log(message);
      // console.log(images);
    };

    greetings();
  }, []);

  return (
    <div>
      <img src={imageAddress} alt="Image" />
    </div>
  );
};

export default Images;
