import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header.jsx'
import ShoppingCartState from './contexts/ShoppingCart/ShoppingCartState.jsx'
import UserState from './contexts/users/UserState.jsx'
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
              <Route path='/home' element={ <Home></Home> }>
              </Route>
              <Route path='/products' element={ <Products></Products> }>
              </Route>
              <Route path='/products/:productId' element={ <Product></Product> }>
              </Route>
              <Route path='/auth/login' element={ <Login></Login> }>
              </Route>
              <Route path='/auth/signup' element={ <SignUp></SignUp> }>
              </Route>

              {/* Rutas privada */ }
              <Route path='/profile' element={ <Profile></Profile> }>
              </Route>
            </Routes>
          </BrowserRouter>
        </ShoppingCartState>
      </UserState>
    </div>
  )
}

export default App
