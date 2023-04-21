import "./App.css";
import AppLayout from "./AppLayout";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  //console.log("currentUser", currentUser);
  const admin = currentUser?.isAdmin;
  //console.log("admin", admin);
  /*  const token = currentUser?.accessToken;
  console.log("token", token); */

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<AppLayout admin={admin} />}>
          <Route
            path='/'
            element={currentUser && admin ? <Home /> : <Navigate to='/login' />}
          />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
