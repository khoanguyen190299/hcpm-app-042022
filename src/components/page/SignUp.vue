<template>
  <div class="main">
    <div class="container">
      <div class="logo">
        <img class="w-100" src="../../assets/images/logo.png" alt>
      </div>
      <div class="login">
        <h5 class="login-title text-center">Đăng ký</h5>
        <div class="mt-2 p-2">
          <input
              type="email"
              class="form-control mt-3"
              placeholder="Email"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
          >
          <input
              type="text"
              class="form-control mt-3"
              placeholder="Số điện thoại"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
          >
          <input
              type="password"
              class="form-control mt-3"
              placeholder="Password"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
          >
          <input
              type="password"
              class="form-control mt-3"
              placeholder="Nhập lại password"
              style="
                background-color: Transparent;
                background-repeat:no-repeat;
                color: white;
              "
          >
          <p class="mb-0 mt-3">
            <span class="fs-12">Nếu bạn đã có tài khoản, </span>
            <a class="text-decoration-none" href="http://localhost:8080/login">Đăng nhập</a>
          </p>
        </div>
        <div class="d-flex">
          <button
              class="btn-login btn btn-outline-light fw-bold"
              type="submit"
              @click="login"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    login() {
      window.open("http://localhost:8080/login", "_self");
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_login.scss";
</style>