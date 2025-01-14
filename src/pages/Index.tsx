import { PageLayout } from "@/components/PageLayout";
import { AccountsTable } from "@/components/AccountsTable";
import { StatsCards } from "@/components/StatsCards";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("dashboard")} description={t("manageAccounts")}>
      <div className="space-y-8">
        <StatsCards />
        <AccountsTable />
      </div>
    </PageLayout>
  );
};

export default Index;