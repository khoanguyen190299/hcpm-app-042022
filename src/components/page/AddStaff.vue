<template>
  <div class="staff">
    <div class="toast-success hcpm-toast" :class="!isShowToats? 'hide-toast' : 'show-toast'">Thêm thành công</div>
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Thêm nhân viên</h6>
    </div>
    <div class="staff-content">
      <div class="staff-box">
        <div class="d-flex flex-wrap">
          <div class="me-3 mb-2">
            <label class="fw-500">Ảnh đại diện</label>
            <div class="add-avatar">
              <img class="w-100" src="../../assets/images/logo.png" alt>
            </div>
          </div>

          <div class="row flex-grow-1">
            <div class="col-md-6">
              <div>
                <label class="fw-500">Họ và tên</label>
                <input type="text" class="form-control fs-12" placeholder="Ví dụ: Nguyễn Văn A" v-model="formStaff.name">
              </div>
              <div class="mt-2">
                <label class="fw-500">Tuổi</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập tuổi..." v-model="formStaff.age">
              </div>
              <div class="mt-2">
                <label class="fw-500">Số điện thoại</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập số điện thoại..." v-model="formStaff.phone">
              </div>
              <div class="mt-2">
                <label class="fw-500">Email</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập email..." v-model="formStaff.email">
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <label class="fw-500">Bộ phận</label>
                <b-form-select :options="lang" class="form-control fs-12" v-model="formStaff.lang"></b-form-select>
              </div>
              <div class="mt-2">
                <label class="fw-500">Thời gian tuyển</label>
                <input type="date" class="form-control fs-12" v-model="formStaff.time">
              </div>
              <div class="mt-2">
                <label class="fw-500">Địa chỉ</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập địa chỉ..." v-model="formStaff.address">
              </div>
            </div>
            <div class="w-100">
              <div class="mt-2">
                <label class="fw-500">Thông tin thêm</label>
                <textarea class="w-100 form-control fs-12" v-model="formStaff.moreInfo"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-secondary fw-500" @click="cancelAddStaff">Hủy</button>
            <button class="btn btn-sm btn-success fw-500" @click="addStaff">Thêm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "AddStaff",
  data() {
    return {
      isShowToats: false,
      lang: ['Java','Java','Java','Java','Java'],
      formStaff: {}
    }
  },
  methods: {
    cancelAddStaff() {
      router.go(-1)
    },
    addStaff() {
      const data = this.formStaff
      fetch('https://62674f9201dab900f1bd5a5c.mockapi.io/staff/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            this.isShowToats = true
            var me = this
            setTimeout(function () {
              me.isShowToats = false
            }, 3000)

          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_add-staff.scss";
</style>