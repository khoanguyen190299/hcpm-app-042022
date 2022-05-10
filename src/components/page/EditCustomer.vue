<template>
  <div class="staff">
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Chỉnh sửa thông tin khách hàng</h6>
    </div>
    <div class="staff-content">
      <div class="m-auto add-customer fs-14">
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Name:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Name">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Phone:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Phone">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Email:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Email">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Brand:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Brand">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Country:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Country">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Language:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Language">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">WorkPlace:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="WorkPlace">
          </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-secondary fw-500">Hủy</button>
            <button class="btn btn-sm btn-success fw-500">Lưu</button>
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
export default {
  name: "EditCustomer"
}
</script>

<style>
@import "../../assets/SCSS/_add-customer.scss";
</style>