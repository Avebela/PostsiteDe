import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            setName(e.target.value);
          }}
        />
      </div>
    </>
  );
};
