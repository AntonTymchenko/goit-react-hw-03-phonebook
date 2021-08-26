import PropTypes from "prop-types";
import React from "react";
import s from "./Panel.module.css";

const Panel = ({ title, children }) => (
  <>
    <h1 className={s.title}>{title}</h1>
    {children}
  </>
);

Panel.defaultProps = {
  title: "",
  children: [],
};
Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Panel;
