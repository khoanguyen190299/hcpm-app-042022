<template>
  <div class="d-flex content h-100">
    <div class="d-flex">
      <input class="icon-show" type="checkbox" id="show" checked>
      <div class="sidebar fs-14">
        <div class="logo-sidebar" @click="openHomePage">
          <img class="w-100" src="../../assets/images/logo.png" alt>
        </div>
        <div class="d-flex list-staff">
          <a class="list-staff-title flex-grow-1" href="#" @click="openStaff">
            <div class="d-flex align-items-center">
              <div class="icon-user">
                <img class="w-100" src="../../assets/images/icons/user.png">
              </div>
              <p class="mb-0 ms-2">Nhân viên</p>
            </div>
          </a>
          <label class="icon" @click="showStaffOption">
            <i class="fal fa-angle-right"></i>
          </label>
        </div>

        <div class="staff-detail" v-if="isStaffOption">
          <a class="staff-item" href="#" @click="openListStaff">Danh sách nhân viên</a>
          <a class="staff-item" href="#" @click="openAddStaff">Thêm nhân viên</a>
        </div>

        <div class="d-flex list-staff">
          <a class="list-staff-title flex-grow-1" href="#" @click="openCustomer">
            <div class="d-flex align-items-center">
              <div class="icon-user">
                <img class="w-100" src="../../assets/images/icons/user.png">
              </div>
              <p class="mb-0 ms-2 abc">Khách hàng</p>
            </div>
          </a>
          <label class="icon" @click="showCustomerOption">
            <i class="fal fa-angle-right"></i>
          </label>
        </div>
        <div class="custumer-detail" v-if="isCustomerOption">
          <a class="custumer-item" href="#" @click="openListCustomer">Danh sách khách hàng</a>
          <a class="custumer-item" href="#" @click="openAddCustomer">Thêm khách hàng</a>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="heading d-flex justify-content-between align-items-center">
        <label class="btn-toogle" for="show">
          <img class="w-100" src="../../assets/images/icons/menu.png">
        </label>
        <div class="">
          <label class="avatar me-3" @click="showOptionUser">
            <img class="w-100" src="../../assets/images/img-user.png">
          </label>
          <ul class="option p-0 bg-white mt-1 fs-12" v-if="isShowOptionUser">
            <li> <i class="fal fa-user-circle"></i> Thông tin</li>
            <li @click="signOut"> <i class="fal fa-sign-out-alt"></i> Đăng xuất</li>
          </ul>
        </div>
      </div>
      <router-view />
      <div class="d-flex justify-content-between license fs-12 text-secondary">
        <p class="mb-0"><a class="text-decoration-none" href="https://bootstrap-vue.org/"> Bootstrap-vue </a> 2020 creativeLabs.</p>
        <p class="mb-0">
          Powered by
          <a class="text-decoration-none" href="https://getbootstrap.com/" target="_blank">
            Bootstrap
          </a>
          &
          <a class="text-decoration-none" href="https://vuejs.org/" target="_blank">
            VueJS
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SideBar",
  data() {
    return {
      isShowOptionUser: Boolean,
      isStaffOption: Boolean,
      isCustomerOption: Boolean,
    }
  },
  created() {
    this.isStaffOption = false
    this.isShowOptionUser = false
    this.isCustomerOption = false
  },
  methods: {
    showStaffOption() {
      this.isStaffOption = !this.isStaffOption
    },
    showCustomerOption() {
      this.isCustomerOption = !this.isCustomerOption
    },
    showOptionUser() {
      this.isShowOptionUser = !this.isShowOptionUser
    },
    signOut() {
      router.push('/hcpm-app-042022/login/')
      this.showOptionUser = false
    },
    openHomePage() {
      router.push('/hcpm-app-042022/home/')
    },
    openStaff() {
      router.push('/hcpm-app-042022/home/staff/')
    },
    openListStaff() {
      router.push('/hcpm-app-042022/home/list-staff/')
    },
    openAddStaff() {
      router.push('/hcpm-app-042022/home/add-staff/')
    },
    openCustomer() {
      router.push('/hcpm-app-042022/home/customer/')
    },
    openListCustomer() {
      router.push('/hcpm-app-042022/home/list-customer/')
    },
    openAddCustomer() {
      router.push('/hcpm-app-042022/home/add-customer/')
    }
  }
}
</script>
<style>
@import "../../assets/SCSS/_side-bar.scss";
</style>