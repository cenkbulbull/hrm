import EmployeeCard from "@/components/EmployeeCard";
import WorkScheduleCard from "@/components/WorkScheduleCard";

const page = ({ params }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-1">
        <EmployeeCard
          className="cols-span-1"
          fullname="Cenk Bülbül"
          title="Frontend Developer"
          tel="05366666666"
          email="test@mail.com"
          startDate="18.06.2001"
          department="Software"
          salary="45000"
          detail={true}
        />
      </div>
      <div className="col-span-2">
        <WorkScheduleCard />
      </div>
    </div>
  );
};

export default page;
