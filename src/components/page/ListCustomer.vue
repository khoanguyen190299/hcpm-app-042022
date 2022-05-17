<!--<template>
  <div class="staff">
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Danh sách khách hàng</h6>
    </div>
    <div class="staff-content">
      <div class="staff-box">
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
                title="Thêm khách hàng"
            >
              <i class="fal fa-user-plus me-1 fs-12"></i>
              New
            </button>
          </div>
        </div>
        <div class="table-box">
          <div class="overflow-auto w-100 mb-0" v-if="this.staffs.length">
            <div class="table-heading fw-500 d-flex w-100 m-0">
              <div class="table-title th-class-1 border-start-0">Chọn</div>
              <div class="table-title th-class-1">ID</div>
              <div class="table-title th-class-4">Name</div>
              <div class="table-title th-class-3">Phone</div>
              <div class="table-title th-class-4">Email</div>
              <div class="table-title th-class-3">Branch</div>
              <div class="table-title th-class-3">Country</div>
              <div class="table-title th-class-3">Language</div>
              <div class="table-title th-class-3">Workplace</div>
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
              <div class="table-content th-class-1">{{ staff.id }}</div>
              <div class="table-content th-class-4">{{ staff.name }}</div>
              <div class="table-content th-class-3">{{ staff.phone }}</div>
              <div class="table-content th-class-4">{{ staff.email }}</div>
              <div class="table-content th-class-3">{{ staff.branch }}</div>
              <div class="table-content th-class-3">{{ staff.country }}</div>
              <div class="table-content th-class-3">{{ staff.language }}</div>
              <div class="table-content th-class-3">{{ staff.workplace }}</div>
              <div class="table-content bg-white action th-class-3">
                <div class="action-item d-flex justify-content-center m-auto">
                  <div @click="editStaff(staff)" title="Edit" class="me-3 icon-action">
                    <i class="fal fa-edit"></i>
                  </div>
                  <div @click="deleteStaff(staff)" data-bs-toggle="modal" data-bs-target="#modalConfirmDeleteStaff" title="Delete" class="icon-action">
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5 mb-5" v-else>
            <h5 class="not-staff">Hiện tại chưa có khách hàng nào!</h5>
          </div>
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
</template>-->
<template>
  <div class="staff">
    <div class="toast-success hcpm-toast" :class="!isShowToats? 'hide-toast' : 'show-toast'">Xóa thành công</div>
    <div class="toast-success hcpm-toast" :class="!isShowToatsEdit? 'hide-toast' : 'show-toast'">Chỉnh sửa thành công</div>
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Danh sách khách hàng</h6>
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
                @click="addCustomer"
            >
              <i class="fal fa-user-plus me-1 fs-12"></i>
              Thêm
            </button>
          </div>
        </div>
        <div class="w-100 mb-0" v-if="this.customers.length">
          <div class="text-secondary fs-12 mb-2 d-flex align-items-center fw-500">
            Selected:
            <strong class="ms-3">
              {{ selectedQuantity }} / {{ customers.length }}
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
          <div class="overflow-auto w-100 mb-0" v-if="this.customers.length">
            <div class="table-heading fw-500 d-flex w-100 m-0">
              <div class="table-title th-class-1 border-start-0">Chọn</div>
              <div class="table-title th-class-1">ID</div>
              <div class="table-title th-class-4">Name</div>
              <div class="table-title th-class-3">Phone</div>
              <div class="table-title th-class-4">Email</div>
              <div class="table-title th-class-3">Brand</div>
              <div class="table-title th-class-3">Country</div>
              <div class="table-title th-class-3">Language</div>
              <div class="table-title th-class-3">Workplace</div>
              <div class="table-title action th-class-3 d-flex justify-content-center">Action</div>
            </div>
            <div
                class="table-item d-flex fs-14"
                v-for="(customer,index) in customers"
                :key="customer.id"
            >
              <div class="table-content th-class-1 border-start-0 justify-content-center">
                <input class="check-box-item" type="checkbox" value="staff.id" @change="checked(index,customer)" >
              </div>
              <div class="table-content th-class-1">{{ customer.id }}</div>
              <div class="table-content th-class-4">{{ customer.name }}</div>
              <div class="table-content th-class-3">{{ customer.phone }}</div>
              <div class="table-content th-class-4">{{ customer.email }}</div>
              <div class="table-content th-class-3">{{ customer.branch }}</div>
              <div class="table-content th-class-3">{{ customer.country }}</div>
              <div class="table-content th-class-3">{{ customer.language }}</div>
              <div class="table-content th-class-3">{{ customer.workplace }}</div>
              <div class="table-content bg-white action th-class-3">
                <div class="action-item d-flex justify-content-center m-auto">
                  <div
                      v-if="isShowStaff"
                      title="Edit"
                      class="me-1 icon-action"
                      @click="hideStaff(customer)"
                  >
                    <i class="far fa-eye-slash"></i>
                  </div>
                  <div
                      v-else
                      title="Edit"
                      class="me-1 icon-action"
                      @click="hideStaff(customer)"
                  >
                    <i class="far fa-eye"></i>
                  </div>
                  <div
                      title="Edit"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEditStaff"
                      class="me-1 icon-action"
                      @click="deleteStaff(customer)"
                  >
                    <i class="fal fa-edit"></i>
                  </div>
                  <div
                      title="Delete"
                      class="icon-action"
                      data-bs-toggle="modal"
                      data-bs-target="#modalConfirmDeleteStaff"
                      @click="deleteStaff(customer)"
                  >
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
              <!-- Modal confirm delete customer-->
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
                      <p class="fs-14">Bạn có chắc chắn muốn xóa khách hàng này?</p>
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

              <!-- Modal edit customer-->
              <div
                  class="modal fade"
                  id="modalEditStaff"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header p-4">
                      <h5 class="modal-title text-danger">Chỉnh sửa thông tin khách hàng</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                      <div class="m-auto add-customer fs-14">
                        <div class="row mt-4">
                          <div class="col-md-2 d-flex align-items-center">
                            <label class="fw-500">Name:</label>
                          </div>
                          <div class="col-md-10">
                            <input type="text" class="form-control fs-12" placeholder="Name" v-model="customerCoppy.name">
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-md-2 d-flex align-items-center">
                            <label class="fw-500">Phone:</label>
                          </div>
                          <div class="col-md-10">
                            <input type="text" class="form-control fs-12" placeholder="Phone" v-model="customerCoppy.phone">
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-md-2 d-flex align-items-center">
                            <label class="fw-500">Email:</label>
                          </div>
                          <div class="col-md-10">
                            <input type="text" class="form-control fs-12" placeholder="Email" v-model="customerCoppy.email">
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-md-2 d-flex align-items-center">
                            <label class="fw-500">Brand:</label>
                          </div>
                          <div class="col-md-10">
                            <input type="text" class="form-control fs-12" placeholder="Brand" v-model="customerCoppy.brand">
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-md-2 d-flex align-items-center">
                            <label class="fw-500">Country:</label>
                          </div>
                          <div class="col-md-10">
                            <input type="text" class="form-control fs-12" placeholder="Country" v-model="customerCoppy.country">
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-md-2 d-flex align-items-center">
                            <label class="fw-500">Language:</label>
                          </div>
                          <div class="col-md-10">
                            <input type="text" class="form-control fs-12" placeholder="Language" v-model="customerCoppy.language">
                          </div>
                        </div>
                        <div class="row mt-4">
                          <div class="col-md-2 d-flex align-items-center">
                            <label class="fw-500">WorkPlace:</label>
                          </div>
                          <div class="col-md-10">
                            <input type="text" class="form-control fs-12" placeholder="WorkPlace" v-model="customerCoppy.workplace">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer p-4">
                      <button type="button" class="btn btn-sm btn-secondary fw-500" data-bs-dismiss="modal" @click="cancelEditCustomer">Hủy</button>
                      <button
                          type="button"
                          class="btn btn-sm btn-success fw-500"
                          @click="saveEditCustomer"
                          data-bs-dismiss="modal"
                      >
                        Lưu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5 mb-5" v-else>
            <h5 class="not-staff">Hiện tại chưa có khách hàng nào!</h5>
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
  name: "ListCustomer",
  components: {},
  data() {
    return {
      customers: [],
      isShowToats: false,
      isShowStaff: true,
      isShowToatsEdit: false,
      customerCoppy: {},
      dataStaffNotEdit: {},
      listIdStaffChecked: [],
      selectedQuantity: 0,
    }
  },
  created () {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await fetch("https://62674f9201dab900f1bd5a5c.mockapi.io/staff/customer")
      const data = await response.json()
      this.customers = data
    },
    addCustomer() {
      router.push('/hcpm-app-042022/home/add-customer/')
    },
    confirmDeleteStaff() {
      const data = this.customerCoppy
      fetch('https://62674f9201dab900f1bd5a5c.mockapi.io/staff/customer/' + this.customerCoppy.id, {
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
    deleteStaff(customer) {
      this.customerCoppy = {...customer}
      this.dataStaffNotEdit = customer
    },
    saveEditCustomer() {
      const data = {...this.customerCoppy}
      fetch('https://62674f9201dab900f1bd5a5c.mockapi.io/staff/customer/' + data.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
          .then(response => response.json())
          .then(() => {
            this.getData()
            this.isShowToatsEdit = true
            var me = this
            setTimeout(function () {
              me.isShowToatsEdit = false
            }, 3000)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    },
    cancelEditCustomer() {
      this.customerCoppy = this.dataStaffNotEdit
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
      if(document.getElementsByClassName("check-box-all")[0].checked ==true) {
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
      // const myPromise = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve('foo');
      //   }, 300);
      // });
      //
      // myPromise
      //     .then()
      //     .then()
      //     .then();

      // this.listIdStaffChecked.forEach(item => {
      //   const data = item
      //   fetch('https://62674f9201dab900f1bd5a5c.mockapi.io/staff/staff/' + item.id, {
      //     method: 'DELETE',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      //   })
      //       .then(response => response.json())
      //       .then(() => {
      //         this.getData()
      //       })
      //       .catch((error) => {
      //         console.error('Error:', error);
      //       });
      //
      //
      // })
    },
    hideStaff(customer) {
      console.log(customer.id)
    }
  }
}
</script>
<!--<script>
import router from "@/router";

export default {
  name: "ListCustomer",
  data() {
    return {
      staffs: [],
      isShowToats: false,
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData() {
      const response = await fetch("https://62674f9201dab900f1bd5a5c.mockapi.io/staff/customer")
      const data = await response.json()
      this.staffs = data
    },
    addStaff() {
      router.push('/hcpm-app-042022/home/add-customer/')
    },
    // editStaff(staff) {
    //   console.log(staff)
    //   router.push('/hcpm-app-042022/home/list-staff/edit-staff/')
    // },
    // deleteStaff(staff) {
    //   const data = this.staffs
    //   fetch('https://62674f9201dab900f1bd5a5c.mockapi.io/staff/staff/' + staff.id, {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log('Success:', data);
    //         this.getData()
    //         this.isShowToats = true
    //         var me = this
    //         setTimeout(function () {
    //           me.isShowToats = false
    //         }, 3000)
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });
    // },
  }
}
</script>-->

<style>
@import "../../assets/SCSS/_list-staff.scss";
</style>