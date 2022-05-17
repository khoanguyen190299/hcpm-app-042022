<template>
  <div class="staff">
    <div class="toast-success hcpm-toast" :class="!isShowToats? 'hide-toast' : 'show-toast'">Thêm thành công</div>
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Thêm khách hàng</h6>
    </div>
    <div class="staff-content">
      <div class="m-auto add-customer fs-14">
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Name:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Name" v-model="formCustomer.name">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Phone:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Phone" v-model="formCustomer.phone">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Email:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Email" v-model="formCustomer.email">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Brand:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Brand" v-model="formCustomer.brand">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Country:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Country" v-model="formCustomer.country">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">Language:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="Language" v-model="formCustomer.language">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-2 d-flex align-items-center">
            <label class="fw-500">WorkPlace:</label>
          </div>
          <div class="col-md-10">
            <input type="text" class="form-control fs-12" placeholder="WorkPlace" v-model="formCustomer.workplace">
          </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-secondary fw-500" @click="cancelAddCustomer">Hủy</button>
            <button class="btn btn-sm btn-success fw-500" @click="addCustomer">Thêm</button>
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
</template>

<script>
import router from "@/router";

export default {
  name: "AddCustomer",
  data() {
    return {
      isShowToats: false,
      formCustomer: {}
    }
  },
  methods: {
    cancelAddCustomer() {
      router.push('/hcpm-app-042022/home/list-customer/')
    },
    addCustomer() {
      const data = this.formCustomer
      fetch('https://62674f9201dab900f1bd5a5c.mockapi.io/staff/customer', {
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
              router.push('/hcpm-app-042022/home/list-customer/')
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
@import "../../assets/SCSS/_add-customer.scss";
</style>