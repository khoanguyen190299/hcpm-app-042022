// async function getDataEmployee() {
//     const employee = await fetch("https://628324fc92a6a5e4621ea622.mockapi.io/employee")
//     const data = await employee.json()
//     return data
// }
//
// async function getDataCustomer() {
//     const customer = await fetch("https://628324fc92a6a5e4621ea622.mockapi.io/ustomer")
//     const data = await customer.json()
//     return data
// }
// export { getDataEmployee, getDataCustomer }
//import axios from "axios";
const axios = require('axios').default;

// axios.get('https://628324fc92a6a5e4621ea622.mockapi.io/employee')
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

async function getDataEmployee() {
    try {
        const data = await axios.get('https://628324fc92a6a5e4621ea622.mockapi.io/employee');
        return data
    } catch (error) {
        console.error(error);
    }
}

async function getDataCustomer() {
    try {
        const data = await axios.get('https://628324fc92a6a5e4621ea622.mockapi.io/ustomer');
        return data
    } catch (error) {
        console.error(error);
    }
}

async function getDataUser() {
    try {
        const data = await axios.get('https://628324fc92a6a5e4621ea622.mockapi.io/acount');
        return data
    } catch (error) {
        console.error(error);
    }
}
export { getDataEmployee, getDataCustomer, getDataUser }