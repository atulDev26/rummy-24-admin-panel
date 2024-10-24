import React, { useState } from "react";
import Chart from "react-apexcharts";
import { formatAmount } from "../../utils/GlobalFunction/globalFunction";

const BarChart = ({gateWayDeposit = 0 , gateWayWithDraw= 0 , adminDeposit = 0 , adminWithDraw = 0 , commission = 0 , referAmount= 0}) => {
   let getThemeColor = localStorage.getItem("theme")
   console.log(getThemeColor)
  const [chartData] = useState({
    series: [
      {
        name: "Transactions",
        data: [100.25, 30, 60, 90, 200, 15],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "flat",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "G Deposit",
          "G Withdrawal",
          "A Deposit",
          "A Withdrawal",
          "Commission",
          "Refer",
        ],
      },
      yaxis: {
        title: {
          text: "₹ (thousands)",
          style: {
            color: getThemeColor === 'dark' ? '#ffffff': '#000000',
          },
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(1);
          },
          style: {
            colors: ["#000"],
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `₹ ${val}k`;
          },
        },
      },
      grid: {
        borderColor: "#e5e7eb",
      },
      colors: ["#ff6347"],
      title: {
        align: "center",
        margin: 20,
        offsetY: 10,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#000",
        },
      },
    },
  });

  return (
    <div className="p-6 bg-slate-100 dark:bg-[#1F2937] dark:text-white text-black rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Bar Chart</h2>
        {/* <a href="#" className="text-red-400 dark:text-red-500">Detail</a> */}
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        (Transaction Analytics)
      </p>
      <Chart
        options={{
          ...chartData.options,
          yaxis: {
            ...chartData.options.yaxis,
            labels: {
              ...chartData.options.yaxis.labels,
              style: {
                colors: ["#1F2937"],
                ...{
                    colors: getThemeColor === 'dark' ? ['#ffffff'] : ['#000000'] ,
                },
              },
            },
          },
        }}
        series={chartData.series}
        type="bar"
        height={350}
      />
      <div className="grid grid-cols-3 gap-4 mt-6 text-sm text-gray-700 dark:text-gray-300">
        <div>
          Gateway Deposit:{" "}
          <span className="text-black dark:text-white">₹{formatAmount(gateWayDeposit)}</span>
        </div>
        <div>
          Gateway Withdraw:{" "}
          <span className="text-black dark:text-white">₹{formatAmount(gateWayWithDraw)}</span>
        </div>
        <div>
          Admin Deposit: <span className="text-black dark:text-white">₹{formatAmount(adminDeposit)}</span>
        </div>
        <div>
          Admin Withdraw: <span className="text-black dark:text-white">₹{formatAmount(adminDeposit)}</span>
        </div>
        <div>
          Commission: <span className="text-black dark:text-white">₹{formatAmount(commission)}</span>
        </div>
        <div>
          Refer Amount: <span className="text-black dark:text-white">₹{formatAmount(referAmount)}</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
