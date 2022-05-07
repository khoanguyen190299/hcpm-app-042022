<template>
  <div class="main">
    <div class="container">
      <div class="toast-success hcpm-toast" :class="!confirmPassword? 'hide-toast' : 'show-toast'">Đăng ký thành công</div>
      <div class="logo">
        <img class="w-100" src="../../assets/images/logo.png" alt>
      </div>
      <div class="login">
        <h5 class="login-title text-center">Đăng ký</h5>
        <div class="p-2">
          <input
              type="email"
              class="form-control mt-2"
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
              type="text"
              class="form-control mt-2"
              :class="(inputValue && !formInput.phone) ? 'empty-value' : ''"
              placeholder="Số điện thoại"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
              v-model="formInput.phone"
          >
          <label
              class="fs-12"
              :class="(inputValue && !formInput.phone) ? 'empty-email' : 'd-none'"
          >
            <i class="fal fa-exclamation-circle me-1"></i>
            Vui lòng nhập Số điện thoại
          </label>
          <input
              type="password"
              class="form-control mt-2"
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
          <input
              type="password"
              class="form-control mt-2"
              :class="(inputValue && !formInput.confirmPassword) ? 'empty-value' : ''"
              placeholder="Nhập lại password"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
              v-model="formInput.confirmPassword"
          >
          <label
              class="fs-12"
              :class="(inputValue && !formInput.confirmPassword) ? 'empty-email' : 'd-none'"
          >
            <i class="fal fa-exclamation-circle me-1"></i>
            Vui lòng nhập lại Password
          </label>
          <p class="mb-0 mt-3">
            <span class="fs-12">Nếu bạn đã có tài khoản, </span>
            <a class="text-decoration-none" href="#" @click="login">Đăng nhập</a>
          </p>
        </div>
        <div class="d-flex">
          <button
              class="btn-login btn btn-outline-light fw-bold"
              type="submit"
              @click="signUp"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "SignUp",
  data() {
    return {
      inputValue: false,
      formInput: [],
      confirmPassword: false
    }
  },
  methods: {
    login() {
      router.push('/hcpm-app-042022/login/')
    },
    signUp() {
      if (!this.formInput.email ||
          !this.formInput.phone ||
          !this.formInput.password ||
          !this.formInput.confirmPassword
      ) {
        this.inputValue = true
      }
      if (this.formInput.password === this.formInput.confirmPassword &&
          this.formInput.email &&
          this.formInput.phone &&
          this.formInput.password
      ) {
        this.confirmPassword = true
        var me = this
        setTimeout(function () {
          me.confirmPassword = false
        }, 3000)
        setTimeout(function () {
          router.push('/hcpm-app-042022/login/')
        }, 4000)
      }
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_login.scss";
</style>