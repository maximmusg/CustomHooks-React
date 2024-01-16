import React from "react";
// eslint-disable-next-line react/display-name
export const Incrementar = React.memo(({ incrementar }) => {
  console.log("Me estoy redibujando");
  return <button onClick={() => incrementar(10)}>+1</button>;
});
