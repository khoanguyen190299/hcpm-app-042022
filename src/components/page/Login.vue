<template>
  <div class="main">
    <div class="toast-success hcpm-toast" :class="!isLogin? 'hide-toast' : 'show-toast'">Đăng nhập thành công</div>
    <div class="toast-danger hcpm-toast" :class="!isLoginFail? 'hide-toast' : 'show-toast'">Email hoặc Password không đúng</div>
    <div class="spinner-border text-secondary position-absolute top-50 start-50" role="status" v-if="isLogin">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="container">
      <div class="logo">
        <img class="w-100" src="../../assets/images/logo.png" alt>
      </div>
      <div class="login">
        <h5 class="login-title text-center">Đăng nhập</h5>
        <div class="mt-2 p-2">
          <input
              type="email"
              class="form-control mt-3"
              :class="(inputValue && !formInput.email) ? 'empty-value' : ''"
              placeholder="Email"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
              v-model="formInput.email"
          >
          <label
              class="fs-12"
              :class="(inputValue && !formInput.email) ? 'empty-email' : 'd-none'"
          >
            <i class="fal fa-exclamation-circle me-1"></i>
            Vui lòng nhập Email
          </label>
          <input
              type="password"
              class="form-control mt-3"
              :class="(inputValue && !formInput.password) ? 'empty-value' : ''"
              placeholder="Password"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
              v-model="formInput.password"
          >
          <label
              class="fs-12"
              :class="(inputValue && !formInput.password) ? 'empty-email' : 'd-none'"
          >
            <i class="fal fa-exclamation-circle me-1"></i>
            Vui lòng nhập Password
          </label>
          <div class="d-flex justify-content-between mt-3">
            <div class="d-flex align-items-center">
              <input type="checkbox">
              <p class="ms-2 mb-0">Remember</p>
            </div>
            <a class="sign-up" href="#" @click="signUp">Đăng ký</a>
          </div>
        </div>
        <div class="d-flex">
          <button
              class="btn-login btn btn-outline-light fw-bold"
              type="submit"
              @click="login"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import {getDataUser} from "@/composables/api";
export default {
  name: "Log-in",
  data() {
    return {
      isLogin: false,
      inputValue: false,
      isLoginFail: false,
      formInput: [],
      acount: [],
      dataAcount: {},
    }
  },
  created () {
    this.getData()
  },
  methods: {
    signUp() {
      router.push('/hcpm-app-042022/sign-up/')
    },
    login() {
      var me = this
      if (!this.formInput.email || !this.formInput.password) {
        this.inputValue = true
      }
      const account  = this.acount.filter(item => {
        if(item.email === this.formInput.email && item.password === this.formInput.password) {
         return item
        }
      })
      if(account[0]) {
        this.isLogin = true
        setTimeout(function () {
          this.isLogin = false
        }, 2000)
        setTimeout(function () {
          router.push('/hcpm-app-042022/home/')
        }, 1500)
      } else if (this.formInput.email && this.formInput.password) {
        this.isLoginFail = true
        setTimeout(function () {
          me.isLoginFail = false
        }, 2000)
      }
    },
    async getData() {
      getDataUser().then((data) => {
        this.acount = data.data
      })
    },
  }
}
</script>

<style>
@import "../../assets/SCSS/_login.scss";
</style>