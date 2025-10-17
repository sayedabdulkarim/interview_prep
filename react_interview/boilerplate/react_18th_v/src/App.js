import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ModalComponent />
    </div>
  );
};

const ModalComponent = () => {
  const modalRef = useRef();
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && modalRef.current.contains(e.target) === false) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setIsShow(true)}>Show Modal</button>
      {isShow && (
        <div ref={modalRef} style={{ border: "2px solid red" }}>
          <h1>Modal Component</h1>
          <p>This is modal content</p>
          <button onClick={handleClose}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default App;
