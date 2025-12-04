import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState ([]);
  const handleSubmit = () => {
    console.log(name);
    setName(""); //xoá ở ô sau khi nhập xong
  };
  return (
    <div>


      <div style={{ padding: 32 }}>
       
        <input
          value={name}
          placeholder="Nhập tên"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmit} 
           
        >Add</button>

      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>          // in ra list
        ))}
      </ul>
      </div>




    </div>
  );
}
export default App;
