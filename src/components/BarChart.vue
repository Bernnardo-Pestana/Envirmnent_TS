<template>
 <div class="div">
    <Bar :chart-data="chartData" />
 </div>
</template>

<script>


import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {DataInfo} from '../../types/DataInfo.interface'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { 0;}
    },
    plugins: {
      type: Object,
      default: () => {0;}
    },
    Data_chart : DataInfo,
    Country_Name : String,
    Type:String
  },
  data() {
    return {
      chartData: {
        labels: this.Data_chart.map(x=>x.Date),
        datasets: [
          {
            label: this.Country_Name +'/'+this.Type,
            backgroundColor: '#f87979',
            data: this.Data_chart.map( x=> x.Average )
          }
        ]
      },
    }
    },
 
  
}
</script>

<style>
.div{
    width: 500px;
    display:inline-block;
    margin: auto;
}
</style>