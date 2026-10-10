import { useState,useEffect } from "react";

function App() {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    localStorage.setItem("name", name);
  },[name]);

  
  
  return (
    <form>
      <input name="username" value={name} onChange={(e) => setName(e.target.value)} />
      <input name="Password" value={pass} onChange={(e) => setPass(e.target.value)} />

      <button type="submit">
        Submit
      </button>
    </form>
  );



  
  }

export default App;