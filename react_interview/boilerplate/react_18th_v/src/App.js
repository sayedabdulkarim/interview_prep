import React, { useEffect } from "react";

const App = () => {
  return (
    <div>
      <h1>Parent</h1>
      <Modal />
    </div>
  );
};

const Modal = () => {
  const modalRef = React.useRef(null);
  const [isShow, setIsShow] = React.useState(false);

  const handleClose = () => {
    setIsShow(false);
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
      <h1>Modal</h1>
      <button onClick={() => setIsShow(true)}>Open Modal</button>

      {isShow && (
        <div style={{ border: "1px solid red" }} ref={modalRef}>
          {<p>This is modal content</p>}
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
