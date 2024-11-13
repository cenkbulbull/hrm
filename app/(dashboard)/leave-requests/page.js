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

export default function page() {
  return (
    <div className="bg-white p-5 rounded-2xl ">
      <Table>
        <TableCaption>Leave requests are listed.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Start date</TableHead>
            <TableHead className="w-[150px]">End Date</TableHead>
            <TableHead className="w-[150px]">Number of days</TableHead>
            <TableHead>Fullname</TableHead>
            <TableHead className="text-right">Approval status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">12.11.2024</TableCell>
            <TableCell className="font-medium">15.11.2024</TableCell>
            <TableCell className="font-medium">3</TableCell>
            <TableCell className="font-medium">Cenk Bülbül</TableCell>
            <TableCell className="text-right">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-[120px]" variant="outline">
                    Waiting
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Permission is approved?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Permission is being approved, are you sure?
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

          <TableRow>
            <TableCell className="font-medium">12.11.2024</TableCell>
            <TableCell className="font-medium">15.11.2024</TableCell>
            <TableCell className="font-medium">3</TableCell>
            <TableCell className="font-medium">Cenk Bülbül</TableCell>
            <TableCell className="text-right">
              <Button className="w-[120px]" disabled>
                Approved
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
