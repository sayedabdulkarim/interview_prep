import React, { useState } from "react";

// The HOC function
const withHover = (WrappedComponent) => {
  return (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Pass `isHovered` state and original `props` down to the wrapped component */}
        <WrappedComponent isHovered={isHovered} {...props} />
      </div>
    );
  };
};

export default withHover;
