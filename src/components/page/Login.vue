<template>
  <div class="main">
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
              placeholder="Email"
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
          <div class="d-flex justify-content-between mt-3">
            <div class="d-flex align-items-center">
              <input type="checkbox">
              <p class="ms-2 mb-0">Remember</p>
            </div>
            <a class="sign-up" href="http://localhost:8080/sign-up">Đăng ký</a>
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
export default {
  name: "Log-in",
  methods: {
    login() {
      window.open("http://localhost:8080/home", "_self");
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_login.scss";
</style>