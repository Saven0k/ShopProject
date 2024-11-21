import Cart from "./pages/Cart";
import CatalogPage from "./pages/CatalogPage";
import IndexPage from "./pages/IndexPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<IndexPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
