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
              :items="items"
              :fields="fields"
              responsive
              bordered
              borderless
              hover
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCustomer",
  data() {
    return {
      fields: [
        {
          key: 'code',
          sortable: false,
          label: 'ID',
          thClass: 'th-class-1 table-title',
        },
        {
          key: 'name',
          sortable: true,
          label: 'Họ và tên',
          thClass: 'th-class-4 table-title'
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
          key: 'branch',
          sortable: true,
          label: 'Branch',
          thClass: 'th-class-3 table-title'
        },
        {
          key: 'country',
          sortable: true,
          label: 'Country',
          thClass: 'th-class-3 table-title'
        },
        {
          key: 'language',
          sortable: true,
          label: 'Language',
          thClass: 'th-class-2 table-title'
        },
        {
          key: 'workPlace',
          sortable: true,
          label: 'Workplace',
          thClass: 'th-class-2 table-title'
        },
      ],
      items: [
        {
          isActive: true,
          code: 1,
          name: 'An',
          branch: 'abc',
          phone: 1232345678,
          email: 'Dickerson@gmail.com',
          country: 'Macdonald',
          language: 'Macdonald',
          workPlace: 'Macdonald',
        },
        {
          isActive: true,
          code: 1,
          name: 'An',
          branch: 'abc',
          phone: 1232345678,
          email: 'Dickerson@gmail.com',
          country: 'Macdonald',
          language: 'Macdonald',
          workPlace: 'Macdonald',
        },
      ]
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_list-staff.scss";
</style>