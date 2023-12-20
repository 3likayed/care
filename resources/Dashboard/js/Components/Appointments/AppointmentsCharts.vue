
<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from 'primevue/chart';
onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, prp235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        plugins: {
            legend: {
                labels: {
                    color: 'rgb(119,119,119)'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'rgb(119,119,119)'
                },
                grid: {
                    color: 'rgb(119,119,119,.2)'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'rgb(119,119,119)'
                },
                grid: {
                    color: 'rgb(119,119,119,.2)'
                }
            }
        }
    };
}
</script>
