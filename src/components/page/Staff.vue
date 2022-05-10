<template>
  <div class="staff">
    <div class="staff-header w-100">
      <h6 class="staff-title mb-0">Nhân viên</h6>
    </div>
    <div class="staff-content">
      <div class="staff-box">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <highcharts :options="chartOptions" class="mt-4 chart-parent"/>
              </div>
              <div class="card-footer bg-white text-center">
                <p class="mb-0 text-secondary">Biểu đồ nhân viên theo bộ phận</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header bg-white">
                <b-form-select class="border-0 w-25" :options="langOption"></b-form-select>
              </div>
              <div class="card-body">
                <highcharts :options="lineChartOption" class="mt-4 chart-parent"/>
              </div>
              <div class="card-footer bg-white text-center">
                <p class="mb-0 text-secondary">Biểu đồ bộ phận theo tháng</p>
              </div>
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
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
export default {
  name: "StaFf",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      langOption: [{Active: true, name: 'java'},'java','java'],
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: '',
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'VueJS',
              y: 5,
              sliced: true,
              selected: true,
              color: 'red'
            },
            {
              name: 'Java',
              y: 1,
              color: '#66FF00'
            },
          ]
        }]
      },
      lineChartOption: {
        title: '',
        xAxis: {
          tickInterval: 1,
          categories: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },

        yAxis: {
          type: 'linear',
          minorTickInterval: 1,
          title: ''
        },

        tooltip: {
          headerFormat: '<b>{series.name}</b><br />',
          pointFormat: 'x = {point.x}, y = {point.y}'
        },

        series: [{
          data: [0, 2, 3, 80, 2, 0, 0, 0, 0, 0],
        }]
      }
    }
  }
}
</script>

<style>
@import "../../assets/SCSS/_staff.scss";
</style>