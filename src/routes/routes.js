import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import UserDetail from 'src/pages/UserDetail.vue'
import UserCreate from 'src/pages/UserCreate.vue'
import Login from 'src/pages/Login.vue'
import UserManage from 'src/pages/UserManage.vue'
import CustomerManage from 'src/pages/CustomerManage.vue'
import PartnerManage from 'src/pages/PartnerManage.vue'
import DemandManage from 'src/pages/DemandManage.vue'
import FeedbackManage from 'src/pages/FeedbackManage.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'profile',
        name: 'Profile',
        component: UserProfile
      },
      {
        path: 'user-manage',
        name: 'User Manage',
        component: UserManage,
      },
      {
        path: 'demand-manage',
        name: 'Demand Manage',
        component: DemandManage
      },
      {
        path: 'customer-manage',
        name: 'Customer Manage',
        component: CustomerManage
      },
      {
        path: 'partner-manage',
        name: 'partner Manage',
        component: PartnerManage
      },
      {
        path: 'feedback-manage',
        name: 'Feedback Manage',
        component: FeedbackManage
      },
      {
        path: 'user-detail',
        name: 'User Detail',
        component: UserDetail,
        props: true
      },
      {
        path: 'user-create',
        name: 'User Create',
        component: UserCreate,
        props: true
      },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
