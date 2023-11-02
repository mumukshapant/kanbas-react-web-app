import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-primary " style={{color:'white', background:'green', marginBottom:'5px'}}>Add Element</button>
      <ul className="list-group" style={{listStyle:'none'}}>
        {array.map((item, index) => (
            
          <li  className="list-group-item d-flex justify-content-between"  style={{ width:'200px', fontWeight:'bold' , fontSize:'150%'}} key={index}>
            {item}
            <button className='btn btn-danger mb-2' style={{alignItems:'end'}} onClick={() => deleteElement(index)}>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;