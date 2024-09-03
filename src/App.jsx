import React, { useState, useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLeyout from './layout/MainLeyout';
import Desktob from './pages/Desktob';
import Movies from './pages/Movies';
import Serial from './pages/Serial';
import Bookmerk from './pages/Bookmarked';
import ProtectRouter from './components/ProtectRouter';
import Login from './login/Login';
import Sigin from './login/Sigin';
import { auth } from './firebase/Fire';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRouter user={user}>
          <MainLeyout />
        </ProtectRouter>
      ),
      children: [
        {
          path: "/",
          element: <Desktob />,
        },
        {
          path: "/1",
          element: <Movies />,
        },
        {
          path: "/2",
          element: <Bookmerk />,
        },
        {
          path: "/3",
          element: <Serial />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/sigin",
      element: user ? <Navigate to="/" /> : <Sigin />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
