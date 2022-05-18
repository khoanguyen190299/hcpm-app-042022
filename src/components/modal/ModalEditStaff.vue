<template>
  <div
      class="modal fade"
      id="modalEditStaff"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header p-4">
          <h5 class="modal-title text-danger">Chỉnh sửa thông tin nhân viên</h5>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="cancelEditStaff"
          ></button>
        </div>
        <div class="modal-body p-4">
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
                  <input type="text" class="form-control fs-12" v-model="formEditStaff.name">
                </div>
                <div class="mt-2">
                  <label class="fw-500">Tuổi</label>
                  <input type="text" class="form-control fs-12" v-model="formEditStaff.age">
                </div>
                <div class="mt-2">
                  <label class="fw-500">Số điện thoại</label>
                  <input type="text" class="form-control fs-12" v-model="formEditStaff.phone">
                </div>
                <div class="mt-2">
                  <label class="fw-500">Email</label>
                  <input type="text" class="form-control fs-12" v-model="formEditStaff.email">
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <label class="fw-500">Bộ phận</label>
                  <b-form-select  class="form-control fs-12" v-model="formEditStaff.lang"></b-form-select>
                </div>
                <div class="mt-2">
                  <label class="fw-500">Thời gian tuyển</label>
                  <input type="date" class="form-control fs-12" v-model="formEditStaff.time">
                </div>
                <div class="mt-2">
                  <label class="fw-500">Địa chỉ</label>
                  <input type="text" class="form-control fs-12" v-model="formEditStaff.address">
                </div>
              </div>
              <div class="w-100">
                <div class="mt-2">
                  <label class="fw-500">Thông tin thêm</label>
                  <textarea class="w-100 form-control fs-12" v-model="formEditStaff.moreInfo"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer p-4">
          <button
              type="button"
              class="btn btn-sm btn-secondary fw-500"
              data-bs-dismiss="modal"
              @click="cancelEditStaff"
          >
            Hủy
          </button>
          <button
              type="button"
              class="btn btn-sm btn-success fw-500"
              @click="saveEditStaff"
              data-bs-dismiss="modal"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalEditStaff",
  data() {
    return {
      formEditStaff: [],
      url: 'https://628324fc92a6a5e4621ea622.mockapi.io/employee/',
    }
  },
  props: {

  },
  created() {
    this.emitter.on('editStaff', (staff) => {
      this.formEditStaff = staff
    })
  },
  methods: {
    cancelEditStaff() {
      this.$emit('cancelEditStaff', true)
    },
    saveEditStaff() {
      const data = {...this.formEditStaff}
      axios.put(this.url + data.id, data)
          .then(() => {
            this.$emit('editStaffSuccess')
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    },
  }
}
</script>

<style scoped>

</style>