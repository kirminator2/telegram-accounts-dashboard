import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Download, Trash, CheckSquare } from "lucide-react";

// Mock data
const accounts = [
  {
    id: 1,
    name: "@alex_smith",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    status: "Active",
    project: "Marketing",
    timeSpent: "2h 15m",
    lastActive: "2024-02-20",
    posts: 156,
    followers: 1200,
  },
  {
    id: 2,
    name: "@emma_wilson",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    status: "Inactive",
    project: "Sales",
    timeSpent: "45m",
    lastActive: "2024-02-19",
    posts: 89,
    followers: 850,
  },
  {
    id: 3,
    name: "@john_doe",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    status: "Suspended",
    project: "Support",
    timeSpent: "5h 30m",
    lastActive: "2024-02-18",
    posts: 234,
    followers: 2300,
  },
];

const projects = ["All Projects", "Marketing", "Sales", "Support"];
const statuses = ["All Statuses", "Active", "Inactive", "Suspended"];

export function AccountsTable() {
  const [selectedAccounts, setSelectedAccounts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch = account.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesProject =
      selectedProject === "All Projects" || account.project === selectedProject;
    const matchesStatus =
      selectedStatus === "All Statuses" || account.status === selectedStatus;
    return matchesSearch && matchesProject && matchesStatus;
  });

  const toggleSelection = (id: number) => {
    setSelectedAccounts((prev) =>
      prev.includes(id)
        ? prev.filter((accountId) => accountId !== id)
        : [...prev, id]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500";
      case "inactive":
        return "bg-yellow-500";
      case "suspended":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            placeholder="Search accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
          <Select
            value={selectedProject}
            onValueChange={setSelectedProject}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              {projects.map((project) => (
                <SelectItem key={project} value={project}>
                  {project}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={selectedStatus}
            onValueChange={setSelectedStatus}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="default" size="sm">
            <CheckSquare className="h-4 w-4 mr-2" />
            Bulk Actions
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input
                  type="checkbox"
                  onChange={() =>
                    setSelectedAccounts(
                      selectedAccounts.length === accounts.length
                        ? []
                        : accounts.map((a) => a.id)
                    )
                  }
                  checked={selectedAccounts.length === accounts.length}
                  className="h-4 w-4"
                />
              </TableHead>
              <TableHead>Account</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time Spent</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Posts</TableHead>
              <TableHead>Followers</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAccounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedAccounts.includes(account.id)}
                    onChange={() => toggleSelection(account.id)}
                    className="h-4 w-4"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={account.photo} />
                      <AvatarFallback>
                        {account.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{account.name}</span>
                  </div>
                </TableCell>
                <TableCell>{account.project}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${getStatusColor(account.status)} text-white`}
                  >
                    {account.status}
                  </Badge>
                </TableCell>
                <TableCell>{account.timeSpent}</TableCell>
                <TableCell>{account.lastActive}</TableCell>
                <TableCell>{account.posts}</TableCell>
                <TableCell>{account.followers}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}