import Vue from 'vue'
import Router from 'vue-router'
import Check from "../components/Check";
import CheckInfo from "../components/CheckInfo";
import Index from "../views/Index";
import Ledger from "../views/Ledger";
import Maintenance from "../views/Maintenance";

//监督
import InspectionSupervision from "../views/Supervision/InspectionSupervision";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/inspectionSupervision',
      name: 'InspectionSupervision',
      component: InspectionSupervision
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
