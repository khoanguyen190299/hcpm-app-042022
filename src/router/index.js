import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/page/Login";
import SignUp from "@/components/page/SignUp";
import ListStaff from "@/components/page/ListStaff";
import Staff from "@/components/page/Staff";
import AddStaff from "@/components/page/AddStaff";
import Customer from "@/components/page/Customer";
import AddCustomer from "@/components/page/AddCustomer";
import ListCustomer from "@/components/page/ListCustomer";
import OnBoarding from "@/components/page/OnBoarding";
import HomePage from "@/components/page/HomePage";
import SideBar from "@/components/layout/SideBar";

const routes = [
  {
    path: "/hcpm-app-042022/sidebar",
    name: "sidebar",
    component: SideBar,
    children: [
      {
        path: "/hcpm-app-042022/home/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/hcpm-app-042022/staff",
        name: "Staff",
        component: Staff,
      },
      {
        path: "/hcpm-app-042022/list-staff/",
        name: "ListStaff",
        component: ListStaff,
      },
      {
        path: "/hcpm-app-042022/add-staff/",
        name: "AddStaff",
        component: AddStaff,
      },
      {
        path: "/hcpm-app-042022/customer/",
        name: "Customer",
        component: Customer,
      },
      {
        path: "/hcpm-app-042022/add-customer/",
        name: "AddCustomer",
        component: AddCustomer,
      },
      {
        path: "/hcpm-app-042022/list-customer/",
        name: "ListCustomer",
        component: ListCustomer,
      },
    ],
  },

  {
    path: "/hcpm-app-042022/",
    name: "Onboarding",
    component: OnBoarding,
  },
  {
    path: "/hcpm-app-042022/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/hcpm-app-042022/sign-up",
    name: "Sig-up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
