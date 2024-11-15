import EmployeeCard from "@/components/EmployeeCard";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function page() {
  return (
    <div className="relative h-full">
      <div className="grid grid-cols-5 gap-3">
        <EmployeeCard
          fullname="Cenk Bülbül"
          title="Frontend Developer"
          tel="05366666666"
          department="Software"
        />
        <EmployeeCard
          fullname="Cenk Bülbül"
          title="Frontend Developer"
          tel="05366666666"
          department="Software"
        />
        <EmployeeCard
          fullname="Cenk Bülbül"
          title="Frontend Developer"
          tel="05366666666"
          department="Software"
        />
        <EmployeeCard
          fullname="Cenk Bülbül"
          title="Frontend Developer"
          tel="05366666666"
          department="Software"
        />
        <EmployeeCard
          fullname="Cenk Bülbül"
          title="Frontend Developer"
          tel="05366666666"
          department="Software"
        />
        <EmployeeCard
          fullname="Cenk Bülbül"
          title="Frontend Developer"
          tel="05366666666"
          department="Software"
        />
      </div>

      <Pagination className="absolute bottom-0">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
