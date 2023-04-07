import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Services from "./components/Services";
import NoMatch from "./components/pages/404";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App



