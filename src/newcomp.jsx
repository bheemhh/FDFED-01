import { useState } from "react";

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


function Profile ({Name,Age,OnCount})
{
  const age=Age;
  
  
  return (
    
    <div>
      <h1> {Name} : {age} </h1>
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

  
  return (
    <div>
     <div> <h4> Hello React {totalcount}:::  {Present} and {Absent} </h4>
     <button onClick={MarkPresent}> Click Present</button>
      </div> 
     <Profile Name="Joy" Age="23" OnCount={Updatecount} />
     <Profile Name="BoB" Age="34" />
      <Profile Name="Alice" Age="34" />
      <Profile Name="Alice1"/>
     
     
   </div>
  );
}
