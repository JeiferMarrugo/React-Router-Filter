import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./Layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <div className="container">
      <NavBar />

      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          <Route element={<NotFound />} path="*"></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
