import React from "react";

const withBackgroundColor = (WrappedComponent, bgColor) => {
  return (props) => {
    return (
      <div style={{ backgroundColor: bgColor }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBackgroundColor;
