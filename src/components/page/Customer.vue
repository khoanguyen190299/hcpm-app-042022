<template>
  <div class="staff">
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Khách hàng</h6>
    </div>
    <div class="staff-content">
      <div class="staff-box">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="d-flex status">
              <div class="img-status">
                <img class="w-100" src="../../assets/images/img-home-1.png" alt=" ">
              </div>
              <div class="status-content">
                <p class="mb-0 fw-bold">20</p>
                <p class="mb-0 fs-14">COMPLETED</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex status">
              <div class="img-status">
                <img class="w-100" src="../../assets/images/img-home-2.png" alt=" ">
              </div>
              <div class="status-content">
                <p class="mb-0 fw-bold">12</p>
                <p class="mb-0 fs-14">NEW</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex status">
              <div class="img-status">
                <img class="w-100" src="../../assets/images/img-home-3.png" alt=" ">
              </div>
              <div class="status-content">
                <p class="mb-0 fw-bold">12</p>
                <p class="mb-0 fs-14">PAUSE</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="d-flex status">
              <div class="img-status">
                <img class="w-100" src="../../assets/images/img-home-4.png" alt=" ">
              </div>
              <div class="status-content">
                <p class="mb-0 fw-bold">1</p>
                <p class="mb-0 fs-14">WP</p>
              </div>
            </div>
          </div>
        </div>
        <div class="home-box mb-3">
          <div class="row">
            <div class="col-lg-5">
              <highcharts :options="chartOptions" class="mt-4 chart-parent"/>
            </div>
            <div class="col-lg-7">
              <highcharts :options="chartColumn" class="mt-4 chart-parent"/>
            </div>
          </div>
        </div>
      </div>

      <!--      <div class="staff-box">
              <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner d-flex justify-content-center">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="partner-item ms-0">
                      <img src="../../assets/images/logo.png" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <div class="partner-item ms-0">
                      <img src="../../assets/images/logo.png" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="partner-item ms-0">
                      <img src="../../assets/images/logo.png" class="d-block w-100" alt="...">
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>-->
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
import {Chart} from 'highcharts-vue'
export default {
  name: "CusTomer",
  components: {
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'pie'
        },
        title: '',
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
              'Area (square km): <b>{point.y}</b><br/>' +
              'Population density (people per square km): <b>{point.z}</b><br/>'
        },
        series: [{
          minPointSize: 10,
          innerSize: '50%',
          zMin: 0,
          name: 'countries',
          data: [
            {
              name: 'Spain',
              y: 905370,
              z: 92.9,
            }, {
              name: 'France',
              y: 351500,
              z: 118.7
            }
          ]
        }]
      },
      chartColumn: {
        chart: {
          type: 'column'
        },
        title: '',
        xAxis: {
          categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: '',
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.1,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0]
          },
          {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5]
          }
        ]
      }
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_customer.scss";
</style>