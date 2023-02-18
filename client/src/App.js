import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/auth/Username';
import Password from './components/auth/Password';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';
import Recovery from './components/auth/Recovery';
import Reset from './components/auth/Reset';
import PageNotFound from './components/PageNotFound';
import Login from './components/auth/login';
import Contact from './components/contact/contact';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Login></Login>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '/contact',
        element : <Contact></Contact>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },

])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}