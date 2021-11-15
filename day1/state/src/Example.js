import { useState } from "react";

const Example = (obj) => {
  const [light, setLight] = useState(false);  

  return (
    <>
      <h2>{ light ? "Light ON" : "Lights OFF"}</h2>
      <button onClick={() => setLight(!light)}>Toggle</button>
    </>
  )
}

export default Example