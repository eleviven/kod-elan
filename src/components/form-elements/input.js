import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./form-elements.module.css";

function Input({
  className,
  size,
  round,
  label,
  rightText,
  leftText,
  RightIcon,
  LeftIcon,
  ...props
}) {
  return (
    <React.Fragment>
      {label && <label className={styles.label}>{label}</label>}
      <div className={cn(styles.group, round && styles.round)}>
        {(LeftIcon || leftText) && (
          <div className={styles.icon}>
            {leftText ? leftText : <LeftIcon />}
          </div>
        )}
        <input
          className={cn(styles.control, styles[size], className)}
          {...props}
        />
        {(RightIcon || rightText) && (
          <div className={styles.icon}>
            {rightText ? rightText : <RightIcon />}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Input.defaultProps = {
  size: "normal",
  round: false,
};

Input.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "normal", "large"]),
  round: PropTypes.bool,
  rightText: PropTypes.string,
  leftText: PropTypes.string,
  RightIcon: PropTypes.func,
  LeftIcon: PropTypes.func,
};

export default Input;
