import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
 
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>

      <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          /> */}
        </Route>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App



