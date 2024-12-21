import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../vite-projekt/src/components/Home";
import Dashboard from "../../vite-projekt/src/components/Dashbord";
import About from "../../vite-projekt/src/components/About";
import NotFoundPage from "../../vite-projekt/src/components/NotFoundPage";
import Header from "../../vite-projekt/src/pages/Header";
import User from "../../vite-projekt/src/pages/User";
import Admin from "../../vite-projekt/src/pages/Admin";
import Products from "../../vite-projekt/src/pages/Products";
import ProductDetails from "../../vite-projekt/src/pages/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
