import React from "react";
import SimpleInput from "./components/SimpleInput";
import BasicForm from "./components/BasicForm";

const App = () => {
  // const [title, setTitle] = useState("");

  // const SubmitHandler = (data) => {
  //   console.log(data);
  //   setTitle(data);
  // };

  return (
    <div className="app">
      <BasicForm />
      {/* <SimpleInput /> */}
    </div>
  );
};

export default App;
