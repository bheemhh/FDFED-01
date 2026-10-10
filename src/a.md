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
    <Profile />
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


      Exercise 1 – Props: Student Profile

Create a React application with a parent component and a child component. Define student details in the parent component and pass them to the child component using props. The child component should display the student’s name, roll number, department, and year. The student details should be changed only in the parent component and the updated information should be reflected in the child component.

Exercise 2 – Callback: Child to Parent Communication

Create a React application with a parent component and a child form component. The child component should contain a text box to enter a student’s name and a Submit button. When the user submits the name, the child component should send the entered value to the parent component using a callback function passed through props. The parent component should then display the received student name.

Exercise 3 – Lift State Up: Shared State

Create a React application with a parent component and two child components: Counter and Display. The parent component should maintain the count as state. The Counter component should provide Increase and Decrease buttons, while the Display component should show the current count. The state should be maintained only in the common parent, and the child components should receive the required data and functions through props.
```python
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function receiveName(studentName) {
    setName(studentName);
  }

  return (
    <div>
      <StudentForm onSubmit={receiveName} />

      <h2>Student Name: {name}</h2>
    </div>
  );
}

import { useState } from "react";

function StudentForm({ onSubmit }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => onSubmit(input)}>
        Submit
      </button>
    </div>
  );
}

<StudentForm onSubmit={receiveName} />
onSubmit(input)


import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <Counter
        onIncrease={increase}
        onDecrease={decrease}
      />

      <Display count={count} />
    </div>
  );
}
function Counter({ onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onIncrease}>
        Increase
      </button>

      <button onClick={onDecrease}>
        Decrease
      </button>
    </div>
  );
}
function Display({ count }) {
  return <h2>Count: {count}</h2>;
}


```


function Parent() {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    setCount(value);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <Child onChange={changeCount} />
    </>
  );
}

function Child({ onChange }) {
  return (
    <button onClick={() => onChange(10)}>
      Set Parent Count to 10
    </button>
  );
}


```
class - Use Context

import { useState } from "react";

function AttendanceSummary({ present, totalStudents }) {
  const absent = totalStudents - present;

  return (
    <div>
      <h2>Present: {present}</h2>
      <h2>Absent: {absent}</h2>
    </div>
  );
}

function PresentButton({ onMarkPresent }) {
  return (
    <button onClick={onMarkPresent}>
      Mark Present
    </button>
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
    <div style={{ padding: "30px" }}>
      <h1>Classroom Attendance</h1>

      <AttendanceSummary
        present={present}
        totalStudents={totalStudents}
      />

      <PresentButton onMarkPresent={markPresent} />
    </div>
  );
}


import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

// 1. Create a Context
const AttendanceContext = createContext(null);

// 2. Child component: reads shared data
function AttendanceSummary() {
  const { className, present, totalStudents } =
    useContext(AttendanceContext);

  const absent = totalStudents - present;

  return (
    <div>
      <h2>Class: {className}</h2>
      <h2>Present: {present}</h2>
      <h2>Absent: {absent}</h2>
    </div>
  );
}

// 3. Child component: reads the shared function
function MarkPresentButton() {
  const { markPresent } = useContext(AttendanceContext);

  return (
    <button onClick={markPresent}>
      Mark Present
    </button>
  );
}

// 4. Parent component: owns the state
export default function App() {
  const className = "FDFED-01";
  const totalStudents = 30;

  const [present, setPresent] = useState(0);

  function markPresent() {
    if (present < totalStudents) {
      setPresent(present + 1);
    }
  }

  // 5. Runs after the screen updates
  useEffect(() => {
    document.title = `Present: ${present}`;
  }, [present]);

  // 6. Data shared with all components inside Provider
  const attendanceData = {
    className,
    totalStudents,
    present,
    markPresent
  };

  return (
    <AttendanceContext.Provider value={attendanceData}>
      <div style={{ padding: "30px" }}>
        <h1>Attendance Context API Demo</h1>

        <AttendanceSummary />

        <MarkPresentButton />
      </div>
    </AttendanceContext.Provider>
  );
}