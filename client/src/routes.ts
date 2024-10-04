import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./layouts/Home";

export const routes = [
  {
    title: 'Register',
    key: 'register',
    path: '/register',
    layout: Register,
    requiresAuth: false,
    showSidebar: false
  },
  {
    title: 'Login',
    path: '/login',
    key: 'login',
    layout: Login,
    requiresAuth: false,
    showSidebar: false
  },
  {
    title: 'Home',
    key: 'home',
    path: '/home',
    layout: Home,
    requiresAuth: true,
    showSidebar: true
  }
];