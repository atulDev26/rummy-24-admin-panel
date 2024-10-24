import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ poolGames=20, dealsGames=50, pointGames=70 }) => {
  const [chartData] = useState({
    series: [poolGames, dealsGames, pointGames], 
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Pool Rummy', 'Deals Rummy', 'Point Rummy'], 
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      title: {
        text: 'Games Running',
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom:"50px"
        }
      },
      colors: ['#FF6347', '#36A2EB', '#4CAF50'], 
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(0);
        }
      },
      legend: {
        position: 'bottom', 
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val} games`;
          }
        }
      }
    }
  });

  return (
    <div className="bg-slate-100 dark:bg-[#1F2937] max-w-full h-full rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Game Stats</h2>
      <div className="flex justify-center">
      <Chart
        options={chartData.options} 
        series={chartData.series} 
        type="donut" 
        width="380" 
      />
      </div>
    </div>
  );
};

export default DonutChart;
