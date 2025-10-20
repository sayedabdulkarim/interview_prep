import React, { useEffect } from "react";

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ModalComponent />
    </div>
  );
};

const ModalComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef();

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
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
          <h1>Modal title</h1>
          <p>This is modal content</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
