import React, { useEffect } from "react";

const App = () => {
  return (
    <div>
      <ModalComponent />
    </div>
  );
};

const ModalComponent = () => {
  const modalRef = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
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
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div style={{ border: "2px solid red" }} ref={modalRef}>
          <h1>This is a Modal</h1>
          <p>Modal Content</p>
          <button onClick={handleClose}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default App;
