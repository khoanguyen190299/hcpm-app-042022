<template>
  <div class="main">
    <div class="container">
      <div class="toast-success hcpm-toast" :class="!isShowToats? 'hide-toast' : 'show-toast'">Đăng ký thành công</div>
      <div class="toast-danger hcpm-toast" :class="!isRegistrationSuccess? 'hide-toast' : 'show-toast'">Đăng ký thất bại</div>
<!--      <div class="logo">-->
<!--        <img class="w-100" src="../../assets/images/logo.png" alt>-->
<!--      </div>-->
      <div class="login">
        <h5 class="login-title text-center">Đăng ký</h5>
        <div class="p-2">
          <input
              type="email"
              class="form-control mt-2"
              :class="((inputValue && !formInput.email) || isEmailType) ? 'empty-value' : ''"
              placeholder="Email"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
              v-model="formInput.email"
              @blur="requireEmail"
          >
          <label
          class="fs-12"
          :class="((inputValue && !formInput.email) || isEmailType) ? 'empty-email' : 'd-none'"
          >
          <i class="fal fa-exclamation-circle me-1"></i>
<!--          Vui lòng nhập Email-->
            {{ emailRequied }}
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
              :class="((inputValue && !formInput.password) || isLengthPassword) ? 'empty-value' : ''"
              placeholder="Password"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
              v-model="formInput.password"
              @blur="requirePassword"
          >
          <label
              class="fs-12"
              :class="((inputValue && !formInput.password) || isLengthPassword) ? 'empty-email' : 'd-none'"
          >
            <i class="fal fa-exclamation-circle me-1"></i>
            {{ passwordRequied }}
          </label>
          <input
              type="password"
              class="form-control mt-2"
              :class="((inputValue && !formInput.confirmPassword) || isConfirmPassword) ? 'empty-value' : ''"
              placeholder="Nhập lại password"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
              v-model="formInput.confirmPassword"
              @blur="confirmPasswordSuccess"
          >
          <label
              class="fs-12"
              :class="((inputValue && !formInput.confirmPassword) || isConfirmPassword) ? 'empty-email' : 'd-none'"
          >
            <i class="fal fa-exclamation-circle me-1"></i>
<!--            Vui lòng nhập lại Password-->
            {{ confirmPassword }}
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
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      validEmail: false,
      validPassword: false,
      isRegistrationSuccess: false,
      isEmailType: false,
      isLengthPassword: false,
      emailRequied: 'Vui lòng nhập Email',
      passwordRequied: 'Vui lòng nhập Password',
      isConfirmPassword: false,
      confirmPassword: 'Vui lòng nhập lại Password',
      inputValue: false,
      formInput: [],
      isShowToats: false,
      url: 'https://628324fc92a6a5e4621ea622.mockapi.io/acount/',
    }
  },
  methods: {
    requireEmail() {
      let inputValueEmail = this.formInput.email
      let emailRequire = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
      if (!emailRequire.test(inputValueEmail) && inputValueEmail) {
        this.emailRequied = 'Vui lòng nhập đúng Email'
        this.isEmailType = true
        // inputValue.focus;
        // return false;
      }
      else{
        this.isEmailType = false
        this.emailRequied = 'Vui lòng nhập Email'
      }
      if (emailRequire.test(inputValueEmail)) {
        console.log('email hop le')
        this.validEmail = true
      } else this.validEmail = false
    },
    requirePassword() {
      let inputValuePassword = this.formInput.password
      if (inputValuePassword.length > 8) {
        console.log('password hop le')
        this.validPassword = true
        this.isLengthPassword = false
      } else {
        this.validPassword = false
        this.isLengthPassword = true
        this.passwordRequied = 'Mật khẩu phải chứa ít nhất 8 ký tự'
      }
    },
    confirmPasswordSuccess() {
      if (this.formInput.password === this.formInput.confirmPassword) {
        this.isConfirmPassword = false
      } else {
        this.isConfirmPassword = true
        this.confirmPassword = 'Xác nhận mật khẩu không chính xác'
      }
    },
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
          this.formInput.password &&
          this.validEmail && this.validPassword
      ) {
        let me = this
        axios.post(this.url, {
          email: this.formInput.email,
          phone: this.formInput.phone,
          password: this.formInput.password
        })
            .then(()=> {

              this.isShowToats = true
              setTimeout(function () {
                me.isShowToats = false
              }, 3000)
              setTimeout(function () {
                router.push('/hcpm-app-042022/login/')
              }, 2500)
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      } else if (
          this.formInput.password &&
          this.formInput.email &&
          this.formInput.phone &&
          this.formInput.password &&
          this.formInput.confirmPassword
      ) {
        let me = this
        this.isRegistrationSuccess = true
        setTimeout(function () {
          me.isRegistrationSuccess = false
        }, 3000)
      }
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_login.scss";
</style>