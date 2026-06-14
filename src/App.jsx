import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import "./styles/global.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);
  return <AppRoutes />;
}

export default App;
