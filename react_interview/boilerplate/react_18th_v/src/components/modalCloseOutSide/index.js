import React, { useState, useEffect, useRef } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function Modal({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // handle clicks outside
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose(); // close when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-center"
      style={{ border: "2px red solid" }}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-xl shadow-xl w-80 relative"
      >
        <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
        <p className="mb-4">Click outside to close me 🚪</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default App;
