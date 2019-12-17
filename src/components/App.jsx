import React from "react";
import FormUnregistered, {FormRegistered} from "./Form";


var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <FormRegistered /> : <FormUnregistered />}
    </div>
  );
}

export default App;
