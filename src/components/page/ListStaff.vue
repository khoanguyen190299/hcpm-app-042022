<template>
  <div class="staff">
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Danh sách nhân viên</h6>
    </div>
    <div class="staff-content">
      <div class="staff-box h-100">
        <div class="d-flex justify-content-between">
          <div class="d-flex mb-3">
            <button class="btn btn-sm btn-outline-secondary">Import</button>
            <button class="btn btn-sm btn-outline-secondary ms-3">Export</button>
          </div>
          <div class="search mb-3">
            <input class="form-control input-search fs-14" type="search" placeholder="Tìm kiếm...">
            <img class="icon-search" src="../../assets/images/icons/search.png">
          </div>
        </div>
        <div class="table-box">
          <b-table
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
                <div @click="deleteStaff" title="Delete" class="icon-action">
                  <img class="w-100" src="../../assets/images/icons/bin.png">
                </div>
              </div>
            </template>
          </b-table>
        </div>
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
      staffTitle: [
        {
          key: 'id',
          sortable: false,
          label: 'Mã',
          thClass: 'th-class-1 table-title',
        },
        {
          key: 'image',
          sortable: false,
          label: 'Ảnh',
          thClass: 'th-class-1 table-title',
        },
        {
          key: 'name',
          sortable: true,
          label: 'Họ và tên',
          thClass: 'th-class-3 table-title'
        },
        {
          key: 'age',
          sortable: true,
          label: 'Tuổi',
          thClass: 'th-class-1 table-title'
        },
        {
          key: 'phone',
          sortable: true,
          label: 'Số điện thoại',
          thClass: 'th-class-4 table-title'
        },
        {
          key: 'email',
          sortable: true,
          label: 'Email',
          thClass: 'th-class-3 table-title'
        },
        {
          key: 'address',
          sortable: true,
          label: 'Địa chỉ',
          thClass: 'th-class-3 table-title'
        },
        {
          key: 'lang',
          sortable: true,
          label: 'Bộ phận',
          thClass: 'th-class-2 table-title'
        },
        {
          key: 'action',
          label: 'Action',
          thClass: 'th-class-3 table-title action',
          tdClass: 'action bg-white p-0',
        },
      ],
      staffItems: [],
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData() {
      const response = await fetch("https://62674f9201dab900f1bd5a5c.mockapi.io/staff/staff")
      const data = await response.json()
      this.staffItems = data
    },
    editStaff() {
      router.push('/hcpm-app-042022/home/list-staff/edit-staff/')
    },
    deleteStaff() {

    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_list-staff.scss";
</style>