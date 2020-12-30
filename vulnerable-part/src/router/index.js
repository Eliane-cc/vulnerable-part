import Vue from 'vue'
import Router from 'vue-router'
import Check from "../components/Check";
import CheckInfo from "../components/CheckInfo";
import Index from "../views/Index";
import Ledger from "../views/Ledger";
import Maintenance from "../views/Maintenance";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ledger',
      name: 'Ledger',
      component: Ledger
    },
    {
      path: '/maintenance',
      name: 'Maintenance',
      component: Maintenance
    },
    {
      path: '/check',
      name: 'Check',
      component: Check
    },
    {
      path: '/checkInfo',
      name: 'CheckInfo',
      component: CheckInfo
    }
  ]
})
