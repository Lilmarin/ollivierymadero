import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // eslint-disable-next-line
import { NavProvider } from "./NavContext";
import ScrollToTop from "./ScrollToTop";
import Home from "./Components/Home";
import ResidencialCasaAlces from "./Components/Residencial/ResidencialCasaAlces";
import ResidencialCasaCampestre from "./Components/Residencial/ResidencialCasaCampestre";
import ResidencialCasaCumbres from "./Components/Residencial/ResidencialCasaCumbres";
import ResidencialCasaFayad from "./Components/Residencial/ResidencialCasaFayad";
import ResidencialCasaConejos from "./Components/Residencial/ResidencialCasaConejos";
import ResidencialCasaCollier from "./Components/Residencial/ResidencialCasaCollier";
import ResidencialCasaHalcones from "./Components/Residencial/ResidencialCasaHalcones";
import ResidencialCasaLondres from "./Components/Residencial/ResidencialCasaLondres";
import ComercialSalondeEventos from "./Components/Comercial/ComercialSalondeEventos";
import ComercialPlazalasTrojes from "./Components/Comercial/ComercialPlazalasTrojes";
import ComercialPlazaPaseoIndependencia from "./Components/Comercial/ComercialPlazaPaseoIndependencia";
import ComercialMahaRomana from "./Components/Comercial/ComercialMahaRomana";
import ViviendaLaGrand from "./Components/Vivienda/ViviendaLaGrand";
import ViviendaSantolivoParras from "./Components/Vivienda/ViviendaSantolivoParras";
import ViviendaTulum from "./Components/Vivienda/ViviendaTulum";
import ViviendaFraccionamientoColinadeSantiago from "./Components/Vivienda/ViviendaFraccionamientoColinadeSantiago";
import UsosMixtosOficinasSaltillo from "./Components/UsosMixtos/UsosMixtosOficinasSaltillo";
import UsosMixtosCentrodeNegocios from "./Components/UsosMixtos/UsosMixtosCentrodeNegocios";
import UsosMixtosClinica from "./Components/UsosMixtos/UsosMixtosClinica";
import UsosMixtosCorporativo from "./Components/UsosMixtos/UsosMixtosCorporativo";
import UsosMixtosNotaria from "./Components/UsosMixtos/UsosMixtosNotaria";
import UsosMixtosOficinaPaseoMillex from "./Components/UsosMixtos/UsosMixtosOficinaPaseoMillex";
import UsosMixtosBodegasZonaIndustrial from "./Components/UsosMixtos/UsosMixtosBodegasZonaIndustrial";
import UsosMixtosPlazaAlameda from "./Components/UsosMixtos/UsosMixtosPlazaAlameda";

function App() {
  const rutas = [
    { url: "/", elemento: <Home />, exact: true },
    { url: "ResidencialCasaCampestre", elemento: <ResidencialCasaCampestre /> },
    { url: "ResidencialCasaAlces", elemento: <ResidencialCasaAlces /> },
    { url: "ResidencialCasaCumbres", elemento: <ResidencialCasaCumbres /> },
    { url: "ResidencialCasalariojasaltillo", elemento: <ResidencialCasaFayad /> },
    { url: "ResidencialCasaConejos", elemento: <ResidencialCasaConejos /> },
    { url: "ResidencialCasaCollier", elemento: <ResidencialCasaCollier /> },
    { url: "ResidencialCasaHalcones", elemento: <ResidencialCasaHalcones /> },
    { url: "ResidencialCasaLondres", elemento: <ResidencialCasaLondres /> },
    { url: "ComercialSalondeEventos", elemento: <ComercialSalondeEventos /> },
    { url: "ComercialPlazalasTrojes", elemento: <ComercialPlazalasTrojes /> },
    {
      url: "ComercialPlazaPaseoIndependencia",
      elemento: <ComercialPlazaPaseoIndependencia />,
    },
    { url: "ComercialMahaRomana", elemento: <ComercialMahaRomana /> },
    { url: "ViviendaLaGrand", elemento: <ViviendaLaGrand /> },
    { url: "ViviendaSantolivoParras", elemento: <ViviendaSantolivoParras /> },
    { url: "ViviendaTulum", elemento: <ViviendaTulum /> },
    {
      url: "ViviendaFraccionamientoColinadeSantiago",
      elemento: <ViviendaFraccionamientoColinadeSantiago />,
    },
    {
      url: "UsosMixtosBodegasZonaIndustrial",
      elemento: <UsosMixtosBodegasZonaIndustrial />,
    },
    {
      url: "UsosMixtosCentrodeNegocios",
      elemento: <UsosMixtosCentrodeNegocios />,
    },
    {
      url: "UsosMixtosClinica",
      elemento: <UsosMixtosClinica />,
    },
    {
      url: "UsosMixtosCorporativo",
      elemento: <UsosMixtosCorporativo />,
    },
    {
      url: "UsosMixtosNotaria",
      elemento: <UsosMixtosNotaria />,
    },
    {
      url: "UsosMixtosOficinaPaseoMillex",
      elemento: <UsosMixtosOficinaPaseoMillex />,
    },
    {
      url: "UsosMixtosOficinasSaltillo",
      elemento: <UsosMixtosOficinasSaltillo />,
    },
    {
      url: "UsosMixtosPlazaAlameda",
      elemento: <UsosMixtosPlazaAlameda />,
    },
  ];
  return (
    <Router>
      <ScrollToTop />
      <NavProvider>
        <div className="App">
          <Routes>
            {rutas.map((route, index) => (
              <Route
                key={index}
                path={route.url}
                element={route.elemento}
                exact={route.exact}
              />
            ))}
          </Routes>
        </div>
      </NavProvider>
    </Router>
  );
}

export default App;
