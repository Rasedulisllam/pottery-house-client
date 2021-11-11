
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
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllBlogs from './pages/Home/AllBlogs/AllBlogs'

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
                <Route path="/blogs">
                  <AllBlogs></AllBlogs>
                </Route>
                <Route path="/exploreProducts">
                  <ExploreAllProducts></ExploreAllProducts>
                </Route>
                <PrivateRoute path="/purchaseProduct/:id">
                  <PurchaseProduct></PurchaseProduct>
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
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
