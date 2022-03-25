import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import ProductDetail from "./pages/ProductDetails";
import Product from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:key">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
