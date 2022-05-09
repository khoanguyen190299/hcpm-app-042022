<template>
  <div class="staff">
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Danh sách khách hàng</h6>
    </div>
    <div class="staff-content">
      <div class="staff-box">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex mb-3">
            <button class="btn btn-sm btn-outline-secondary"><i class="fal fa-upload me-2"></i>Import</button>
            <button class="btn btn-sm btn-outline-secondary ms-3"><i class="fal fa-download me-2"></i>Export</button>
          </div>
          <div class="d-flex">
            <div class="search mb-3">
              <input class="form-control input-search fs-14" type="search" placeholder="Tìm kiếm...">
              <img class="icon-search" src="../../assets/images/icons/search.png">
            </div>
            <button
                class="btn btn-sm btn-success mb-3 ms-2"
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
          <!--          <b-table
                        class="table-content m-0"
                        :items="staffItems"
                        :fields="staffTitle"
                        responsive
                        bordered
                        borderless
                        hover
                    >
                      <template #cell(action)>
                        <div class="action-item d-flex justify-content-center">
                          <div @click="editStaff" title="Edit" class="me-3 icon-action">
                            <img class="w-100" src="../../assets/images/icons/editing.png">
                          </div>
                          <div @click="row.deleteStaff" title="Delete" class="icon-action">
                            <img class="w-100" src="../../assets/images/icons/bin.png">
                          </div>
                        </div>
                      </template>
                      <template #cell(image)>
                        <div class="img-staff">
                          <img class="w-100" :src="staffItems.image" alt=" ">
                        </div>
                      </template>
                    </b-table>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
</script>

<style>
@import "../../assets/SCSS/_list-staff.scss";
</style>