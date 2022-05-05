<template>
  <div class="position-absolute onboarding w-100 h-100 start-0">
    <div class="container">
      <div class="text-center">
        <div class="logo">
          <img class="w-100" src="../../assets/images/logo.png" alt>
        </div>
        <p class="mt-3 text-white fs-14">Đào tạo & Phát triển kỹ năng chuyên môn</p>
        <button
            class="btn btn-lg btn-success"
            @click="started"
        >
          Bắt đầu
          <img class="mb-1 ms-2" src="../../assets/images/icons/right-arrow-1.png">
        </button>
        <ModalConfirmDeleteStaff />
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import ModalConfirmDeleteStaff from "@/components/modal/ModalConfirmDeleteStaff";

export default {
  name: "OnBoarding",
  components: {ModalConfirmDeleteStaff},
  methods: {
    started() {
      router.push('/hcpm-app-042022/login/')
    }
  }
}
</script>

<style>
.onboarding {
  background-color: #184658 ;
  padding-top: 150px;
}
</style>