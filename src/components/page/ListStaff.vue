<template>
  <div class="staff">
    <div class="toast-success hcpm-toast" :class="!isShowToats? 'hide-toast' : 'show-toast'">Xóa thành công</div>
    <div class="toast-success hcpm-toast" :class="!isShowToatsEdit? 'hide-toast' : 'show-toast'">Chỉnh sửa thành công</div>
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
        <div class="w-100 mb-0" v-if="this.staffs.length">
          <div class="text-secondary fs-12 mb-2 d-flex align-items-center fw-500">
            Selected:
            <strong class="ms-3">
              {{ selectedQuantity }} / {{ staffs.length }}
            </strong>
            <i class="fas fa-caret-right ms-3 me-3"></i>
            <div class="delete-all me-3" @click="deleteAllStaff">Xóa</div>
            <div v-if="isShowStaff" class="delete-all">
              <i class="far fa-eye-slash"></i>
            </div>
            <div v-else class="delete-all">
              <i class="far fa-eye"></i>
            </div>
          </div>
        </div>
        <div class="table-box h-100 overflow-auto">
          <div class="overflow-auto w-100 mb-0" v-if="this.staffs.length">
            <div class="table-heading fw-500 d-flex w-100 m-0">
              <div class="table-title th-class-1 border-start-0 justify-content-center">
                <input type="checkbox" class="check-box-all" @change="checkedAll" title="Chọn tất cả">
              </div>
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
                v-for="(staff,index) in staffs"
                :key="staff.id"
            >
              <div class="table-content th-class-1 border-start-0 justify-content-center">
                <input class="check-box-item" type="checkbox" value="staff.id" @change="checked(index,staff)" >
              </div>
              <div class="table-content th-class-2"><p>HN{{ staff.id }}</p></div>
              <div class="table-content th-class-2 justify-content-center">
                <div class="img-staff p-0">
                  <img class="w-100" :src="staff.image" alt=" " />
                </div>
              </div>
              <div class="table-content th-class-4"><p>{{ staff.name }}</p></div>
              <div class="table-content th-class-1"><p>{{ staff.age }}</p></div>
              <div class="table-content th-class-4"><p>{{ staff.phone }}</p></div>
              <div class="table-content th-class-4"><p>{{ staff.email }}</p></div>
              <div class="table-content th-class-4"><p>{{ staff.address }}</p></div>
              <div class="table-content th-class-3"><p>{{ staff.lang }}</p></div>
              <div class="table-content bg-white action th-class-3">
                <div class="action-item d-flex justify-content-center m-auto">
                  <div
                      v-if="isShowStaff"
                      title="Hide"
                      class="me-1 icon-action"
                      @click="hideStaff(staff)"
                  >
                    <i class="far fa-eye-slash"></i>
                  </div>
                  <div
                      v-else
                      title="Show"
                      class="me-1 icon-action"
                      @click="hideStaff(staff)"
                  >
                    <i class="far fa-eye"></i>
                  </div>
                  <div
                       title="Edit"
                       data-bs-toggle="modal"
                       data-bs-target="#modalEditStaff"
                       class="me-1 icon-action"
                       @click="emitter.emit('editStaff', staff)"
                  >
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
              <!-- Modal confirm delete staff-->
              <ModalConfirmDeleteStaff />

              <!-- Modal edit staff-->
              <ModalEditStaff
                  @cancelEditStaff="cancelEditStaff"
                  @editStaffSuccess="editStaffSuccess"
              />
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
import { getDataEmployee } from "@/composables/api";
import axios from "axios";
import ModalConfirmDeleteStaff from "@/components/modal/ModalConfirmDeleteStaff";
import ModalEditStaff from "@/components/modal/ModalEditStaff";
export default {
  name: "ListStaff",
  components: {ModalEditStaff, ModalConfirmDeleteStaff},
  data() {
    return {
      staffs: [],
      isShowToats: false,
      isShowStaff: true,
      isShowToatsEdit: false,
      listIdStaffChecked: [],
      selectedQuantity: 0,
      url: 'https://628324fc92a6a5e4621ea622.mockapi.io/employee/',
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getDataEmployee().then((data) => {
        this.staffs = data.data
      })
    },
    addStaff() {
      router.push('/hcpm-app-042022/home/add-staff/')
    },
    deleteStaff(staff) {
      this.emitter.on('deleteConfirmed', (value) => {
        if(value === true) {
          axios.delete(this.url + staff.id)
              .then(()=> {
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
        }
      })
    },
    cancelEditStaff() {
      this.getData()
    },
    editStaffSuccess() {
      this.isShowToatsEdit = true
      setTimeout(function () {
        this.isShowToatsEdit = false
      }, 3000)
    },
    checked(index,staff) {
      if(document.getElementsByClassName("check-box-item")[index].checked === true) {
        this.listIdStaffChecked.push(this.staffs[index])
        this.selectedQuantity = this.listIdStaffChecked.length
      }
      else{
        this.listIdStaffChecked.forEach((item,i) => {
          if(item == staff) {
            this.listIdStaffChecked.splice(i,1);
            this.selectedQuantity = this.listIdStaffChecked.length
          }
        })
      }
    },
    checkedAll() {
      var listCheck = document.querySelectorAll(".check-box-item")
      if(document.getElementsByClassName("check-box-all")[0].checked === true) {
        this.listIdStaffChecked = this.staffs
        this.selectedQuantity = this.listIdStaffChecked.length
        listCheck.forEach(item => {
          item.checked = true
        })
      } else {
        this.listIdStaffChecked = []
        listCheck.forEach(item => {
          item.checked = false
          this.selectedQuantity = this.listIdStaffChecked.length
        })
      }
    },
    deleteAllStaff() {

    },
    hideStaff(staff) {
      console.log(staff.id)
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_list-staff.scss";
</style>