import React from "react";
import styles from "./Typography.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export const TypographyElements = {
  headingL: "h1",
  headingM: "h2",
  headingS: "h3",
  body: "p",
};

const Typography = ({ elType, className = "", id = "", children }) => {
  if (!Object.keys(TypographyElements).includes(elType)) {
    throw new TypeError("Unsupported element type for Typography component");
  }
  const Tag = TypographyElements[elType];

  const combinedClassName = classNames(className, {
    [styles.headingL]: elType === "headingL",
    [styles.headingM]: elType === "headingM",
    [styles.headingS]: elType === "headingS",
    [styles.body]: elType === "body",
  });

  return (
    <Tag className={combinedClassName} id={id}>
      {children}
    </Tag>
  );
};

Typography.propTypes = {
  elType: PropTypes.oneOf(Object.keys(TypographyElements)).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;