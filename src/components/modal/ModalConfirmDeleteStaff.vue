<template>
  <div class="container">
    <!-- Modal -->
    <div class="modal fade" id="modalConfirmDeleteStaff" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header p-2">
            <h5 class="modal-title text-danger" id="exampleModalLabel">Thông báo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-2">
            <p class="fs-14">Bạn có chắc chắn muốn xóa nhân viên này?</p>
          </div>
          <div class="modal-footer p-2">
            <button type="button" class="btn btn-sm btn-secondary fw-500" data-bs-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-sm btn-success fw-500" @click="deleteStaff(staff)">Đồng ý</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalConfirmDeleteStaff",
}
</script>

<style scoped>

</style>