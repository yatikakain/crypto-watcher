import { RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./routes";
import { Providers } from "./components";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;

