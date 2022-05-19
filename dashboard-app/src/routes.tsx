import { Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/DashboardLayout';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
// import PrivateRoute from './components/common/PrivateRoute';
// import DashboardLayout from './components/DashboardLayout';
// import MainLayout from './components/MainLayout';
// import Account from './pages/Account';
// import CustomerList from './pages/CustomerList';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import NotFound from './pages/NotFound';
// import ProductList from './pages/ProductList';
// import Register from './pages/Register';
// import Settings from './pages/Settings';

const routes = [
  { path: '/login', element: <Login /> },
  {
    path: "/",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      // { path: "tasks", element: <DashboardTasks /> },
    ],
  },
  { path: '*', element: <Navigate to="/404" /> }
];

export default routes;
