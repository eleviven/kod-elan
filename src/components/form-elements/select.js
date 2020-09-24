import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./form-elements.module.css";

function Select({ children, size, round, label, className, ...props }) {
  return (
    <React.Fragment>
      {label && <label className={styles.label}>{label}</label>}
      <div className={cn(styles.group, round && styles.round)}>
        <select className={cn(styles.control, styles[size], className)} {...props}>
          {children}
        </select>
      </div>
    </React.Fragment>
  );
}

Select.defaultProps = {
  size: "normal",
  round: false,
};

Select.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  round: PropTypes.bool,
  label: PropTypes.string,
};

export default Select;
