import React, { useEffect, useState } from "react";
import "./Toast.css";
const Toast = () => {
  const [toastList, setToastList] = useState([]);

  const handleToast = (type) => {
    let obj = null;

    if (type === "success") {
      obj = {
        id: Math.random(),
        color: "green",
        type,
      };
    } else if (type === "danger") {
      obj = {
        id: Math.random(),
        color: "red",
        type,
      };
    } else if (type === "warning") {
      obj = {
        id: Math.random(),
        color: "orange",
        type,
      };
    } else obj = null;

    setToastList((prev) => [...prev, obj]);
  };

  const deleteToast = (id) => {
    const filteredToast = toastList.filter((i) => i.id !== id);
    setToastList(filteredToast);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList?.length) {
        const filteredToast = toastList.filter(
          (i) => i.id !== toastList[0]?.id
        );
        setToastList(filteredToast);
      }
    }, 3000);
    console.log("Calleedddd");
    return () => clearInterval(interval);
  });

  return (
    <div>
      <button onClick={() => handleToast("success")}>Success</button>
      <button onClick={() => handleToast("danger")}>Danger</button>
      <button onClick={() => handleToast("warning")}>Warning</button>

      {/* {JSON.stringify(toastList, null, 4)} */}

      <ul className="toast__container">
        {toastList &&
          toastList?.map((item) => {
            const { id, color, type } = item;
            return (
              <li
                key={id}
                style={{ backgroundColor: color }}
                className="toast__item"
              >
                {type.toUpperCase()}
                <button onClick={() => deleteToast(id)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Toast;
