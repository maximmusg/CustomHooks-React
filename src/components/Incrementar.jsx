export const Incrementar = ({ incrementar }) => {
  console.log("Me estoy redibujando");
  return <button onClick={() => incrementar(10)}>+1</button>;
};
