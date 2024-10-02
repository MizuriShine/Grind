import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./pages/Home";

export const routes = [
  {
    title: 'Register',
    path: '/register',
    component: Register,
    requiresAuth: false
  },
  {
    path: '/login',
    title: 'Login',
    component: Login,
    requiresAuth: false
  },
  {
    title: 'Home',
    path: '/',
    component: Home,
    requiresAuth: true
  }
];