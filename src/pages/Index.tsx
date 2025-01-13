import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AccountsTable } from "@/components/AccountsTable";
import { StatsCards } from "@/components/StatsCards";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your Telegram accounts and view statistics
              </p>
            </div>
            <SidebarTrigger />
          </div>
          <div className="space-y-8">
            <StatsCards />
            <AccountsTable />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;