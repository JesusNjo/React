import React from "react";

export const Items = ({id, name, value }) => {
  return (
    <>
      <li>
        {id + ". "} 
        {name}
        {value ? " ✅" : " ❌"}
      </li>
    </>
  );
};
