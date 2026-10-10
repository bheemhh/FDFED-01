1. *Basics*



```JSX
export default function App() {
  let present = 0;

  function markPresent() {
    present = present + 1;
    console.log(present);
  }

  return (
    <div>
      <h1>Present: {present}</h1>
      <button onClick={markPresent}>Mark Present</button>
    </div>
  );
}
```

This is the minimal way to pass a static string and a dynamic number down to a child component.
```
// Parent Component
export default function App() {
  return (
    <div>
      {/* 1. Passing basic data down */}
      <WelcomeCard name="Sarah" score={98} />
    </div>
  );
}

// Child Component
function WelcomeCard({ name, score }) {
  return (
    <div className="card">
      <h1>Welcome back, {name}!</h1>
      <p>Your current score is: {score}</p>
    </div>
  );
}

```
import { useState } from 'react';

// Parent Component
export default function TeamManager() {
  const [members, setMembers] = useState([
    { id: 1, name: "Alex", role: "Developer" },
    { id: 2, name: "Blake", role: "Designer" }
  ]);

  // Function to be triggered by the child
  const removeMember = (id) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <div className="list-container">
      <h2>Team Members ({members.length})</h2>
      {members.map(person => (
        <MemberRow 
          key={person.id} 
          user={person} 
          onDelete={removeMember} // Passing function as a prop
        />
      ))}
    </div>
  );
}

// Child Component
function MemberRow({ user, onDelete }) {
  return (
    <div className="row">
      <span>{user.name} - {user.role}</span>
      {/* Trigger parent function on click */}
      <button onClick={() => onDelete(user.id)}>Remove</button>
    </div>
  );
}
````



```
When students click the button, the Console may show 1, 2, 3—but the screen still shows 0.
JavaScript variable changed
but React was not told to update the screen

```

function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name="Alice" age={25} />
      <UserCard name="Bob" age={30} />
    </div>
  );
}


function Button({ label, handleClick }) {
  return <button onClick={handleClick}>{label}</button>;
}

function App() {
  const sayHello = () => alert("Hello!");
  const sayBye = () => alert("Goodbye!");

  return (
    <div>
      <Button label="Greet" handleClick={sayHello} />
      <Button label="Farewell" handleClick={sayBye} />
    </div>
  );
}
```

2.Create a React application with a reusable StudentCard component that displays a student's name, roll number, and department. Use the component to display details of three different students by passing the information through props.

Also create a reusable Button component that receives a button label and click handler as props. Create three buttons that perform three different actions when clicked.

Objective: Demonstrate component reuse, props, and passing functions as props.
```python
import { useState } from "react";

export default function App() {
  const [present, setPresent] = useState(0);

  function markPresent() {
    setPresent(present + 1);
  }

  return (
    <div>
      <h1>Present: {present}</h1>
      <button onClick={markPresent}>Mark Present</button>
    </div>
  );
}
```


“State is data that React remembers. When state changes, React updates the screen.”

```



`import { useState } from "react";

export default function App() {
  const totalStudents = 30;

  const [present, setPresent] = useState(0);

  const absent = totalStudents - present;

  function markPresent() {
    if (present < totalStudents) {
      setPresent(present + 1);
    }
  }

  function removePresent() {
    if (present > 0) {
      setPresent(present - 1);
    }
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Classroom Attendance Tracker</h1>

      <h2>Present: {present}</h2>
      <h2>Absent: {absent}</h2>

      <p>
        {present === totalStudents
          ? "All students are marked present!"
          : "Mark the next student present."}
      </p>

      <button onClick={markPresent}>
        Mark Present
      </button>

      <button onClick={removePresent} style={{ marginLeft: "10px" }}>
        Remove Present
      </button>

      <button onClick={() => setPresent(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}
`



```

```import { useState } from "react";

function AttendanceSummary({ present, totalStudents }) {
  const absent = totalStudents - present;

  return (
    <div>
      <h2>Present: {present}</h2>
      <h2>Absent: {absent}</h2>
    </div>
  );
}

export default function App() {
  const totalStudents = 30;
  const [present, setPresent] = useState(0);

  function markPresent() {
    if (present < totalStudents) {
      setPresent(present + 1);
    }
  }

  return (
    <div>
      <h1>Classroom Attendance</h1>

      <AttendanceSummary
        present={present}
        totalStudents={totalStudents}
      />

      <button onClick={markPresent}>
        Mark Present
      </button>
    </div>
  );
}

```



async and wait fetch
`

      const [message, setMessage] = useState("Choose a demo");

      function getStudentWithCallback(callback) {
        setTimeout(() => {
          callback("Rahul");
        }, 2000);
      }

      function callbackDemo() {
        setMessage("Loading using callback...");

        getStudentWithCallback((name) => {
          setMessage("Callback result: " + name);
        });
      }

      function getStudentWithPromise() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Rahul");
          }, 2000);
        });
      }

      function promiseDemo() {
        setMessage("Loading using Promise...");

        getStudentWithPromise().then((name) => {
          setMessage("Promise result: " + name);
        });
      }

      async function asyncAwaitDemo() {
        setMessage("Loading using async/await...");

        const name = await getStudentWithPromise();

        setMessage("Async/Await result: " + name);
      }

      return (
        <div style={{ padding: "30px", fontFamily: "Arial" }}>
          <h1>React Async JavaScript</h1>

          <p style={{ fontSize: "20px" }}>{message}</p>

          <button onClick={callbackDemo}>1. Callback</button>

          <button onClick={promiseDemo} style={{ marginLeft: "10px" }}>
            2. Promise
          </button>

          <button onClick={asyncAwaitDemo} style={{ marginLeft: "10px" }}>
            3. Async / Await
          </button>
        </div>
      );
      `