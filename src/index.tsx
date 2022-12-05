import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Work from './pages/Work/Work';
import Sport from './pages/Sport/Sport';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "work",
    element: <Work />
  },
  {
    path: "sport",
    element: <Sport />
  }

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


