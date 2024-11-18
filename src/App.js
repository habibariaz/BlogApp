import { Routes, Route, HashRouter, BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

import DataProvider from './Context/DataProvider';

//Components
import SignUp from './Components/SignUp';
import CreatePost from './Components/Create/CreatePost';
import DetailView from './Components/Details/DetailView';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Update from './Components/Create/Update';



const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ?
    <>
      <Outlet />
    </>
    : <Navigate replace to='/' />
}

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <>
      <DataProvider>
        <HashRouter >
          <Routes>
            <Route path='/' element={<SignUp isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/Home' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/Home' element={<Home />} />
            </Route>

            <Route path='/Create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/Create' element={<CreatePost />} />
            </Route>

            <Route path='/Details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/Details/:id' element={<DetailView />} />
            </Route>

            <Route path='/Update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/Update/:id' element={<Update />} />
            </Route>

            <Route path='/Contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/Contact' element={<Contact />} />
            </Route>

            <Route path='/About' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/About' element={<About />} />
            </Route>

          </Routes>
        </HashRouter>
      </DataProvider >
    </>
  );
}

export default App;
