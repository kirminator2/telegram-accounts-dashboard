import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus } from "lucide-react";

const Tasks = () => {
  const { t } = useLanguage();

  // Mock data
  const tasks = [
    {
      id: 1,
      name: "Update profile photos",
      status: "In Progress",
      dueDate: "2024-03-01",
      assignee: "John Doe",
      priority: "High",
    },
    {
      id: 2,
      name: "Schedule posts",
      status: "Pending",
      dueDate: "2024-03-05",
      assignee: "Jane Smith",
      priority: "Medium",
    },
  ];

  return (
    <PageLayout title={t("tasks")} description={t("manageAccounts")}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t("searchTasks")}
              className="w-[300px]"
            />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            {t("addTask")}
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("taskName")}</TableHead>
                <TableHead>{t("taskStatus")}</TableHead>
                <TableHead>{t("dueDate")}</TableHead>
                <TableHead>{t("assignee")}</TableHead>
                <TableHead>{t("priority")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{task.status}</Badge>
                  </TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>
                    <Badge>{task.priority}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </PageLayout>
  );
};

export default Tasks;