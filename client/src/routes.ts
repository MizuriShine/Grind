import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./layouts/Home";

export const routesConfig = [
  {
    title: 'Register',
    path: '/register',
    layout: Register,
    requiresAuth: false,
    showSidebar: false
  },
  {
    path: '/login',
    title: 'Login',
    layout: Login,
    requiresAuth: false,
    showSidebar: false
  },
  {
    title: 'Home',
    path: '/',
    layout: Home,
    requiresAuth: true,
    showSidebar: true
  }
];