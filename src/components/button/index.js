import React from "react";
import cn from "classnames";
import styles from "./button.module.css";
import PropTypes from "prop-types";

function Button({ children, className, label, variant, size, round, ...props }) {
  return (
    <button className={cn(styles.button, styles[variant], styles[size], round && styles.round, className)} {...props}>
      {label ? label : children}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
  size: "normal",
  round: false
}

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning"]),
  size: PropTypes.oneOf(["normal", "small", "large"]),
  round: PropTypes.bool
};

export default Button;
