<template>
  <div>
    <div id="main" style="width: 400px;height: 200px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import service from '@/services'

export default {
    mounted(){
        this.storeGraph()
    },
    methods:{        
        async storeGraph(){
            const store = await service.getStore() // traido los datos del service
            this.echartGraph(store) // ejecuto funcios para graficos y envio parametro del store
        },
        echartGraph(e){
        var myChart = echarts.init(document.getElementById('main'));
            let option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {          
            type: 'shadow'        
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: e.map(res => {
                return res.nombre
            }),
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'satisfaccion',
            type: 'bar',
            barWidth: '40%',
            data: e.map(res => {
                return res.satisfaccion
            }),
        }
    ]
};


             myChart.setOption(option);

        }
    }
}
</script>

<style>
</style>