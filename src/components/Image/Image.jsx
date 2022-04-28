import React from "react";
import "./image.css";
import { motion } from "framer-motion";

const Image = ({ src }) => {
  return (
    <motion.img
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.7 }}
      src={src}
      alt="image"
    ></motion.img>
  );
};

export default Image;
