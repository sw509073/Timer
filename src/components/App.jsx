import React,{useState} from "react";

var t = new Date().toLocaleTimeString()


function App() {
  setInterval(timer,1000);
  const [time,update] = useState(t);

  function timer(){
    update(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timer}>Get Time</button>
    </div>
  );
}

export default App;
