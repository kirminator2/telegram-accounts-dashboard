import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Settings = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("settings")} description={t("manageSettings")}>
      <div className="space-y-8">
        {/* Settings content will be added later */}
        <div>Settings content coming soon</div>
      </div>
    </PageLayout>
  );
};

export default Settings;