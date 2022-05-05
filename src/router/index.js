import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/page/Login";
import SignUp from "@/components/page/SignUp";
import ListStaff from "@/components/page/ListStaff";
import Staff from "@/components/page/Staff";
import AddStaff from "@/components/page/AddStaff";
import Customer from "@/components/page/Customer";
import AddCustomer from "@/components/page/AddCustomer";
import ListCustomer from "@/components/page/ListCustomer";
import EditCustomer from "@/components/page/EditCustomer";
import EditStaff from "@/components/page/EditStaff";
import OnBoarding from "@/components/page/OnBoarding";


const routes = [
    {
        path: "/",
        name: "Onboarding",
        component: OnBoarding
    },
    {
        path: "/home/staff",
        name: "Staff",
        component: Staff
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/sign-up",
        name: "Sig-up",
        component: SignUp,
    },
    {
        path: "/home/list-staff/",
        name: "ListStaff",
        component: ListStaff,
    },
    {
        path: "/home/add-staff/",
        name: "AddStaff",
        component: AddStaff,
    },
    {
        path: "/home/list-staff/edit-staff/",
        name: "EditStaff",
        component: EditStaff,
    },
    {
        path: "/home/customer/",
        name: "Customer",
        component: Customer,
    },
    {
        path: "/home/add-customer/",
        name: "AddCustomer",
        component: AddCustomer,
    },
    {
        path: "/home/list-customer/",
        name: "ListCustomer",
        component: ListCustomer,
    },
    {
        path: "/home/edit-customer/",
        name: "AEditCustomer",
        component: EditCustomer,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;