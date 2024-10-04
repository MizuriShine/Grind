import '../../components/App/App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../../routes';
import { PrimeReactProvider } from 'primereact/api';
import ProtectedRoute from '../../components/ProtectedRoute';

function App() {
  const getRoutes = () =>
    routes.map((route: any) => {
      if (route?.requiresAuth) {
        return <Route path={route?.path} element={<ProtectedRoute>{route?.layout()}</ProtectedRoute>} key={route?.key} />;
      }
      else {
        return <Route path={route?.path} element={route?.layout()} key={route?.key} />;
      }
    });

  return (
    <PrimeReactProvider>
      <div className='app'>
        <Routes>
          {getRoutes()}
          <Route path='*' element={<Navigate to='/home' />} />;
        </Routes>
      </div >
    </PrimeReactProvider>
  );
};

export default App;