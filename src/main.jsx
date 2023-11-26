import ReactDOM from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./assets/css/main.css";
import { useLayoutEffect } from "react";

import { Navbar, Footer } from "./components/";
import { Home, About, Services, Contact } from "./views/";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="*" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

export default Main;
