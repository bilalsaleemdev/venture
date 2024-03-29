// All components mapping with path for internal routes

import React,{ lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Page404, // view rendered
  },
  // {
  //   path: '/leads',
  //   component: Leads,
  // },
  // {
  //   path: '/settings-team',
  //   component: Leads,
  // },
  // {
  //   path: '/calendar',
  //   component: Leads,
  // },
  // {
  //   path: '/transactions',
  //   component: Leads,
  // },
  // {
  //   path: '/settings-profile',
  //   component: Leads,
  // },
  // {
  //   path: '/settings-billing',
  //   component: Leads,
  // },
  // {
  //   path: '/getting-started',
  //   component: Leads,
  // },
  // {
  //   path: '/features',
  //   component: Leads,
  // },
  // {
  //   path: '/components',
  //   component: Leads,
  // },
  // {
  //   path: '/integration',
  //   component: Leads,
  // },
  // {
  //   path: '/charts',
  //   component: Leads,
  // },
  // {
  //   path: '/404',
  //   component: Page404,
  // },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
]

export default routes
