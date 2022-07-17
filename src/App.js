import React, { useState } from "react";
import SimpleInput from "./components/SimpleInput";

const App = () => {
  // const [title, setTitle] = useState("");

  // const SubmitHandler = (data) => {
  //   console.log(data);
  //   setTitle(data);
  // };

  return (
    <div className="app">
      <SimpleInput />
    </div>
  );
};

export default App;
