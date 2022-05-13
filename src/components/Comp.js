import React from "react";

const Comp = (props) => {
  const { isShow, pComponent, children } = props;
  return <div>{isShow ? pComponent : children}</div>;
};

export default Comp;
