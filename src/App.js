
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import ExploreAllProducts from './pages/ExploreAllProducts/ExploreAllProducts/ExploreAllProducts';
import PurchaseProduct from './pages/ExploreAllProducts/PurchaseProduct/PurchaseProduct';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
       <AuthProvider>
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/exploreProducts">
                  <ExploreAllProducts></ExploreAllProducts>
                </Route>
                <Route path="/purchaseProduct/:id">
                  <PurchaseProduct></PurchaseProduct>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/register">
                  <Register></Register>
                </Route>
                <Route path="*">
                  
                </Route>
              </Switch>
          </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
