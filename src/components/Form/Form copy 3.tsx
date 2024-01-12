//import React from "react";
import { useState } from "react";

import NewTodoForm from "../UI/NewTodoForm";

const Form = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Список дел</h1>

      <NewTodoForm
        value={text}
        updateText={setText}
        //  //   handleAction={handleAction}
      />
    </div>
  );
};
export { Form };
