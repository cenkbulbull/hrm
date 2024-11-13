import ChartCard from "@/components/ChartCard";
import InformationCard from "@/components/InformationCard";
import TodayCard from "@/components/TodayCard";

import { FiUsers } from "react-icons/fi";

export default function Home() {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const datasets = [12, 45, 67, 43, 89, 34, 67];

  const pieData = [40, 30, 20, 10]; // Pie grafik verisi
  const pieLabels = ["test", "tes2", "tess3", "test4"]; // Pie grafik etiketleri
  const pieColors = ["#3B82F6", "#2C6EC8", "#60A9F3", "#276AB1"]; // Pie grafik renkleri
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <TodayCard className="cols-span-1" />

        <div className="col-span-2 grid grid-cols-3 gap-3">
          <InformationCard
            text="Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim."
            count={452}
            icon={<FiUsers />}
          />

          <InformationCard
            text="Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim."
            count={452}
            icon={<FiUsers />}
          />

          <InformationCard
            text="Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim."
            count={452}
            icon={<FiUsers />}
          />

          <InformationCard
            text="Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim."
            count={452}
            icon={<FiUsers />}
          />

          <InformationCard
            text="Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim."
            count={452}
            icon={<FiUsers />}
          />

          <InformationCard
            text="Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
        occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat
        eu tempor labore enim adipisicing minim ad. Est in quis eu dolore
        occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum.
        Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis
        deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
        voluptate sunt elit mollit officia ad enim sit consectetur enim."
            count={452}
            icon={<FiUsers />}
          />
        </div>

        {/* Line Chart */}
        <ChartCard
          chartType="line" // Line grafik
          labels={labels}
          datasets={datasets}
          chartTitle="Line Chart"
          xLabel="Months"
          yLabel="Values"
        />

        {/* Bar Chart */}
        <ChartCard
          chartType="bar" // Bar grafik
          labels={labels}
          datasets={datasets}
          chartTitle="Bar Chart"
          xLabel="Months"
          yLabel="Values"
        />

        {/* Pie Chart */}
        <ChartCard
          chartType="pie" // Grafik tipini "pie" olarak belirliyoruz
          labels={pieLabels}
          datasets={pieData}
          chartTitle="Pie Chart Example"
          backgroundColors={pieColors} // Renkleri dışarıdan veriyoruz
        />
      </div>
    </div>
  );
}
