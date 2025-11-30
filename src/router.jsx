// src/router.jsx
import React from 'react';
import {
  RouterProvider,
  Router,
  Route,
  RootRoute,
  Outlet,
} from '@tanstack/react-router';

// Import your pages
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import PreviewPage from './pages/PreviewPage';
import CompletePage from './pages/CompletePage';

// Root layout component
function RootLayout() {
  // Later you can add a global header / footer here if you want
  return <Outlet />;
}

// 1. Create the root route
const rootRoute = new RootRoute({
  component: RootLayout,
});

// 2. Define child routes

// "/" → Home
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

// "/report" → report camera page
const reportRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/report',
  component: ReportPage,
});

// "/report/preview" → preview + form
const previewRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/report/preview',
  component: PreviewPage,
});

// "/complete" → thank you page
const completeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/complete',
  component: CompletePage,
});

// 3. Combine into a route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  reportRoute,
  previewRoute,
  completeRoute,
]);

// 4. Create the router instance
const router = new Router({ routeTree });

// 5. Export a component that provides the router to React
export function AppRouter() {
  return <RouterProvider router={router} />;
}
