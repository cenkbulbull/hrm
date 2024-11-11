"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const ChartCard = ({
  chartType = "line", // varsayılan olarak 'line' tipi grafik
  labels,
  datasets,
  chartTitle,
  xLabel,
  yLabel,
  minY,
  backgroundColors, // Pie grafik için renkler
}) => {
  // Veri yapılandırması
  const data = {
    labels: labels,
    datasets: [
      {
        label: chartTitle || "My Dataset",
        data: datasets,
        fill: chartType === "line", // Line chart için iç dolgu
        borderColor: "#3B82F6", // Line chart için çizgi rengi
        backgroundColor:
          chartType === "pie"
            ? backgroundColors // Pie chart için verilen renkler
            : "#3B82F6", // Bar ve Line chart için renk
        pointBackgroundColor: "#3B82F6", // Nokta rengi (line chart)
        tension: chartType === "line" ? 0.1 : 0, // Çizgi gerilmesi sadece line chart için
        borderWidth: chartType === "bar" ? 1 : 0, // Bar chart için kenarlık kalınlığı
      },
    ],
  };

  // Grafik opsiyonları
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: yLabel || "Y-axis Label",
        },
        display: chartType !== "pie", // Pie grafiklerinde Y ekseni gösterilmez
        min: minY || 0,
      },
      x: {
        title: {
          display: true,
          text: xLabel || "X-axis Label",
        },
        display: chartType !== "pie", // Pie grafiklerinde X ekseni gösterilmez
      },
    },
  };

  // Grafik tipi
  const renderChart = () => {
    switch (chartType) {
      case "line":
        return <Line data={data} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      default:
        return <Line data={data} options={options} />;
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl max-w-[500px] max-h-[400px]">
      {renderChart()}
    </div>
  );
};

export default ChartCard;
