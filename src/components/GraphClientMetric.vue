<template>
  <div>
    <div id="clien" style="width: 400px;height: 200px;"></div>
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
        var myChart = echarts.init(document.getElementById('clien'));
            let option = {
                title: {
        text: 'Clientes',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: e.map(res => {
            return res.nombre
        })
    },
    series: [
        {
            name: 'Metrica',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: e.map(res => {
                return {value:res.clientes, name:res.nombre}
            })
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