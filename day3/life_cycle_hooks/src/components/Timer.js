import { useEffect, useState } from 'react';

function Timer() {
  // variables
  const [counter, setCounter] = useState(0);

  
  useEffect(() => {
    console.log("RUNNING IN THE BEGGINING")
  }, [])

  // useEffect hook
  useEffect(() => {
    // logic
    console.log("RUNNING EVERY UPDATE")
    const myInterval = setInterval(() => {
      setCounter(counter+1);
    }, 1000);
    // cleanup function
    return () => {
      console.log("Destroying previous State")
      clearInterval(myInterval);
    }
    // dependecy array
  }, [counter]);
  

  // html-esque -> jsx
  return (
    <div>
      <h2>Timer</h2>
      <h4>{counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default Timer;
