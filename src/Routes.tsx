import Layout from 'Layout';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';

import { AboutPage, HomePage } from 'pages';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
