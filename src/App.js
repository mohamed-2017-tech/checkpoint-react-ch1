
import { Routes ,Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Login from "./Login";
import Product from "./Product";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
function App() {
  
  return (
    <div>
<Header/>
 <Routes>
        
         <Route index  element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/home" element={<Home />} />
         <Route path="/category/:name" element={<Category />} />
         
         <Route path="/products" element={<PrivateRoute isAuth={false}>
          <Product/>
          </PrivateRoute>} />
       
</Routes>
    </div>
  );
}

export default App;



