import Inicio from "./paginas/Inicio";
import Sobre from "./paginas/Sobre";
import Projetos from "./paginas/Projetos";
import Contato from "./paginas/Contato";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/", element: <Template/>,
    children:[
      {path: "/", element: <Inicio/>},
      {path: "/sobre", element: <Sobre/>},
      {path: "/projetos", element: <Projetos/>},
      {path: "/contato", element: <Contato/>}
    ]
  }]);
  return (
      <RouterProvider router={router} />
  );
};
export default App;