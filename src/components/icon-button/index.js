import React from "react";
import cn from "classnames";
import styles from "./icon-button.module.css";
import Button from "../button";

function IconButton({ children, size, ...props }) {
  return (
    <Button className={cn(styles.button, styles[size])} {...props}>
      {children}
    </Button>
  );
}

IconButton.defaultProps = {
  size: "normal",
};

export default IconButton;
