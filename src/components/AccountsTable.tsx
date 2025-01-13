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
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Download, Trash, CheckSquare } from "lucide-react";

// Mock data
const accounts = [
  {
    id: 1,
    name: "@alex_smith",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    status: "Active",
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
    timeSpent: "5h 30m",
    lastActive: "2024-02-18",
    posts: 234,
    followers: 2300,
  },
];

export function AccountsTable() {
  const [selectedAccounts, setSelectedAccounts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search accounts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <div className="space-x-2">
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