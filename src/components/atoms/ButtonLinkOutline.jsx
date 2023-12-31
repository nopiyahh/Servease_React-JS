import React from "react";
import { Link } from "react-router-dom";
import "../../styles/atoms/buttonOutline.css";

const ButtonLinkOutline = ({ text, path, target = null }) => {
  return (
    <Link to={path} className="btn-main-outline" target={target}>
      {text}
    </Link>
  );
};

export default ButtonLinkOutline;
