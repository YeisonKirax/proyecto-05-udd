import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthRoute from './components/AuthRoute/AuthRoute.jsx'
import { Header } from './components/Header/Header.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import PublicRoute from './components/PublicRoute/PublicRoute.jsx'
import ShoppingCartState from './contexts/ShoppingCart/ShoppingCartState.jsx'
import UserState from './contexts/user/UserState.jsx'
import { Login } from './pages/Auth/Login/Login.jsx'
import { SignUp } from './pages/Auth/SignUp/SignUp.jsx'
import { Home } from './pages/Home/Home.jsx'
import Product from './pages/Products/Product/Product.jsx'
import Products from './pages/Products/Products.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
function App() {

  return (
    <div className='App'>
      <UserState>
        <ShoppingCartState>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              {/* Rutas públicas */ }
              <Route path='/' element={ <Home></Home> }>
              </Route>
              <Route path='/home' element={
                <PublicRoute>
                  <Home></Home>
                </PublicRoute>
              }>
              </Route>
              <Route path='/products' element={
                <PublicRoute>
                  <Products></Products>
                </PublicRoute>
              }>
              </Route>
              <Route path='/products/:productId' element={
                <PublicRoute>
                  <Product></Product>
                </PublicRoute>
              }>
              </Route>
              <Route path='/auth/login' element={
                <AuthRoute>
                  <Login></Login>
                </AuthRoute>
              }>
              </Route>
              <Route path='/auth/signup' element={
                <AuthRoute>
                  <SignUp></SignUp>
                </AuthRoute>
              }>
              </Route>

              {/* Rutas privada */ }
              <Route path='/profile' element={
                <PrivateRoute>
                  <Profile></Profile>
                </PrivateRoute>
              }>
              </Route>
            </Routes>
          </BrowserRouter>
        </ShoppingCartState>
      </UserState>
    </div>
  )
}

export default App
