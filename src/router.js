import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {

      path: '/dashboard',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'لوحة التحكم',
          path: '/Dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Employees',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/employees/Employee'),
        },
        {
          name: 'إضافة ملخص (APT)',
          path: 'pages/APT/AptAddAbstract',
          component: () => import('@/views/dashboard/pages/APT/AptAddAbstract'),
        },
        {
          name: 'إضافة ملخص (APT)',
          path: 'pages/APT/DisplayAPT',
          component: () => import('@/views/dashboard/pages/APT/DisplayAPT'),
        },
        {
          name: 'بحث عن (APT)',
          path: 'pages/APT/SearchAPT',
          component: () => import('@/views/dashboard/pages/APT/SearchAPT'),
        },
        {
          name: 'ادارة الحوادث',
          path: 'pages/Incidents/AddNewIncident',
          component: () => import('@/views/dashboard/pages/Incidents/AddNewIncident'),
        },
        {
          name: 'نظام التعرفة ',
          path: 'pages/RequsetId/viewMain',
          component: () => import('@/views/dashboard/pages/RequsetId/viewMain'),
        },
        {
          name: 'المعبيلة',
          path: 'pages/RequsetId/RequestId',
          component: () => import('@/views/dashboard/pages/RequsetId/RequestId'),
        },
        {
          name: 'soc',
          path: 'pages/RequsetId/Soc',
          component: () => import('@/views/dashboard/pages/RequsetId/Soc'),
        },
        {
          name: 'عرض التعرفة',
          path: 'pages/RequsetId/DisplayId',
          component: () => import('@/views/dashboard/pages/RequsetId/DisplayId'),
        },
        {
          name: 'اخطارات',
          path: 'pages/RequsetId/Notification',
          component: () => import('@/views/dashboard/pages/RequsetId/Notification'),
        },
        {
          name: ' سجل الحادثة ',
          path: 'pages/Incidents/ViewIncidentComments',
          component: () => import('@/views/dashboard/pages/Incidents/ViewIncidentComments'),
        },
        {
          name: ' ملخص الحوادث',
          path: 'pages/Incidents/DisplayIncidents',
          component: () => import('@/views/dashboard/pages/Incidents/DisplayIncidents'),
        },
        {
          name: ' ملخص ',
          path: 'pages/Incidents/incedentDetails',
          component: () => import('@/views/dashboard/pages/Incidents/incedentDetails'),
        },

        {
          name: 'attachment',
          path: 'pages/attachment',
          component: () => import('@/views/dashboard/pages/attachment'),
        },

        {
          name: 'عرض (APT)',
          path: 'pages/APT/AddApt',
          component: () => import('@/views/dashboard/pages/APT/AddApt'),
        },
        {
          name: 'تفاصيل المهام',
          path: 'pages/tasks/EmployeeTask',
          component: () => import('@/views/dashboard/pages/tasks/manageTasks/EmployeeTask'),
        },

        {
          name: 'مهام الموظفين',
          path: 'pages/NewTasks/DisplayTasks',
          component: () => import('@/views/dashboard/pages/NewTasks/DisplayTasks'),
        },
        {
          name: 'إنشاء مهمة جديدة',
          path: 'pages/NewTasks/CreateTask',
          component: () => import('@/views/dashboard/pages/NewTasks/CreateTask'),
        },
        {
          name: 'مجموعات المطورين',
          path: 'pages/APT',
          component: () => import('@/views/dashboard/pages/APT/AptDisplay'),
        },
        {
          name: 'البصمة',
          path: 'pages/APT/ThreatSignature',
          component: () => import('@/views/dashboard/pages/APT/ThreatSignature'),
        },
        {
          name: 'البصمة',
          path: 'pages/APT/MainAPT',
          component: () => import('@/views/dashboard/pages/APT/MainAPT'),
        },
        {
          name: 'Departments',
          path: 'pages/department',
          component: () => import('@/views/dashboard/pages/APT/Departments'),
        },
        {
          name: 'المؤسسات',
          path: 'pages/Orgs_Sectors/Org_Sec_management',
          component: () => import('@/views/dashboard/pages/Orgs_Sectors/ManageSectors'),
        },
        {
          name: 'المهام',
          path: 'pages/tasks/manageTasks/Tasks',
          component: () => import('@/views/dashboard/pages/tasks/manageTasks/Tasks'),
        },

        {
          name: 'المهام',
          path: 'pages/tasks/manageTasks/AddTaskDialog',
          component: () => import('@/views/dashboard/pages/tasks/manageTasks/AddTaskDialog'),
        },
        {
          name: 'تفاصيل المهام',
          path: 'pages/tasks/manageTasks/TaskDetails',
          component: () => import('@/views/dashboard/pages/tasks/manageTasks/TaskDetails'),
        },
        {
          name: 'الحالة',
          path: 'pages/Status/Index_1',
          component: () => import('@/views/dashboard/pages/Status/ManageType'),
        },
        {
          name: 'الأقسام',
          path: 'pages/EmpDepartment/Index_2',
          component: () => import('@/views/dashboard/pages/EmpDepartment/ManageDep'),
        },

        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/pages/tasks/tasksStatus/StatusList'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Main'),
    },
  ],
})
