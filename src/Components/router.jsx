import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ResidencialCasaAlces from "./Residencial/ResidencialCasaAlces";

export const router = createBrowserRouter([
  {path: "/", element: <App />,},
  {path: "Residencialcasaalces", element: <ResidencialCasaAlces />},
]);
