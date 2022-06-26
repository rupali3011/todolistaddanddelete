import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [add, setadd] = useState([]);
  function Deleteitem(ind) {
    const updateitem = add.filter((name, index) => {
      return index !== ind;
    });
    setadd(updateitem);
  }
  return (
    <div className="App">
      <input
        type="text"
        onChange={function (e) {
          setName(e.target.value);
        }}
        value={name}
      />
      <button
        onClick={function () {
          setadd([...add, name]);
          setName("");
        }}
      >
        add
      </button>
      <div>
        <h3>student list</h3>
        {add.map((name, ind) => {
          return (
            <ul>
              <li onClick={() => Deleteitem(ind)}>{name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
