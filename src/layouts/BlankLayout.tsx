import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

const Layout: React.FC = ({ route }: RouteConfig) => {
  return <>{renderRoutes(route.routes)}</>;
};

export default Layout;
