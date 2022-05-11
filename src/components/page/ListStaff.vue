<template>
  <div class="staff">
    <div class="toast-success hcpm-toast" :class="!isShowToats? 'hide-toast' : 'show-toast'">Xóa thành công</div>
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Danh sách nhân viên</h6>
    </div>
    <div class="staff-content">
      <div class="staff-box h-100 overflow-hidden">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex mb-3">
            <button
                class="btn btn-sm btn-small btn-outline-secondary"
            >
              <i class="fal fa-upload me-2"></i>
              Import
            </button>
            <button
                class="btn btn-sm btn-small btn-outline-secondary ms-3"
            >
              <i class="fal fa-download me-2"></i>
              Export
            </button>
          </div>
          <div class="d-flex">
            <div class="search mb-3">
              <input class="form-control input-search fs-14" type="search" placeholder="Tìm kiếm...">
              <img class="icon-search" src="../../assets/images/icons/search.png">
            </div>
            <button
                class="btn btn-sm btn-success mb-3 ms-2 btn-small"
                title="Thêm nhân viên"
                @click="addStaff"
            >
              <i class="fal fa-user-plus me-1 fs-12"></i>
              Thêm
            </button>
          </div>
        </div>
        <div class="table-box h-100 overflow-auto">
          <div class="overflow-auto w-100 mb-0" v-if="this.staffs.length">
            <div class="table-heading fw-500 d-flex w-100 m-0">
              <div class="table-title th-class-1 border-start-0">Chọn</div>
              <div class="table-title th-class-2">Mã</div>
              <div class="table-title th-class-2 justify-content-center">Ảnh</div>
              <div class="table-title th-class-4">Họ và tên</div>
              <div class="table-title th-class-1">Tuổi</div>
              <div class="table-title th-class-4">Số điện thoại</div>
              <div class="table-title th-class-4">Email</div>
              <div class="table-title th-class-4">Address</div>
              <div class="table-title th-class-3">Bộ phận</div>
              <div class="table-title action th-class-3 d-flex justify-content-center">Action</div>
            </div>
            <div
                class="table-item d-flex fs-14"
                v-for="staff in staffs"
                :key="staff.id"
            >
              <div class="table-content th-class-1 border-start-0 justify-content-center">
                <input type="checkbox">
              </div>
              <div class="table-content th-class-2">HN{{ staff.id }}</div>
              <div class="table-content th-class-2 justify-content-center">
                <div class="img-staff p-0">
                  <img class="w-100" :src="staff.image" alt=" " />
                </div>
              </div>
              <div class="table-content th-class-4">{{ staff.name }}</div>
              <div class="table-content th-class-1">{{ staff.age }}</div>
              <div class="table-content th-class-4">{{ staff.phone }}</div>
              <div class="table-content th-class-4">{{ staff.email }}</div>
              <div class="table-content th-class-4">{{ staff.address }}</div>
              <div class="table-content th-class-3">{{ staff.lang }}</div>
              <div class="table-content bg-white action th-class-3">
                <div class="action-item d-flex justify-content-center m-auto">
                  <div @click="emitter.emit('editStaff',staff)" title="Edit" class="me-3 icon-action">
                    <i class="fal fa-edit"></i>
                  </div>
                  <div
                      title="Delete"
                      class="icon-action"
                      data-bs-toggle="modal"
                      data-bs-target="#modalConfirmDeleteStaff"
                      @click="deleteStaff(staff)"
                  >
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div
                  class="modal fade"
                  id="modalConfirmDeleteStaff"
              >
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header p-2">
                      <h5 class="modal-title text-danger">Thông báo</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-2">
                      <p class="fs-14">Bạn có chắc chắn muốn xóa nhân viên này?</p>
                    </div>
                    <div class="modal-footer p-2">
                      <button type="button" class="btn btn-sm btn-secondary fw-500" data-bs-dismiss="modal">Hủy</button>
                      <button
                          type="button"
                          class="btn btn-sm btn-success fw-500"
                          @click="confirmDeleteStaff"
                          data-bs-dismiss="modal"
                      >
                        Đồng ý
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5 mb-5" v-else>
            <h5 class="not-staff">Hiện tại chưa có nhân viên nào!</h5>
          </div>
        </div>
      </div>
      <div class="license fs-12 text-secondary">
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
  name: "ListStaff",
  components: {},
  data() {
    return {
      staffs: [],
      isShowToats: false,
      isConfirmDeleteStaff: false,
      staffCoppy: {}
    }
  },
  created () {
    this.getData();
    this.emitter.on("editStaff", (e) => {
      console.log(e + "okay bro");
      router.push('/hcpm-app-042022/home/list-staff/edit-staff/')
    });
  },
  methods: {
    async getData() {
      const response = await fetch("https://62674f9201dab900f1bd5a5c.mockapi.io/staff/staff")
      const data = await response.json()
      this.staffs = data
    },
    addStaff() {
      router.push('/hcpm-app-042022/home/add-staff/')
    },
    // editStaff(staff) {
    //   console.log(staff)
    //   router.push('/hcpm-app-042022/home/list-staff/edit-staff/')
    // },
    confirmDeleteStaff() {
      const data = this.staffCoppy
      fetch('https://62674f9201dab900f1bd5a5c.mockapi.io/staff/staff/' + this.staffCoppy.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            this.getData()
            this.isShowToats = true
            var me = this
            setTimeout(function () {
              me.isShowToats = false
            }, 3000)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    },
    deleteStaff(staff) {
      this.staffCoppy = staff
    },
  }
}
</script>

<style>
@import "../../assets/SCSS/_list-staff.scss";
</style>