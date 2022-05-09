<template>
  <div class="staff">
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Chỉnh sửa thông tin nhân viên</h6>
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
                <input type="text" class="form-control fs-12" placeholder="Ví dụ: Nguyễn Văn A">
              </div>
              <div class="mt-2">
                <label class="fw-500">Tuổi</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập tuổi...">
              </div>
              <div class="mt-2">
                <label class="fw-500">Số điện thoại</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập số điện thoại...">
              </div>
              <div class="mt-2">
                <label class="fw-500">Email</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập email...">
              </div>
            </div>
            <div class="col-md-6">
              <div>
                <label class="fw-500">Bộ phận</label>
                <b-form-select :options="lang" class="form-control fs-12"></b-form-select>
              </div>
              <div class="mt-2">
                <label class="fw-500">Thời gian tuyển</label>
                <input type="date" class="form-control fs-12">
              </div>
              <div class="mt-2">
                <label class="fw-500">Địa chỉ</label>
                <input type="text" class="form-control fs-12" placeholder="Nhập địa chỉ...">
              </div>
            </div>
            <div class="w-100">
              <div class="mt-2">
                <label class="fw-500">Thông tin thêm</label>
                <textarea class="w-100 form-control fs-12"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-secondary fw-500" @click="cancelEditStaff">Hủy</button>
            <button class="btn btn-sm btn-success fw-500">Lưu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { inject } from 'vue'
import { ref } from 'vue'
export default {
  name: "EditStaff",
  data() {
    return {
      lang: ['Java','Java','Java','Java','Java'],
      getDataEditStaff: {},
    }
  },
  mounted() {
    this.getDataEditStaff = this.count
    console.log(this.getDataEditStaff)
  },
  setup() {
    const emitter = inject('emitter');
    const data = emitter.on('editStaff', value => {
      return value
    });
    const count = ref(data)
    return {
      count
    }
  },
  methods: {
    cancelEditStaff() {
      router.push('/hcpm-app-042022/home/list-staff/')
    },
  },
}
</script>

<style>
@import "../../assets/SCSS/_add-staff.scss";
</style>