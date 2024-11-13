import MeetingRequestCard from "@/components/MeetingRequestCard";
import TodoCard from "@/components/TodoCard";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import EducationCard from "@/components/EducationCard";

export default function page() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <MeetingRequestCard />
      <TodoCard />

      <div className="col-span-2">
        <EducationCard />
      </div>

      <div className="col-span-4 bg-white p-5 rounded-2xl ">
        <Table>
          <TableCaption>Job applications are listed.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Position</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Resume</TableHead>
              <TableHead>Approval</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Frontend Developer</TableCell>
              <TableCell className="font-medium">cenkbulbul@mail.com</TableCell>
              <TableCell className="font-medium">
                <a href="test.pdf" download={"test.pdf"}>
                  test.pdf
                </a>
              </TableCell>
              <TableCell className="flex gap-2">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="w-[120px]" variant="outline">
                      Confirm
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Approving</AlertDialogTitle>
                      <AlertDialogDescription>
                        Job interviews will begin.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      className="w-[120px] bg-red-600 text-white"
                      variant="outline"
                    >
                      Reject
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Rejecting</AlertDialogTitle>
                      <AlertDialogDescription>
                        Send an e-mail stating that it is negative.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
