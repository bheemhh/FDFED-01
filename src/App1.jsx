import { useState, createContext, useContext } from "react";

const ThemeContext = createContext("Blue");

function Greeting ({Name,OnCount})
{
  const a='Joy';
  const number=245;
  return (
    <div>   <h1> Hello {Name} </h1>
   <button onClick={() => OnCount(number)}>
      Send {number} to Parent
    </button> 
    </div>

  );
}

function Login1 ()
{
  
const handleSubmit = (e) => {
  e.preventDefault();
  
}


}




function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.username.value);
    console.log(e.target.password.value);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input name="username" />

      <input
        name="password"
        type="password"
      />

      <button type="submit">
        Login
      </button>

    </form>
  );
}


function Profile ({Name,Age,OnCount})
{
  const age=Age;
  const theme=useContext(ThemeContext);
  return (
    
    <div>
      <h1> {Name} : {age} </h1>
       <h1> theme : {theme} </h1>
     <img
      className="avatar"
      src="https://react.dev/images/docs/scientists/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />

<Greeting Name={Name} OnCount={OnCount}/>
    </div>
  );


}


export default function App({Total}) {
  const [Present,setPresent] =useState(0);
     const [totalcount,setCount] = useState(40);
  const [Absent,setAbsent] =useState(totalcount);
   
  const Updatecount = (value) => { setCount(value)}

  function MarkPresent ()
  {
   setPresent(Present+1);
   setAbsent(Absent-1);
  }

  const theme="red";
  return (
    <div>
     <div> <h4> Hello React {totalcount}:::  {Present} and {Absent} </h4>
     <button onClick={MarkPresent}> Click Present</button>
      </div> 
      <ThemeContext.Provider Value={theme} >
     <Profile Name="Joy" Age="23" OnCount={Updatecount} />
    
     
     </ThemeContext.Provider>
   </div>
  );
}
