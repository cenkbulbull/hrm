import InformationCard from "@/components/InformationCard";
import TodayCard from "@/components/TodayCard";
import { FiUsers } from "react-icons/fi";

export default function Home() {
  return (
    <div>
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

      <TodayCard />
    </div>
  );
}
