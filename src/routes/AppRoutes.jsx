import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Programs = lazy(() => import("../pages/Programs"));
const Activities = lazy(() => import("../pages/Activities"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Stories = lazy(() => import("../pages/Stories"));
const Volunteer = lazy(() => import("../pages/Volunteer"));
const Donate = lazy(() => import("../pages/Donate"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));

function Loader() {
  return (
    <div style={{
      minHeight: "60vh", display: "grid", placeItems: "center",
      color: "var(--amu-saffron)", fontSize: 14, letterSpacing: ".2em", textTransform: "uppercase",
    }}>Loading…</div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
