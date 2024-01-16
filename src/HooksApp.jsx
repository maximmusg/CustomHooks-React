import { ContadorComponent } from "./components/ContadorComponent";
import { FormularioComponent } from "./components/FormularioComponent";
import { UsuariosComponent } from "./components/UsuariosComponent";

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <br />
      <hr />
      <br />
      <ContadorComponent></ContadorComponent>
      <br />
      <hr />
      <br />
      <FormularioComponent></FormularioComponent>
      <br />
      <hr />
      <br />
      <UsuariosComponent></UsuariosComponent>
      <br />
      <hr />
      <br />
    </>
  );
};
