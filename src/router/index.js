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


const routes = [
    {
        path: "/hcpm-app-042022/home/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/hcpm-app-042022/",
        name: "Onboarding",
        component: OnBoarding
    },
    {
        path: "/hcpm-app-042022/home/staff",
        name: "Staff",
        component: Staff
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
    {
        path: "/hcpm-app-042022/home/list-staff/",
        name: "ListStaff",
        component: ListStaff,
    },
    {
        path: "/hcpm-app-042022/home/add-staff/",
        name: "AddStaff",
        component: AddStaff,
    },
    {
        path: "/hcpm-app-042022/home/customer/",
        name: "Customer",
        component: Customer,
    },
    {
        path: "/hcpm-app-042022/home/add-customer/",
        name: "AddCustomer",
        component: AddCustomer,
    },
    {
        path: "/hcpm-app-042022/home/list-customer/",
        name: "ListCustomer",
        component: ListCustomer,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;