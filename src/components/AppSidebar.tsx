import {
  Users,
  ListTodo,
  Users2,
  GitFork,
  Share2,
  BarChart3,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export function AppSidebar() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const menuItems = [
    { title: t("accounts"), icon: Users, url: "/" },
    { title: t("tasks"), icon: ListTodo, url: "/tasks" },
    { title: t("audiences"), icon: Users2, url: "/audiences" },
    { title: t("parsing"), icon: GitFork, url: "/parsing" },
    { title: t("affiliate"), icon: Share2, url: "/affiliate" },
    { title: t("statistics"), icon: BarChart3, url: "/statistics" },
    { title: t("settings"), icon: Settings, url: "/settings" },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.url);
                      }}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}